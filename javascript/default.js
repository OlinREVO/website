$(document).ready(function() {
    $('#arrow').click(function() {
        $(".main").moveDown();
    });

    $(".main").onepage_scroll({
       sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
       easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", 
                                        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
       animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
       pagination: false,               // You can either show or hide the pagination. Toggle true for show, false for hide.
       updateURL: true,                 // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
       beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
       afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
       loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
       keyboard: true,                  // You can activate the keyboard controls
       responsiveFallback: false        // You can fallback to normal page scroll by defining the width of the browser in which
                                        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever 
                                        // the browser's width is less than 600, the fallback will kick in.
    });
    
});

// // On window load. This waits until images have loaded which is essential
// $(window).load(function(){
    
//     // Fade in images so there isn't a color "pop" document load and then on window load
//     $(".logo").fadeIn(500);
    
//     // clone image
//     $('.logo').each(function(){
//         var el = $(this);
//         el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('logo_grayscale').css({"position":"absolute","z-index":"998","opacity":"0"}).insertBefore(el).queue(function(){
//             var el = $(this);
//             el.parent().css({"width":this.width,"height":this.height});
//             el.dequeue();
//         });
//         this.src = grayscale(this.src);
//     });
    
//     // Fade image 
//     $('.logo').mouseover(function(){
//         $(this).parent().find('.logo:first').stop().animate({opacity:1}, 500);
//     })
//     $('.logo_grayscale').mouseout(function(){
//         $(this).stop().animate({opacity:0}, 500);
//     });     
// });

// // Grayscale w canvas method
// function grayscale(src){
//     var canvas = document.createElement('canvas');
//     var ctx = canvas.getContext('2d');
//     var imgObj = new Image();
//     imgObj.src = src;
//     canvas.width = imgObj.width;
//     canvas.height = imgObj.height; 
//     ctx.drawImage(imgObj, 0, 0); 
//     var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     for(var y = 0; y < imgPixels.height; y++){
//         for(var x = 0; x < imgPixels.width; x++){
//             var i = (y * 4) * imgPixels.width + x * 4;
//             var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
//             imgPixels.data[i] = avg; 
//             imgPixels.data[i + 1] = avg; 
//             imgPixels.data[i + 2] = avg;
//         }
//     }
//     ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
//     return canvas.toDataURL();
// }