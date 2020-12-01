// fetch('https://restcountries.eu/rest/v2/all')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

function getCountriesData(url) {
  return new Promise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        res(xhr.responseText);
      } else if (this.readyState == 4 && this.status !== 200) {
        rej("error");
      }
    };

    xhr.send();
  });
}

let url = "https://restcountries.eu/rest/v2/all";

//console.log(getCountriesData());
getCountriesData(url)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.error(err));

// function xmlHttp(url){
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", url, true);
//   xhr.send();
//   xhr.onload = function(){
//     console.log(xhr.response);
//   }
//   xhr.onerror = function(){
//     console.log('error');
//   }

//   xhr.onreadystatechange = function () {
//     var _data = this;
//     if (this.readyState == 4 && this.status == 200) {
//        console.log(xhr.response);
//     } else if (this.readyState == 4 && this.status !== 200) {
//       console.error('error');
//     }
//   };

// }

// xmlHttp(url);
