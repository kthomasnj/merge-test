var rootEl = $('.container')
var timeEl = $('#currentDay');
var saveBtn = $('.savebtn');
var currentTime = moment().format("dddd, MMMM Do");
var currentTimeHr = moment().format("HH");
var curentTimeHrInt = moment().format("HH");
var hours = [moment("1-1-2027 08:00:00").format("ha"),moment("1-1-2027 09:00:00").format("ha"), moment("1-1-2027 10:00:00").format("ha"), moment("1-1-2027 11:00:00").format("ha"), moment("1-1-2027 12:00:00").format("ha"), moment("1-1-2027 13:00:00").format("ha"), moment("1-1-2027 14:00:00").format("ha"), moment("1-1-2027 15:00:00").format("ha"), moment("1-1-2027 16:00:00").format("ha"), moment("1-1-2027 17:00:00").format("ha"), moment("1-1-2027 18:00:00").format("ha")];
var hoursInts = [moment("1-1-2027 08:00:00").format("HH"), moment("1-1-2027 09:00:00").format("HH"), moment("1-1-2027 10:00:00").format("H"), moment("1-1-2027 10:00:00").format("HH"), moment("1-1-2027 11:00:00").format("HH"), moment("1-1-2027 12:00:00").format("HH"), moment("1-1-2027 13:00:00").format("HH"), moment("1-1-2027 14:00:00").format("HH"), moment("1-1-2027 15:00:00").format("HH"), moment("1-1-2027 16:00:00").format("HH"), moment("1-1-2027 17:00:00").format("HH"), moment("1-1-2027 18:00:00").format("HH")];


function writeFromLocalStorage () {
    for (let i = 0; i < hours.length; i++) {
        var hr8 = localStorage.getItem('8am');
        var hr9 = localStorage.getItem('9am');
        var hr10 = localStorage.getItem('10am');
        var hr11 = localStorage.getItem('11am');
        var hr12 = localStorage.getItem('12pm');
        var hr13 = localStorage.getItem('1pm');
        var hr14 = localStorage.getItem('2pm');
        var hr15 = localStorage.getItem('3pm');
        var hr16 = localStorage.getItem('4pm');
        var hr17 = localStorage.getItem('5pm');
        var hr18 = localStorage.getItem('6pm');

        $('#8am').text(hr8);
        $('#9am').text(hr9);
        $('#10am').text(hr10);
        $('#11am').text(hr11);
        $('#12pm').text(hr12);
        $('#1pm').text(hr13);
        $('#2pm').text(hr14);
        $('#3pm').text(hr15);
        $('#4pm').text(hr16);
        $('#5pm').text(hr17);
        $('#6pm').text(hr18);
    }
 }

function writeHourRows() {
    for (let i = 0; i < hours.length; i++) {
        var rowEl = $('<section>');
        var hourDiv = $('<div>');
        var textAreaSection = $('<textarea>');
        var rowBtn = $('<div>');
        var rowBtnImage = $('<img>');

         // Use IF-Then statement to change row color
        if (hoursInts[i] === currentTimeHr) {
            hourRowStyle = "present";
        } else if (Number(hoursInts[i]) > Number(curentTimeHrInt)) {
            hourRowStyle = "future";
        } else {
            hourRowStyle = "past";
        }

        // Create Row Element
        rootEl.append(rowEl);
        rowEl.attr('class', 'row');

        // Create Hour column
        rowEl.append(hourDiv);
        hourDiv.text(hours[i]);
        hourDiv.attr('class', 'hour');

        // Create Calendar Event Field        
        rowEl.append(textAreaSection);
        textAreaSection.attr('class', hourRowStyle);
        textAreaSection.attr('id', hours[i]);

        // Create Save Button
        rowEl.append(rowBtn);
        rowBtn.attr('class', 'saveBtn');
        rowBtn.attr('data-index', hours[i]);

        // Append Image to Button DIV
        rowBtn.append(rowBtnImage);
        rowBtnImage.attr('src', './assets/images/save.png');
    }
}

rootEl.click(function (event) {
    var element = event.target;

    // console.log(event.target);

    $(element).attr('src', './assets/images/save-click.png');

    if (element.matches("img") === true) {
        var index = element.parentElement.getAttribute("data-index");
        var meetingDes = $("#" + index).get(0).value;

        localStorage.setItem(index, meetingDes);
    }
})

timeEl.text(currentTime);
writeHourRows();
writeFromLocalStorage ()