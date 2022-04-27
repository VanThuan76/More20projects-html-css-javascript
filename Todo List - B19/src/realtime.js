///Time-Date
export function realTime() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currDay = new Date();
  return `${months[currDay.getMonth()]}, ${
    weekday[currDay.getDay()]
  } ${currDay.getHours()}:${String(currDay.getMinutes()).padStart(2, "0")}`;
}
setInterval(realTime(), 60000);
