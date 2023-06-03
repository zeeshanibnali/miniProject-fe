const login = () => {
  console.log("hello");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (!email.value) {
    alert("Please enter the Email");
    return;
  }
  if (!password.value) {
    alert("Please enter the password");
    return;
  }

  let data = {
    email: email.value,
    password: password.value,
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

  fetch("http://localhost:3000/login", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.message === "Wrong Credentials") {
        alert("Your email or password is wrong. Please try again.");
      } else {
        window.localStorage.setItem("uid", result.id);
        window.location.replace("http://localhost:5500");
      }
    })
    .catch((error) => console.log("error", error));
};
