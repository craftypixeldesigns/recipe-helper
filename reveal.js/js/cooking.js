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

$(document).ready(function() {
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
}); 