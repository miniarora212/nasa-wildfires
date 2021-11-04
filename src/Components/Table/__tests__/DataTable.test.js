import { cleanup, render } from "@testing-library/react";
import React from "react"
import DataTable from "../DataTable";

afterEach(cleanup);
window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

describe("DataTable", () => {
    const defaultProps = {
        isLoading: false,
        tableData: [{id:'1', startDate:"2021-08-12", closeDate:"2021-11-02", title:"Test fire", inciweb:"https://test.com"}]
    };

    it("Should render the Data table successfully", () => {
        const { asFragment } = render(<DataTable {...defaultProps} />);
        expect(asFragment(<DataTable {...defaultProps}/>)).toMatchSnapshot();
    })
})