loadjs("https://unpkg.com/flickity/dist/flickity.pkgd.min.js",(function(){$(".main-carousel").flickity({cellAlign:"left",contain:"true",autoPlay:"2000",pauseAutoPlayOnHover:"false",accessibility:"true",draggable:"true",wrapAround:"true"})})),loadjs("https://kit.fontawesome.com/daece105d8.js"),loadjs("https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js",(function(){lozad().observe()})),loadjs("https://cdn.rawgit.com/graingert/WOW/34712a3d/dist/wow.min.js",(function(){(new WOW).init()})),loadjs(["script/lib/jquery.ui.totop.min.js","https://cdn.jsdelivr.net/npm/jquery.easing/jquery.easing.min.js"],(function(){$(document).ready((function(){$().UItoTop({easingType:"easeOutQuart"})}))})),loadjs(["https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0.9/dist/fancybox.css","https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0.9/dist/fancybox.umd.js"]),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then((e=>{console.log("[Service Worker] Registration succeeded. Scope is "+e.scope)})).catch((e=>{console.log("[Service Worker] Registration failed with "+e)}));