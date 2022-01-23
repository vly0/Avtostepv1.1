//car-pool-slider
$(document).ready(function () {
    $('.slider-cars').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },


            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    draggable: true,
                }
            }
        ]
    });

});
//car-item-slider
$(document).ready(function () {
    $('.slider-images').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    draggable: true,
                    //     slidesToShow: 2,
                    //     slidesToScroll: 2
                }
            }
        ]
    });

});
//car-item-big-images
$(document).ready(function () {
    $('.slider-bigImages').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    draggable: true,
                    //     slidesToShow: 2,
                    //     slidesToScroll: 2
                }
            }
        ]
    });

});
//zoom - image
//let zoom = document.querySelectorAll(".images-car-item__image");
//console.log(zoom);
//for (var i = 0; i < zoom.length; i++) {
//    let zoom2 = zoom[i].querySelector('img');
//    console.log(zoom2);
//    let zoomsrc = zoom2.getAttribute('src');
//    console.log(zoomsrc);
//}
