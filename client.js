window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      text: '🌐 Gerar Proxy',
      callback: function(t) {
        return t.card('id')
          .then(function(card) {
            const cooldownKey = `proxyCooldown_${card.id}`;
            const now = Date.now();
            const lastClick = localStorage.getItem(cooldownKey);

            if (lastClick && now - parseInt(lastClick) < 3000) {
              return t.alert({ message: '⏳ Processando...' });
            }

            localStorage.setItem(cooldownKey, now);

            const webhookUrl = `https://SEU_DOMINIO/webhook/ativar-proxy?cardId=${card.id}`;

            return fetch(webhookUrl, { method: 'GET' })
              .then(() => t.alert({ message: '✅ Requisição enviada com sucesso!' }))
              .catch(() => t.alert({ message: '❌ Erro ao enviar a requisição.' }));
          });
      }
    }];
  }
});
