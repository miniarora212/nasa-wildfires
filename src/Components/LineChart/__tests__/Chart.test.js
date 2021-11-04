import React from 'React';
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Chart from "../Chart";

afterEach(cleanup);

describe('Chart', () => {

    const defaultProps = {
        isLoading: true,
        graphData: [['Date', 'Fires'], [0, 0]]
    };

    it('Should render the comment box successfully', () =>{
        const { asFragment } = render(<Chart {...defaultProps} />);
        expect(asFragment(<Chart {...defaultProps}/>)).toMatchSnapshot();
    });
});