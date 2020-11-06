//banner
loadjs('https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js', function() {
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: 'true',
        autoPlay: '2000',
        pauseAutoPlayOnHover: 'false',
        accessibility: 'true',
        draggable: 'true',
        wrapAround: 'true'
        });
});


//lazyload
loadjs('https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js', function() {
    const observer = lozad();
    observer.observe();
});

//wow
loadjs('https://cdn.rawgit.com/graingert/WOW/34712a3d/dist/wow.min.js', function() {
    new WOW().init();
});

//totop
loadjs(['script/lib/jquery.ui.totop.min.js', 'https://cdn.jsdelivr.net/npm/jquery.easing@1.4.1/jquery.easing.min.js'], function() {
    $(document).ready(function() {
	$().UItoTop({ easingType: 'easeOutQuart' });
    });
});

// outside link
function externalLinks() { 
    if (!document.getElementsByTagName) return; 
    var anchors = document.getElementsByTagName("a"); 
    for (var i=0; i<anchors.length; i++) { 
      var anchor = anchors[i]; 
      if (anchor.getAttribute("href") && 
          anchor.getAttribute("rel") == "external") 
        anchor.target = "_blank"; 
    } 
   } 
   window.onload = externalLinks;