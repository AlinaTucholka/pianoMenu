//   This pianoMenu was made by Alina Tuchołka - alinatucholka.pl
//   It's free for private use   
$(window).bind('scroll', function () {

        var okna = ["#home", "#about", "#gallery", "#media", "#guests", "#map", "#contact"];
        var offsetFromTop = 200;

        for (i = 0; i <= okna.length; i++) {
            if (($(okna[i]).offset().top - $(window).scrollTop()) <= offsetFromTop) {
                $(".key").css("opacity", "1");
                $(".key").css("padding-left", "0px");
                $(".key").eq(i).css("opacity", "0.5");
                $(".key").eq(i).css("padding-left", "4px");
            }
        }
    });

    var pngs = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"];

    for (i = 0; i <= pngs.length; i++) {
        $(".key").eq(i).css("background", "url(" + pngs[i] + ")");
        $(".key").eq(i).hide().delay(200 * i).show('slide', {
            direction: 'left'
        }, 800);

        $(".key").css("background-size", "contain");
        $(".key").css("background-repeat", "no-repeat");
    };

    $(".key").click(function () {
        $(this).css("opacity", "0.5");
        $(this).css("padding-left", "4px");
    });

    $(".key").eq(0).css("opacity", "0.5");
    $(".key").eq(0).css("padding-left", "4px");

    $('a.smooth').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });