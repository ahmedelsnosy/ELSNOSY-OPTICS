var fullName = document.getElementById("fullname");
var phone = document.getElementById("phone");
var address = document.getElementById("address");
var date = document.getElementById("date");
var doctor = document.getElementById("doctor");
var typeOfFrame = document.getElementById("typeOfFrame");
var typeOfGlass = document.getElementById("typeOfGlass");
var price = document.getElementById("price");
var paidup = document.getElementById("paidup");
var residual = document.getElementById("residual");
var rightSph = document.getElementById("rightSph");
var rightCyl = document.getElementById("rightCyl");
var rightAxis = document.getElementById("rightAxis");
var leftSph = document.getElementById("leftSph");
var leftCyl = document.getElementById("leftCyl");
var leftAxis = document.getElementById("leftAxis");
var addition = document.getElementById("addition");
let inputs = document.getElementsByClassName("form-control");
var mybtn = document.getElementById("change");
var mood = "create";
var temp;
console.log(inputs);
var newClient = [];
if (localStorage.getItem("clients") != null) {
  newClient = JSON.parse(localStorage.getItem("clients"));
  clearForm();
  display();
}

function addClient() {
  if (validate() == true) {
     var dataClient = {
      name: fullName.value,
      phone: phone.value,
      address: address.value,
      date: Date(),
      doctor: doctor.value,
      typeOfFrame: typeOfFrame.value,
      typeOfGlass: typeOfGlass.value,
      price: price.value,
      paidup: paidup.value,
      residual: Number(price.value) - Number(paidup.value),
      rightSph: rightSph.value,
      rightCyl: rightCyl.value,
      rightAxis: rightAxis.value,
      leftSph: leftSph.value,
      leftCyl: leftCyl.value,
      leftAxis: leftAxis.value,
      addition: addition.value,
    };
    if (mood === "create") {
      newClient.push(dataClient);
      scroll({
        top: 0,
        behavior: "smooth",
      });
    } else {
      newClient[temp] = dataClient;
      mood = "create";
      mybtn.innerHTML = "ADD CLIENT";
    }
    localStorage.setItem("clients", JSON.stringify(newClient));
    clearForm();
    display();
  }
  else {
    alert("invalid input");
  }
   
  
}
function display() {
  var cartona = "";
  for (var i = 0; i < newClient.length; i++) {
    cartona += `
        
        <tr class="text-white border border-2 border-dark">
                <td  class=" border border-2 border-info">${[i]}</td>
                <td class=" border border-2 border-info">${
                  newClient[i].name
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].phone
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].address
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].date
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].doctor
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].typeOfFrame
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].typeOfGlass
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].price
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].paidup
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].residual
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].rightSph
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].rightCyl
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].rightAxis
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].leftSph
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].leftCyl
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].leftAxis
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].addition
                }</td>
                 <td class=" border border-2 border-info"><button class="btn btn-danger " onclick="deleteClient(${i})"><i class="text-dark fa-sharp fa-solid fa-trash"></i></button></td>
                <td class=" border border-2 border-info"><button class="btn btn-warning " onclick="update(${i})"><i class="text-dark fa-sharp fa-solid fa-pen-to-square"></i></button></td>
        </tr>
        `;
  }
  document.getElementById("content").innerHTML = cartona;
}
function clearForm() {
  for (let i = 0; i < inputs.length; i++){
    inputs[i].value = "";
  }}
function deleteClient(deleteIndex) {
  newClient.splice(deleteIndex, 1);
  localStorage.setItem("clients", JSON.stringify(newClient));
  display();
}
function search(term) {
  var cartona = "";
  for (var i = 0; i < newClient.length; i++) {
    if (
      newClient[i].phone.includes(term) == true ||
      newClient[i].name.toLowerCase().includes(term.toLowerCase()) == true
    ) {
      cartona += `
        
         <tr class=" border border-2 border-dark">
                <td  class=" border border-2 border-info">${[i]}</td>
                <td class=" border border-2 border-info">${
                  newClient[i].name
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].phone
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].address
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].date
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].doctor
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].typeOfFrame
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].typeOfGlass
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].price
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].paidup
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].residual
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].rightSph
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].rightCyl
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].rightAxis
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].leftSph
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].leftCyl
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].leftAxis
                }</td>
                <td class=" border border-2 border-info">${
                  newClient[i].addition
                }</td>
                <td class=" border border-2 border-info"><button class="btn btn-dark " onclick="deleteClient(${i})"><i class="text-dark fa-sharp fa-solid fa-trash"></i></button></td>
                <td class=" border border-2 border-info"><button class="btn btn-warning " onclick="update(${i})"><i class="text-dark fa-sharp fa-solid fa-pen-to-square"></i></button></td>
        </tr>
        `;
    }
  }
  document.getElementById("content").innerHTML = cartona;
}

function update(i) {
  fullName.value = newClient[i].name;
  phone.value = newClient[i].phone;
  address.value = newClient[i].address;
  doctor.value = newClient[i].doctor;
  typeOfFrame.value = newClient[i].typeOfFrame;
  typeOfGlass.value = newClient[i].typeOfGlass;
  price.value = newClient[i].price;
  paidup.value = newClient[i].paidup;
  rightSph.value = newClient[i].rightSph;
  rightCyl.value = newClient[i].rightCyl;
  rightAxis.value = newClient[i].rightAxis;
  leftSph.value = newClient[i].leftSph;
  leftCyl.value = newClient[i].leftCyl;
  leftAxis.value = newClient[i].leftAxis;
  addition.value = newClient[i].addition;
  mybtn.innerHTML = "Update";
  mood = "Update";
  temp = i;
  scroll({
    top: 0,
    behavior: "smooth",
  });
}

function validate() {
  var regex = /^[A-Z][a-z]{3,9}$/;
  if (regex.test(fullName.value) == true) {
    return true;
  } else {
    return false;
  }
}

































// async function search(a) {
//   let t = await fetch(
//     `https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`
//   );
//   if (t.ok && 400 != t.status) {
//     let a = await t.json();
//     displayCurrent(a.location, a.current),
//       displayAnother(a.forecast.forecastday);
//   }
// }
// document.getElementById("search").addEventListener("keyup", (a) => {
//   search(a.target.value);
// });
// var days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// const monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// function displayCurrent(a, t) {
//   if (null != t) {
//     var e = new Date(t.last_updated.replace(" ", "T"));
//     let n = `<div class="today forecast">\n    <div class="forecast-header"  id="today">\n    <div class="day">${
//       days[e.getDay()]
//     }</div>\n    <div class=" date">${
//       e.getDate() + monthNames[e.getMonth()]
//     }</div>\n    </div> \x3c!-- .forecast-header --\x3e\n    <div class="forecast-content" id="current">\n    <div class="location">${
//       a.name
//     }</div>\n    <div class="degree">\n        <div class="num">${
//       t.temp_c
//     }<sup>o</sup>C</div>\n      \n        <div class="forecast-icon">\n            <img src="https:${
//       t.condition.icon
//     }" alt="" width=90>\n        </div>\t\n    \n    </div>\n    <div class="custom">${
//       t.condition.text
//     }</div>\n    <span><img src="images/icon-umberella.png" alt="">20%</span>\n\t\t\t\t\t\t\t\t<span><img src="images/icon-wind.png" alt="">18km/h</span>\n\t\t\t\t\t\t\t\t<span><img src="images/icon-compass.png" alt="">East</span>\n    </div>\n</div>`;
//     document.getElementById("forecast").innerHTML = n;
//   }
// }
// function displayAnother(a) {
//   let t = "";
//   for (let e = 1; e < a.length; e++)
//     t += `\t<div class="forecast">\n        <div class="forecast-header">\n            <div class="day">${
//       days[new Date(a[e].date.replace(" ", "T")).getDay()]
//     }</div>\n        </div> \x3c!-- .forecast-header --\x3e\n        <div class="forecast-content">\n            <div class="forecast-icon">\n                <img src="https:${
//       a[e].day.condition.icon
//     }" alt="" width=48>\n            </div>\n            <div class="degree">${
//       a[e].day.maxtemp_c
//     }<sup>o</sup>C</div>\n            <small>${
//       a[e].day.mintemp_c
//     }<sup>o</sup></small>\n            <div class="custom">${
//       a[e].day.condition.text
//     }</div>\n        </div>\n        </div>`;
//   document.getElementById("forecast").innerHTML += t;
// }
// search("cairo");