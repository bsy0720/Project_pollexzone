// 드롭메뉴
function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.

    //console.log(st-lastScrollTop);


    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        if ($('#dropHead').hasClass('active')) {

        } else {
            $('#dropHead').removeClass('nav-up').addClass('nav-down');
        }

    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('#dropHead').removeClass('nav-down').addClass('nav-up');
        }
    }

    lastScrollTop = st;
}








// 사진 날라오기
var isVisible = false;

$(window).on('scroll', function () {
    if (checkVisible($('#sec3')) && !isVisible) {
        $(document).ready(function () {
            $(".type_cv1, .type_cv4").animate({
                width: '0',
            }, 300);
        });

        $(document).ready(function () {
            $(".type_cv2, .type_cv3").animate({
                height: '0',
            }, 300);
        });
        isVisible = true;
    }
});

function checkVisible(elm, eval) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}





// 마우스오버시 페이지 바뀌기
$(document).ready(function () {
    $(".cen_img").addClass("ma_img");
    $(".mp").addClass('cen_active');
    let goMa = document.getElementById('go_ma')
    $(goMa).hover(function () {
        $(".cen_img").removeClass("se_img");
        $(".cen_img").removeClass("go_img");
        $(".cen_img").addClass("ma_img");
        $("#cen_seo").hide();
        $("#cen_gong").hide();
        $("#cen_ma").show();
        $(".mp").addClass('cen_active');
    })
    let goGong = document.getElementById('go_gong')
    $(goGong).hover(function () {
        $(".cen_img").removeClass("ma_img");
        $(".cen_img").removeClass("se_img");
        $(".cen_img").addClass("go_img");
        $("#cen_ma").hide();
        $("#cen_seo").hide();
        $("#cen_gong").show();
        $(".mp").removeClass('cen_active');
        $(".sp").removeClass('cen_active');
        $(".gp").addClass('cen_active');
    })
    let goSeo = document.getElementById('go_seo')
    $(goSeo).hover(function () {
        $(".cen_img").removeClass("ma_img");
        $(".cen_img").removeClass("go_img");
        $(".cen_img").addClass("se_img");
        $("#cen_ma").hide();
        $("#cen_gong").hide();
        $("#cen_seo").show();
        $(".mp").removeClass('cen_active');
        $(".gp").removeClass('cen_active');
        $(".sp").addClass('cen_active');
    });

});


//스와이퍼 슬라이드 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});