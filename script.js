let sin = document.getElementById("sin");
let lin = document.getElementById("lin");
let lout = document.getElementById("lout");

let firstTime = true;

if (localStorage.getItem("uid")) {
  sin.style.display = "none";
  lout.style.display = "inline";

  let data = {
    id: localStorage.getItem("uid"),
  };
  console.log("login", data);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(data);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:3000/me", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      lin.textContent = `Assalamualaikum, ${result.name}`;
      lin.style.color = "#fff";
      lin.style.fontWeight = "bold";
      lin.setAttribute('href', "#");
    })
    .catch((error) => console.log("error", error));
} else {
  sin.style.display = "inline";
  lin.style.display = "inline";
  lout.style.display = "none";
  lin.setAttribute('href', "login.html");

}

const logout = () => {
  window.localStorage.removeItem("uid");
  window.location.reload();
};
