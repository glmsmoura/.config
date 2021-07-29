var rate;

App = {

  url: "https://dolarhoje.com/cotacao.txt",
  reloadInterval: 600000, // 10 mins in ms

  badgeBackgroundColor: [178, 183, 32, 255], // yellow
  clearBadgeTextTimeout: 10000, // 10 secs in ms

  changeTooltipText: function(text){ chrome.browserAction.setTitle({title: text}); },

  changeBadgeText: function(text){ chrome.browserAction.setBadgeText({text: text}); },
  changeBadgeBackgroundColor: function(color){
    chrome.browserAction.setBadgeBackgroundColor({color: color});
  },

  loadQuote: function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", this.url, true);
    xhr.onreadystatechange = function() {
      if ((xhr.readyState == 4) && (xhr.status == 200)) {
        var actualQuote = xhr.responseText;

        if (actualQuote.match(/^\d+(?:\,\d*)$/)) {
          App.onloadQuote(actualQuote);
        }
      }
    }
    xhr.send();
  },

  onloadQuote: function(actualQuote){
    var tooltipText = "US$ 1,00 vale R$ " + actualQuote + " hoje";
    this.changeTooltipText(tooltipText);
    this.changeBadgeText(actualQuote);
    rate = parseFloat(actualQuote.replace(",", '.'));
  },

  attachBehaviors: function(){
    chrome.browserAction.onClicked.addListener(function() {
      App.loadQuote();
      window.open("https://dolarhoje.com");
    });
  },

  startReloadInterval: function(){
    window.setInterval(function(){ App.loadQuote(); }, App.reloadInterval);
  },

  init: function(){
    this.changeBadgeBackgroundColor(this.badgeBackgroundColor);
    this.attachBehaviors();

    this.loadQuote();
    this.startReloadInterval();

    chrome.omnibox.setDefaultSuggestion({
      "description": "<match>DolarHoje.com</match> <dim>&gt;</dim> Digite um valor em dolar americano para converter para real"
    });

    chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
      var text = parseFloat(text.replace(",", "."));
      if (isNaN(text) || (isNaN(rate))) { return; }

      var result = (parseFloat(text) * rate) + "";
      result = parseFloat(result.replace(',', '.')).toFixed(2).replace('.', ','); // format

      var suggestions = [
        {content: "https://dolarhoje.com/#dolar=" + (text + "").replace(".", ","), description: "US$ " + (text + "").replace(".", ",") + " vale <match>R$ " + result + "</match>"}
      ];

      suggest(suggestions);
    });

    chrome.omnibox.onInputEntered.addListener(function(text) {
      var url;

      if (text.match(/^https:/)) {
        url = text;
      } else {
        url = 'https://dolarhoje.com/#dolar=' + (text + "").replace(".", ",");
      }

      window.open(url);
    });
  }
};

App.init();
