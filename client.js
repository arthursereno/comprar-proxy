window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      text: '1.🌐 Comprar Proxy',
      callback: function(t) {
        window.open('https://app.privateproxy.me/order/2408?purpose_id=306', '_blank');
        return;
      }
    }];
  }
});
