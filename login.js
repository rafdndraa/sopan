function login(event){
  event.preventDefault();

  const user = document.querySelector('input[type="text"]').value;
  const pass = document.querySelector('input[type="password"]').value;

  if(user === "admin" && pass === "123"){
    window.location.href = "home.html";
  } else {
    alert("Username atau password salah");
  }
}
