import React from 'react'
import * as PropTypes from 'prop-types';
import { Chart } from "react-google-charts";
import Loader from '../Loader/Loader';
import './Chart.css'

const LineChart = (props) => {
  const {isLoading, graphData} = props;
  return (
    <>
      {
        isLoading ? <Loader />
          :
          <Chart
          className='LineChart'
            width={'100%'}
            height={'400px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={graphData}
            options={{
              hAxis: {
                title: 'Date (Month/Year)',
              },
              vAxis: {
                title: 'Total No. of Fires',
              },
              pointSize: 2
            }}
            rootProps={{ 'data-testid': '1' }}
          />
      }
    </>
  )
}

LineChart.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  graphData: PropTypes.array.isRequired
}

export default LineChart
