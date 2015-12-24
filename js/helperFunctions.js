/* ===================Helper functions for Index.js =======================*/
/* ========================================================================*/
/* ======================= By: Chenxing Ouyang  ===========================*/
/* ========================================================================*/


// Version 1 - only everything darker
// Loop through each element that needs to be colored darker
// after showing the welcome message
function IntroductionAnimation01() {
    $(this).delay(100).queue(function() {
        $("li").each(function(index) {
            var el = $(this);
            setTimeout(function() {
                el.addClass('color-darker');
            }, index * 50);
            if ($(this).hasClass("color-darker")) {
                console.log(index + ": " + $(this).text());
            }
        });
    });
}

// Version 2 - words green, everything else darker
function IntroductionAnimation02() {
    $("li").each(function(index) {
        if ($(this).hasClass("showWords")) {
            var el = $(this);
            setTimeout(function() {
                el.addClass('selected');
                //el[0].innerHTML = word.charAt(5);
            }, index * 50);
        } else {
            var el = $(this);
            setTimeout(function() {
                el.addClass('color-darker');
                //el[0].innerHTML = word.charAt(5);
            }, index * 50);
        }
    });
}


// Version 2 - words green, everything else darker
function IntroductionAnimation02() {
    $("li").each(function(index) {
        if ($(this).hasClass("showWords")) {
            var el = $(this);
            setTimeout(function() {
                el.addClass('selected');
                //el[0].innerHTML = word.charAt(5);
            }, index * 50);
        } else {
            var el = $(this);
            setTimeout(function() {
                el.addClass('color-darker');
                //el[0].innerHTML = word.charAt(5);
            }, index * 50);
        }
    });
}


// Version 3 - change the entire screen green
function IntroductionAnimation03() {
    $("li").each(function(index) {
        var el = $(this);
        setTimeout(function() {
            el.addClass('selected');
            //el[0].innerHTML = word.charAt(5);
        }, index * 50);
    });
}

// Version 4 - only selected words green
function IntroductionAnimation04() {
    $("li").each(function(index) {
        if ($(this).hasClass("showWords")) {

            var el = $(this);
            setTimeout(function() {
                el.addClass('selected');
                //el[0].innerHTML = word.charAt(5);
            }, index * 50);
        }
    });
}


// Helper Functions handles resize 
function resizeElements() {
    // Find the width of each word element
    var liWidth = $("#boardLayout ul li").css("width");
    // Reset the height of each li elements in boardLayout
    $("#boardLayout ul li").css("height", liWidth);
    // $("#boardLayout ul li").css("lineHeight", liWidth);
    // var totalHeight = $("#boardLayout").css("width");
    // $("#boardLayout").css("height", totalHeight);

    // Resize the projects list
    var ProjectliWidth = $("#boardLayout ul li").css("width");
    // Reset the height of each li elements in boardLayout
    $("#boardLayout ul li").css("height", ProjectliWidth);
    // $("#boardLayout ul li").css("lineHeight", ProjectliWidth);
}