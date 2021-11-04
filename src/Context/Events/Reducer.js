const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: `${action.payload}`,
            };
        case 'SET_CHART_DATA':
            return {
                ...state,
                chartData: action.payload
            };
        case 'SET_TABLE_DATA':
            return {
                ...state,
                tableData: action.payload
            };
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;