function countriesApi(url) {
  return new Promise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        res(xhr.responseText);
      } else if (this.readyState == 4 && this.status !== 200) {
        rej("error occurred while fetching data");
      }
    };

    xhr.send();
  });
}

let url = "https://restcountries.eu/rest/v2/all";
countriesApi(url)
  .then((response) => {
    generateHtml(JSON.parse(response));
  })
  .catch((err) => console.error(err));
