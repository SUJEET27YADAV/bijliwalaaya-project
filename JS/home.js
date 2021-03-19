$(document).ready(function () {
    // for automatic slideshow.
    var si = 0;
    var images = ["main1.jpg", "main2.jpg", "main3.jpg", "main4.jpg", "main5.jpg", "main6.jpg", "main7.jpg", "main8.jpg"];
    var images360 = ["main1.jpg", "main2.jpg", "main3.jpg", "main4.jpg"];
    var w = window.innerWidth;
    var dots = $(".dot");
    autoshowSlides();
    function autoshowSlides() {
        si++;
        $('.dot').removeClass("active");
        if (si >= images.length) { si = 0 }
        if (w <= 768) { $("#image-container").css('background-image', "url(/IMAGES/MAIN/MOBILE/" + images360[si] + ")"); }
        else { $("#image-container").css('background-image', "url(/IMAGES/MAIN/PC/" + images[si] + ")"); }
        $('.dot').eq(si).addClass("active");
        setTimeout(autoshowSlides, 4000); // Change image every 4 seconds
    }

    // for next and previos button slideshow and on dot clicked. 
    var s = 0;
    for (let i = 0; i < dots.length; i++) { $('.dot').eq(i).click(function () { showSlides(i); si = i - 1; }); }
    $('#nextbtn').click(function () { plusSlides(1) });
    $('#prevbtn').click(function () { plusSlides(-1) });
    function plusSlides(n) { s += n; showSlides(s) }
    function showSlides(n) {
        if (n == images.length) { n = 0 }
        if (n == -1) { n = images.length - 1 }
        s = n;
        $('.dot').removeClass("active");
        if (w <= 768) { $("#image-container").css('background-image', "url(/IMAGES/MAIN/MOBILE/" + images360[s] + ")"); }
        else { $("#image-container").css('background-image', "url(/IMAGES/MAIN/PC/" + images[s] + ")"); }
        $('.dot').eq(s).addClass("active");
    }
    showSlides(0);

    //for login screen popup
    //id="loginpopup" class="b_e519 hidden model-frame"
    $('.loginbtn').click(function () {$('.login-popup-container').toggle(); console.log("login button clicked")});
    $('.close-popup').click(function () {
        $('.login-popup-container').toggle();
    });    
    //$('#login-submit-btn').click(function ())


    for (let i = 0; i < $('.grid-item').length; i++) {
        $('.grid-item').eq(i).click(function () { markSelection(i);console.log("grid item "+i+" clicked") });
    }
    function markSelection(i) {
        window.open('productdetail.html', '_blank');
        localStorage.setItem("hindex", i);
    }
    $('.grid-first-row-items').eq(0).click(function () { window.open('index.html', '_self') });
    $('.grid-first-row-items').eq(1).click(function () { window.open('packages.html', '_blank') });
});
