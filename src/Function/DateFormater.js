import dateFormat from "dateformat";
const DateFormater = (rawFormate) => {
  const date = dateFormat(rawFormate, "dS mmmm");
  return { date };
};
export default DateFormater;
