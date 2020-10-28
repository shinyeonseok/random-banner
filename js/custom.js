// jquery 버전
// $(document).ready(function(){ 
//     var randomBanner = $('.random-item');
//     var random = Math.floor(Math.random() * randomBanner.length);
//     randomBanner.hide().eq(random).show();
// });

// javascript
window.onload=function() {
    var E = document.getElementsByClassName("random-item");
    var m = E.length;
    var n = parseInt(Math.random()*m);
    for (var i=m-1;i>=0;i--) {
    var e = E[i];
    e.style.display='none';
    }
    E[n].style.display='';
}

window.onload=function() {
    var randomBanner = document.getElementsByClassName("random-item");
    var randomLength = randomBanner.length;
    var n = parseInt(Math.random()* randomLength);
    for (var i=randomLength-1;i>=0;i--) {
        var e = randomBanner[i];
        e.style.display='none';
    }
    randomBanner[n].style.display='';
}