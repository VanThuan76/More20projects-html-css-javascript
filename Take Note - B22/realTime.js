const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export function realTime() {
  const currDay = new Date();
  const month =
    months[currDay.getMonth()].charAt(0).toUpperCase() +
    months[currDay.getMonth()].slice(1);
  const year = currDay.getFullYear();
  const date = currDay.getDate();
  return `${month} ${date}, ${year} at ${handlerShowTime()}`;
}
export function month() {
  const currDay = new Date();
  const month = months[currDay.getMonth()];
  return month;
}
export function handlerShowTime() {
  let day = new Date();
  let hour = day.getHours();
  let minute = day.getMinutes();
  let checkSec = hour >= 12 ? "PM" : "AM";
  const currTime = `${String(hour).padStart(2, "0")}:${String(minute).padStart(
    2,
    "0"
  )} ${checkSec}`;
  return currTime;
}
setInterval(realTime() && handlerShowTime(), 60000);
