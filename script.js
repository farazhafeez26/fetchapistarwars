function render(char) {
  var h2 = document.createElement("H2");
  h2.innerText = char.name;
  var h3 = document.createElement("H3");
  h3.innerText = char.hair_color;

  document.getElementById("main-chars").append(h2);
  document.getElementById("main-chars").append(h3);
}

const charArray = ["1", "2", "3", "4", "5", "6"];

for (let i = 0; i < charArray.length; i++) {
  const response = fetch("https://swapi.dev/api/people/" + charArray[i])
    .then(function (response) {
      // lets grab the response and get acces to it by parsing it
      // it will also return a primis so that why we need a second .then
      return response.json();
    })
    .then(function (data) {
      // gets grab the data and manipulate the DOM to add it to our website
      render(data);
    });
}

// const response = fetch("https://swapi.dev/api/people/1")
//   .then(function (response) {
//     // lets grab the response and get acces to it by parsing it
//     // it will also return a primis so that why we need a second .then
//     return response.json();
//   })
//   .then(function (data) {
//     // gets grab the data and manipulate the DOM to add it to our website
//     render(data.name);
//   });

// console.log("response", response);

// callback
// asynchronus callback
// fetch data
