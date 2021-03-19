$(document).ready (function() {
    var b = localStorage.getItem("hindex");
    var gridclick = ["Induction Coocker", "RO Service &","Geyser","AC Service &","Microwave","Washing Machine","Chimney Cleaning &","Refrigerator","TV Installation &","Deep Frideger Cleaning &","Cooler Service &"];
    //document.getElementById("text").textContent = gridclick[b];
    $('#text').text(gridclick[b]);
    $('#heading').text(gridclick[b]);
    $('#grid-header-item-image').attr('src', "/IMAGES/ICONS/icon"+b+".jpg");
})