/* ========================================================================*/
/* ======================= By: Chenxing Ouyang  ===========================*/
/* ========================================================================*/


$(document).ready(function() {

    //slowly fade out loading image when the website loads
    $(window).load(function() {
        $('.doc-loader').fadeOut('slow');
    });

    $(resizeElements());

    $(window).on('resize', function() {
        resizeElements();
    });

    $(IntroductionAnimation04());

    // If user press "enter" on search bar
    $(".input-search").keyup(function(e) {
        if ($(".input-search:focus") && e.keyCode == 13) {
            // var yPosition = $(window).scrollTop(); //your current y position on the page
            // $(window).scrollTop(800);
            $("#boardLayout").slideUp(600);
            // Change #Projects position to be absolute then add top margin
            $("#Projects").css("position", absolute);
        }
    });


    // Scroll to the top
    $("a[href='#top']").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");

        $("#boardLayout").slideDown(600);
        // $(IntroductionAnimation01());

        return false;
    });

    // Scroll down to bottom
    $("a[href='#bottom']").click(function() {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, "slow");
        return false;
    });
});



// Make project panel full screen
// var isFullscreen = false;

// function fullscreen() {
//     var d = {};
//     var speed = 500;
//     if (!isFullscreen) { // MAXIMIZATION
//         d.width = "94vw";
//         d.height = "85vh";
//         d.position = "fixed";

//         isFullscreen = true;
//     } else { // MINIMIZATION            
//         d.width = "94vw";
//         d.height = "200px";
//         isFullscreen = false;
//     }
//     $(".project-container").animate(d, speed);
// }