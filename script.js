function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function emailSend(){
var params = {
  name : document.getElementById('name').value,
	email : document.getElementById('email').value,
	message : document.getElementById('message').value
}

	emailjs.send("service_752fu7q", "template_wyd3jfh", params).then((res) => {
    alert("Success!!");
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  });
}