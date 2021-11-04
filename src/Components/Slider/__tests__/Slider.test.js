import { cleanup, render } from "@testing-library/react";
import React from "react"
import moment from 'moment';
import RangeSlider from "../Slider";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe('Slider', () => {
  
    const defaultProps = {
        min: 2,
        max: 24,
        defaultVal: 12,
        setValues: jest.fn(),
        formatter: jest.fn()
    };

    it('Should render the slider successfully', () =>{
        const { asFragment } = render(<RangeSlider {...defaultProps} />);
        expect(asFragment(<RangeSlider {...defaultProps}/>)).toMatchSnapshot();
    });
});