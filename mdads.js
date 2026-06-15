// mdads.js - Modora Official Ads Manager
// Simpan file ini di ROOT direktori website (misal: htdocs/mdads.js)

function renderModoraAd(adId) {
    switch(adId) {
        case 1:
            // --- Iklan 1 - Script Head ---
            document.write('<script src="https://pl29724555.effectivecpmnetwork.com/bc/d9/11/bcd9117cd49c5e2eff0ab06c7d38e09e.js"></script>');
            break;
            
        case 2:
            // --- Iklan 2 - ukuran 320x50 ---
            document.write('<script> atOptions = { "key" : "aeb1aa27bc4d19cff50fdaf5e562d2a9", "format" : "iframe", "height" : 50, "width" : 320, "params" : {} }; </script>');
            document.write('<script src="https://www.highperformanceformat.com/aeb1aa27bc4d19cff50fdaf5e562d2a9/invoke.js"></script>');
            break;
            
        case 3:
            // --- Iklan 3 - ukuran 468x60 ---
            document.write('<script> atOptions = { "key" : "7da84a01f923bff0c77007e8d9d92d62", "format" : "iframe", "height" : 60, "width" : 468, "params" : {} }; </script>');
            document.write('<script src="https://www.highperformanceformat.com/7da84a01f923bff0c77007e8d9d92d62/invoke.js"></script>');
            break;
            
        case 4:
            // --- Iklan 4 - ukuran 728x90 ---
            document.write('<script> atOptions = { "key" : "cdd2182bf7baab2167655d8075678ee3", "format" : "iframe", "height" : 90, "width" : 728, "params" : {} }; </script>');
            document.write('<script src="https://www.highperformanceformat.com/cdd2182bf7baab2167655d8075678ee3/invoke.js"></script>');
            break;
            
        case 5:
            // --- Iklan 5 - Native Async ---
            document.write('<script async="async" data-cfasync="false" src="https://pl29724556.effectivecpmnetwork.com/0da897aea25d15c02c9b323ddf524be3/invoke.js"></script>');
            document.write('<div id="container-0da897aea25d15c02c9b323ddf524be3"></div>');
            break;
            
        case 6:
            // --- Iklan 6 - ukuran 300x250 ---
            document.write('<script> atOptions = { "key" : "4128382768062a9b2be3eca13131e045", "format" : "iframe", "height" : 250, "width" : 300, "params" : {} }; </script>');
            document.write('<script src="https://www.highperformanceformat.com/4128382768062a9b2be3eca13131e045/invoke.js"></script>');
            break;
            
        case 7:
            // --- Iklan 7 - Script Body ---
            document.write('<script src="https://pl29724557.effectivecpmnetwork.com/ad/8e/39/ad8e3940f2f78d653683b263c8975a7b.js"></script>');
            break;
    }
}