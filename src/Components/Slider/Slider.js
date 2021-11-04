import React from 'react'
import { Slider } from "antd";
import * as PropTypes from 'prop-types';
import './Slider.css'

const RangeSlider = (props) => {
    const {min, max, defaultVal, formatter, setValues} = props;
    const marks = {
        2: 'Start',
        24: 'End'
    }
    return (
        <div className="sliderContainer w-50" >
            <Slider
                min={min} // setting the min range of the slider
                max={max} // setting the max range of the slider
                marks={marks}
                onAfterChange={max => setValues(max)}
                defaultValue={defaultVal}
                disabled={false}
                tipFormatter={formatter}
            />
        </div>
    )
}

RangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    defaultVal: PropTypes.number.isRequired,
    formatter: PropTypes.func.isRequired,
    setValues: PropTypes.func.isRequired
}

export default RangeSlider
