import browser from "webextension-polyfill";

interface CustomWindow extends Window {
  Run: boolean;
}

declare let window: CustomWindow

(function() {
  if (window.Run) {
    return
  }
  window.Run = true;

  browser.runtime.onMessage.addListener(({command}) => {
    
    let url: string | null;

    switch(command) {
      case 'swap-with-cats':
        url = (browser.extension as any).getURL('assets/nine-koepfer-lpgAlv8I7V8-unsplash.jpg');
      break;

      case 'swap-with-dogs': 
        url = (browser.extension as any).getURL('assets/ben-michel-Uyn3kXAaZX8-unsplash.jpg');
      break;

      default:
        url = null;
      return;
    }

    if (url) {
      var images = document.getElementsByTagName("img")
      for (var i = 0; i < images.length; i++) {
        images[i].src = url;
      }
    }
  });

})();