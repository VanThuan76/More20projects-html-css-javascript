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
  const day = weekday[currDay.getDay()].toUpperCase();
  const month = months[currDay.getMonth()].toUpperCase();
  const date = currDay.getDate();
  return `${day}, ${month} ${date}`;
}
setInterval(realTime(), 60000);
