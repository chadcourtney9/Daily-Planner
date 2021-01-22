// add date/time at the top of the page
// loop to pass through if time is in the past to grey it out and keep future green
// localstorage to save plans for said day

var $dateTime = $(".dateTime");
let now = dayjs();
var hour = "h";
var $h75 = $(".h-75");
var $empty = $(".empty")
var $notes = $(".notes")

// h2 date header
function date() {
    $dateTime.text(now.format("dddd, MMMM D, YYYY h:mm A"));
};
date();

function pastPresentFuture() {
    if (hour === dayjs().hour())
        $($h75).className(".present")
    else if (hour > dayjs().hour())
        $($h75).className(".past")
    else if (hour < dayjs().hour())
        $($h75).className(".future")
};
pastPresentFuture();

$($empty).on("click", function () {
    $($notes).empty();
});