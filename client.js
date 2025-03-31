window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      text: '🌐 Comprar Proxy',
      callback: function(t) {
        window.open('https://app.privateproxy.me/order/2408?purpose_id=306', '_blank');
        return t.closePopup(); // fecha o popup do botão
      }
    }];
  }
});
