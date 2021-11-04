import { render } from "@testing-library/react";
import React from "react"
import Loader from "../Loader";

describe("Loader", () => {
    it("Should render the loader successfully", () => {
        render(<Loader />)
    })
})