// navbar start
$(".navbar #close").on("click", function () {
    $(".navbar").animate({ width: "0px" })
    $("#open").animate({ left: "5px" }, 1000);
    $(".navbar a").hide(0)
});
$(".home-content #open").on("click", function () {
    $(".navbar").animate({ width: "250px" })
    $("#open").animate({ left: "276px" }, 1000);
    $(".navbar a").show(0)
});
// navbar end 
// accordion start 
$('.accordion .singer').click(function () {
    $('.singer-details').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});
// accordion end 
// counter start 
let countDownDate = new Date("Oct 5, 2024 15:37:25").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days + "d ";
    document.getElementById("hours").innerHTML = hours + "h ";
    document.getElementById("minutes").innerHTML = minutes + "m ";
    document.getElementById("seconds").innerHTML = seconds + "s ";
}, 1000);
// counter end

// characters count 
$(".join-us textarea").keyup(function () {
    let textLength = $(this).val().length;
    $("#remaining").text(
        100 - textLength
    )
})

// scroll 
$('.navbar a').on('click', function () {
    let aHref = $(this).attr('href')
    let sectionOffset = $(aHref).offset().top
    $("body").animate({ scrollTop: sectionOffset }, 1000)
})