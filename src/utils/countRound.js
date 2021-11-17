const CountRound = ({count}) => {
    function round(num) {
        return Math.abs(Number(num)) >= 1.0e+9
            ? Math.round(Math.abs(Number(num*10)) / 1.0e+9 )/10 + "B"
            : Math.abs(Number(num)) >= 1.0e+6
                ? Math.round(Math.abs(Number(num*10)) / 1.0e+6 )/10 + "M"
                : Math.abs(Number(num)) >= 1.0e+3
                    ? Math.round(Math.abs(Number(num*10)) / 1.0e+3 )/10 + "K"
                    : Math.abs(Number(num));
    }
    return round(count);
};

export default CountRound;