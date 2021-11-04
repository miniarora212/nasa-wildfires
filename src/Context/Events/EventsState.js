
import React, { useReducer, useEffect } from 'react'
import moment from "moment";
import axios from "axios";
import Reducer from './Reducer';
import EventContext from './eventsContext';

// Initialize the states
const initialState = {
    startDate: moment().subtract(12, "month").format("YYYY-MM-DD"),
    currentDate: moment().format("YYYY-MM-DD"),
    isLoading: false,
    chartData: [],
    tableData: []
};

const EventsState = ({ children }) => {
    const [eventState, dispatch] = useReducer(Reducer, initialState);
    const getData = async () => {
        dispatch({ type: 'SET_LOADING', payload: true })
        axios
            .get(
                `https://eonet.sci.gsfc.nasa.gov/api/v3/events?status=closed&category=wildfires&limit=1000&start=${eventState.startDate}&end=${eventState.currentDate}`
            )
            .then((res) => {
                // Sorting the response from the API
                let sortedData = res.data.events.sort(function (a, b) {
                    return moment(a.closed).diff(moment(b.closed))
                })
                 // Wildfire Data for line graph
                let allevents = sortedData.map((event) => {
                    let parsedDate = moment(event.closed).format("MM/YYYY");
                    return {
                        date: parsedDate,
                        totallength: res.data.events.filter(
                            (duplicateDates) =>
                                moment(duplicateDates.closed).format("MM/YYYY") === parsedDate
                        ).length,
                    };
                });

                let finalChartData = allevents.filter(
                    (el, i) => allevents.findIndex((sub) => sub.date === el.date) === i
                )
                
                // Wildfire Data for Table
                let tableData = sortedData.map((event) => {
                    return {
                        id: event.id,
                        startdate: moment(event.geometry[0].date).format("MM/DD/YYYY"),
                        closeddate: moment(event.closed).format("MM/DD/YYYY"),
                        title: event.title,
                        inciweb: event.sources[0].url,
                    }
                });
                // Seeting up the value for Reducer
                dispatch({ type: 'SET_CHART_DATA', payload: finalChartData })
                dispatch({ type: 'SET_TABLE_DATA', payload: tableData })
                dispatch({ type: 'SET_LOADING', payload: false })
            });
    };
    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, [eventState.startDate]);
    return (
        <EventContext.Provider value={[eventState, dispatch]}>
            {children}
        </EventContext.Provider>
    )
}

export default EventsState
