// 풀페이지 메뉴
$(document).ready(function () {
    $('.btn_nav>a').on('click', function () {
        $('.fullScreenMenu').fadeIn();
    });
    $('.close_btn').on('click', function () {
        $('.fullScreenMenu').hide();
    });

});

// 페이드인업
var animation2 = function () {
    var items, winH;
    var initModule = function () {
        items = document.querySelectorAll(".aniBox");
        winH = window.innerHeight;
        _addEventHandlers();
    }
    var _addEventHandlers = function () {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("load", _checkPosition);
        window.addEventListener("resize", initModule);
    };
    var _checkPosition = function () {
        for (var i = 0; i < items.length; i++) {
            var posFromTop = items[i].getBoundingClientRect().top;
            if (winH > posFromTop) {
                items[i].classList.add("aniBox_active");
            }
        }
    }
    return {
        init2: initModule
    }
}
animation2().init2();

// 사진 날라오기
var isVisible = false;

$(window).on('scroll', function () {
    if (checkVisible($('#sec3')) && !isVisible) {
        $(document).ready(function () {
            $(".type_cv1, .type_cv4").animate({
                width: '0',
            }, 150);
        });

        $(document).ready(function () {
            $(".type_cv2, .type_cv3").animate({
                height: '0',
            }, 150);
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


// 화살표 돌아가는거
var animation3 = function () {
    var items, winH;
    var initModule = function () {
        items = document.querySelectorAll(".img_box");
        winH = window.innerHeight;
        _addEventHandlers();
    }
    var _addEventHandlers = function () {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("load", _checkPosition);
        window.addEventListener("resize", initModule);
    };
    var _checkPosition = function rotate() {
        for (let i = 0; i < items.length; i++) {
            var cultureTop = items[i].getBoundingClientRect().top;
            if (winH > cultureTop) {
                setTimeout(function () {
                    items[i].classList.add("rotate_active")
                }, 200 * i)
            }
        }
    }

    return {
        init3: initModule
    }
}
animation3().init3();

// 밑줄 생기는거
var animation4 = function () {
    var items, winH;
    var initModule = function () {
        items = document.querySelectorAll(".underLine");
        winH = window.innerHeight;
        _addEventHandlers();
    }
    var _addEventHandlers = function () {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("load", _checkPosition);
        window.addEventListener("resize", initModule);
    };
    var _checkPosition = function rotate() {
        for (let i = 0; i < items.length; i++) {
            var cultureTop = items[i].getBoundingClientRect().top;
            if (winH > cultureTop) {
                $(document).ready(function () {
                    items[i].classList.add("gogo")
                });
            }
        }
    }

    return {
        init4: initModule
    }
}
animation4().init4();


// 헤더사진 줌아웃 
var animation5 = function () {
    var items, winH;
    var initModule = function () {
        items = document.querySelectorAll(".header_img");
        winH = window.innerHeight;
        _addEventHandlers();
    }
    var _addEventHandlers = function () {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("load", _checkPosition);
        window.addEventListener("resize", initModule);
    };
    var _checkPosition = function rotate() {
        for (let i = 0; i < items.length; i++) {
            var cultureTop = items[i].getBoundingClientRect().top;
            if (winH > cultureTop) {
                setTimeout(function () {
                    $(document).ready(function () {
                        items[i].classList.add("gogo1")
                    });
                })
            }
        }
    }

    return {
        init5: initModule
    }
}
animation5().init5();

//헤더 텍스트 
var animation6 = function () {
    var items, winH;
    var initModule = function () {
        items = document.querySelectorAll(".header_img_txt");
        winH = window.innerHeight;
        _addEventHandlers();
    }
    var _addEventHandlers = function () {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("load", _checkPosition);
        window.addEventListener("resize", initModule);
    };
    var _checkPosition = function rotate() {
        for (let i = 0; i < items.length; i++) {
            var cultureTop = items[i].getBoundingClientRect().top;
            if (winH > cultureTop) {
                setTimeout(function () {
                    $(document).ready(function () {
                        items[i].classList.add("gogo2")
                    });
                })
            }
        }
    }

    return {
        init6: initModule
    }
}
animation6().init6();

// 이미지1
var animation7 = function () {
    var items, winH;
    var initModule = function () {
        items = document.querySelectorAll(".main_img");
        winH = window.innerHeight;
        _addEventHandlers();
    }
    var _addEventHandlers = function () {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("load", _checkPosition);
        window.addEventListener("resize", initModule);
    };
    var _checkPosition = function rotate() {
        for (let i = 0; i < items.length; i++) {
            var cultureTop = items[i].getBoundingClientRect().top;
            if (winH > cultureTop) {
                setTimeout(function () {
                    $(document).ready(function () {
                        items[i].classList.add("bottop")
                    });
                })
            }
        }
    }

    return {
        init7: initModule
    }
}
animation7().init7();

// 사람이미지(소개페이지)
var animation6 = function () {
    var items, winH;
    var initModule = function () {
        items = document.querySelectorAll(".header_img");
        winH = window.innerHeight;
        _addEventHandlers();
    }
    var _addEventHandlers = function () {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("load", _checkPosition);
        window.addEventListener("resize", initModule);
    };
    var _checkPosition = function rotate() {
        for (let i = 0; i < items.length; i++) {
            var cultureTop = items[i].getBoundingClientRect().top;
            if (winH > cultureTop) {
                setTimeout(function () {
                    $(document).ready(function () {
                        items[i].classList.add("gogo1")
                    });
                })
            }
        }
    }

    return {
        init6: initModule
    }
}
animation6().init6();


var animation7 = function () {
    var items, winH;
    var initModule = function () {
        items = document.querySelectorAll(".main_img");
        winH = window.innerHeight;
        _addEventHandlers();
    }
    var _addEventHandlers = function () {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("load", _checkPosition);
        window.addEventListener("resize", initModule);
    };
    var _checkPosition = function rotate() {
        for (let i = 0; i < items.length; i++) {
            var cultureTop = items[i].getBoundingClientRect().top;
            if (winH > cultureTop) {
                setTimeout(function () {
                    $(document).ready(function () {
                        items[i].classList.add("gogo3")
                    });
                })
            }
        }
    }

    return {
        init7: initModule
    }
}
animation7().init7();

// 텍스트 이미지
var animation8 = function () {
    var items, winH;
    var initModule = function () {
        items = document.querySelectorAll(".main_img2");
        winH = window.innerHeight;
        _addEventHandlers();
    }
    var _addEventHandlers = function () {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("load", _checkPosition);
        window.addEventListener("resize", initModule);
    };
    var _checkPosition = function rotate() {
        for (let i = 0; i < items.length; i++) {
            var cultureTop = items[i].getBoundingClientRect().top;
            if (winH > cultureTop) {
                setTimeout(function () {
                    $(document).ready(function () {
                        items[i].classList.add("gogo4")
                    });
                })
            }
        }
    }

    return {
        init8: initModule
    }
}
animation8().init8();




// 마우스오버시 페이지 바뀌기(메인)
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