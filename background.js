chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { cancel: true };
  },
  {
    urls: [
    "*://paywall.folha.uol.com.br/*",
    "*://acesso.estadao.com.br/paywall*"
    ]
  },
  ["blocking"]
);