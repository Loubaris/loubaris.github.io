function validateForm() {
  var name = document.forms["form-details"]["name"].value;
  var email = document.forms["form-details"]["email"].value;
  var subject = document.forms["form-details"]["subject"].value;
  var message = document.forms["form-details"]["message"].value;

  fetch("https://shubhamai.pythonanywhere.com/", {
    method: "post",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      email: email,
      subject: subject,
      message: message
    })
  })
    .then(response => response.text())
    .then(response => console.log(response));

  document.querySelector("#delete-form").remove();
  document.querySelector(
    "#form-class"
  ).innerHTML = `<p class="bg-light p-4 p-md-5 contact-form"> <br><br><br><br><br>&nbsp;&nbsp;&nbsp;Thanks ${name}<span></span> Your message has been sended sucessfully, i will soon contact you back     (●'◡'●)<br><br><br><br><br><br><br><br><br><br> </p>`;
}
