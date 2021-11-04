import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../../Components/Slider/Slider'
import LineChart from "../../Components/LineChart/Chart";
import EventsContext from '../../Context/Events/eventsContext';
import DataTable from '../../Components/Table/DataTable';
import nasaLogo from "../../Assets/nasa-logo.svg";

import './Home.css';
const Home = () => {
  const [eventState, dispatch] = useContext(EventsContext);
  const [graphData, setGraphDataParsed] = useState([]);
  console.log(eventState);
  useEffect(() => {
    const GraphData = () => {
      eventState.chartData.length !== 0 ?
        setGraphDataParsed([
          ['Date', 'Fires'],
          ...eventState.chartData.map(event => [event.date, event.totallength])
        ])
        :
        setGraphDataParsed(
          [
            ['Date', 'Fires'],
            [0, 0], // setting the by default graph
          ]
        )
    }
    GraphData()
  }, [eventState])

// Slider values
const setValues = async (max) => {
  let StartDate = moment().subtract(max, "month").format("YYYY-MM-DD");
  dispatch({ type: 'SET_START_DATE', payload: StartDate })
};

// It will show the how many months data coming in graph
const formatter = (value) => {
  return `${value} months`;
};


  return (
    <>
      <div className="header py-3">
        <div className="container">
          <div className="row w-100">
            <div className="col-md-2 d-flex flex-wrap justify-content-start align-items-center text-white"><img src={nasaLogo} alt="Nasa Logo"/></div>
            <div className="col-md-8 d-flex flex-wrap justify-content-start align-items-center text-white h3">Nasa EONET - Wildfires</div>
            <div className="col-md-2 d-flex flex-wrap justify-content-end align-items-center">
              <a href="https://eonet.sci.gsfc.nasa.gov/docs/v3" target="_blank" className="btn btn-light"> API Documentation</a>
            </div>
          </div>
        </div>
      </div>
        <div className="container" >
          <div className="Slider w-100 mt-3 mb-4">
            <p className="fw-bold"> Adjust slider range to change dates, currently showing from {`${ eventState.currentDate} - ${eventState.startDate}`}</p>
            <Slider min={2} max={24} defaultVal={12} formatter={formatter} setValues={setValues}/>
          </div>
          <div className="lineChart">
            <LineChart isLoading={eventState.isLoading} graphData={graphData}/>
          </div>
          <div className="datatable">
            <DataTable isLoading={eventState.isLoading} tableData={eventState.tableData} />
          </div>
        </div>
    </>
  );
};

export default Home;