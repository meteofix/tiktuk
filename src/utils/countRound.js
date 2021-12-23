const CountRound = ({ count }) =>
  Math.abs(Number(count)) >= 1e9
    ? `${Math.round(Math.abs(Number(count * 10)) / 1e9) / 10}B`
    : Math.abs(Number(count)) >= 1e6
    ? `${Math.round(Math.abs(Number(count * 10)) / 1e6) / 10}M`
    : Math.abs(Number(count)) >= 1e3
    ? `${Math.round(Math.abs(Number(count * 10)) / 1e3) / 10}K`
    : Math.abs(Number(count));

export default CountRound;
