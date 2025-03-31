window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      text: '🌐 Comprar Proxy',
      callback: function(t) {
        return t.card('id')
          .then(function(card) {
            return t.navigate({
              url: `https://app.privateproxy.me/order/2408?purpose_id=306`,
              target: 'blank'
            });
          });
      }
    }];
  }
});
