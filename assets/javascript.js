$(document).ready(function () {
    // add date/time at the top of the page
    // loop to pass through if time is in the past to grey it out and keep future green
    // localstorage to save plans for said day

    var $dateTime = $(".dateTime");
    let now = dayjs();
    var currentTaskRow;


    // h2 date header
    function date() {
        $dateTime.text(now.format("dddd, MMMM D, YYYY h:mm A"));
    };
    date();
    // changes color if in past present or future
    function pastPresentFuture() {
        for (i = 0; i <= 23; i++) {
            currentTaskRow = i;
            currentTime = dayjs().format("H")

            if (currentTime > i) {
                $("#" + currentTaskRow).addClass("past");
                $("#" + currentTaskRow).children("div").addClass("past");
            }

            else if (currentTime == i) {
                $("#" + currentTaskRow).addClass("present");
                $("#" + currentTaskRow).children("div").addClass("present");
            }

            else if (currentTime < i) {
                $("#" + currentTaskRow).addClass("future");
                $("#" + currentTaskRow).children("div").addClass("future");
            }
        }
    };
    pastPresentFuture();

    //retrieves entered tasks
    function getTasks() {
        var x9 = localStorage.getItem("9am");
        var x10 = localStorage.getItem("10am");
        var x11 = localStorage.getItem("11am");
        var x12 = localStorage.getItem("12pm");
        var x1 = localStorage.getItem("1pm");
        var x2 = localStorage.getItem("2pm");
        var x3 = localStorage.getItem("3pm");
        var x4 = localStorage.getItem("4pm");
        var x5 = localStorage.getItem("5pm");
        document.getElementById("9am").innerHTML = x9;
        document.getElementById("10am").innerHTML = x10;
        document.getElementById("11am").innerHTML = x11;
        document.getElementById("12pm").innerHTML = x12;
        document.getElementById("1pm").innerHTML = x1;
        document.getElementById("2pm").innerHTML = x2;
        document.getElementById("3pm").innerHTML = x3;
        document.getElementById("4pm").innerHTML = x4;
        document.getElementById("5pm").innerHTML = x5;
    };
    getTasks();
    // stores tasks entered
    $(".btn-success").on("click", function storingTasks() {
        let hour = ($(this).attr("data-hour"));
        let textArea = $("#" + hour);
        let apptArr = textArea.val();
        localStorage.setItem(hour, JSON.stringify(apptArr))
    });
});