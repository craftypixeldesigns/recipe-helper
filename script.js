// Timer progress bar

var timer = 0,
    perc = 0,
    timeTotal = 3000,
    timeCount = 1,
    cFlag;

function updateProgress(percentage) {
    var x = (percentage/timeTotal)*100,
        y = x.toFixed(1);
    $('#pbar_innerdiv').css("width", x + "%");
    $('#pbar_innertext').text(y + "%");
}

function animateUpdate() {
    if(perc < timeTotal) {
        perc++;
        updateProgress(perc);
        timer = setTimeout(animateUpdate, timeCount);
    } else if (perc == timeTotal) {
        $('#pbar_donetext').css("display", "block");
    }
}

// Interactions logic
// If ing-amount = value
// change the content
// then make pop up visible

// If ing-type = value
// change content + image
// make pop up visible
// if click onto substitues li
// change ing-type value = li value

function popup(type) {
    if (type = '0') {

    } else if (type = '1') {

    }
}

function amountUpdate(event) {
    if ($(".one td:contains('2 jars')")) {
        $("#ing-1").css({top: 830, left: 20});
        $("#ing-1").toggle();
    }
}

function typeUpdate() {
    if ($("#ingredients td:contains('spaghetti sauce')")) {
        $("#sub-1").css({top: 720, left: 80});
        $("#sub-1").toggle();
        // TODO click li, change img src=""

        // $("#ingredients td:contains('spaghetti sauce')").html("");
    }

    
}

$(document).ready(function() {
    // Leapmotion

    $("#pbar_outerdiv").click(function() {
        if (cFlag == undefined) {
            clearTimeout(timer);
            perc = 0;
            cFlag = true;
            animateUpdate();
        }
        else if (!cFlag) {
            cFlag = true;
            animateUpdate();
        }
        else {
            clearTimeout(timer);
            cFlag = false;
        }
    });

    $("#ing-amount").click(function(event) {
        amountUpdate(event);
    });

    $("#ing-type").click(function() {
        typeUpdate();
    });
}); 