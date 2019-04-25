
function callApi() {
  return fetch('https://www.leshabitues.fr/testapi/shops')
    .then(result => result.json()).then(jsonResult => (jsonResult.results));
}

export default callApi;
