// add date/time at the top of the page
// loop to pass through if time is in the past to grey it out and keep future green
// localstorage to save plans for said day

const $dateTime = $(".dateTime");

function dateTime() {
    $dateTime.innerHTML = dayjs().format('LLLL')
};
dateTime();