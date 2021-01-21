// add date/time at the top of the page
// loop to pass through if time is in the past to grey it out and keep future green
// localstorage to save plans for said day

var $dateTime = $(".dateTime");
let now = dayjs();

function date() {
    $dateTime.text(now.format("dddd, MMMM D, YYYY h:mm A"));
};
date();