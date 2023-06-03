const register = () => {
  console.log("hello");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const passwordRepeat = document.getElementById("passwordRepeat");

  if (!name.value) {
    alert("Please enter the name");
    return;
  }
  if (!email.value) {
    alert("Please enter the name");
    return;
  }
  if (!password.value) {
    alert("Please enter the name");
    return;
  }
  if (!passwordRepeat.value) {
    alert("Please enter the name");
    return;
  }
  if (password.value !== passwordRepeat.value) {
    alert("Your passwords don't match");
    return;
  }

  let data = {
    name: name.value,
    email: email.value,
    password: password.value,
  };
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(data);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:3000/register", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      window.localStorage.setItem("uid", result.id);
      window.location.replace("http://localhost:5500");
    })
    .catch((error) => console.log("error", error));
};
