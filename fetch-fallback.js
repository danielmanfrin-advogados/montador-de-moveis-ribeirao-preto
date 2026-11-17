(function () {
  if (typeof window.fetch !== 'function') return;

  var fetchOriginal = window.fetch.bind(window);

  window.fetch = function (input, init) {
    var resposta = fetchOriginal(input, init);

    return Promise.resolve(resposta).catch(function () {
      try {
        var url = typeof input === 'string' ? input : input && input.url;
        if (url) new Image().src = url;
      } catch (e) {}
      return undefined;
    });
  };
})();
