function mouseOverImg1(x) {
  document.getElementById("img1").style.display = "none";
  document.getElementById("img1Hover").style.display = "block";
}

// function mouseOutImg1(x) {
//     document.getElementById('img1Hover').style.display = "none";
//     x.style.display = "flex";
// }

function mouseOverImg2(x) {
  // x.style.display = "none";
  document.getElementById("img2").style.display = "none";
  document.getElementById("img2Hover").style.display = "block";
}

function mouseOverImg3(x) {
  document.getElementById("img3").style.display = "none";
  document.getElementById("img3Hover").style.display = "block";
}

function mouseOverImg4(x) {
  document.getElementById("img4").style.display = "none";
  document.getElementById("img4Hover").style.display = "block";
}

function mouseOverImg5(x) {
  document.getElementById("img5").style.display = "none";
  document.getElementById("img5Hover").style.display = "block";
}

function mouseOverImg6(x) {
 document.getElementById("img6").style.display = "none";
  document.getElementById("img6Hover").style.display = "block";
}

var name = document.getElementById("name").value;
console.log(name);

function contactFormHandler() {
  console.log("hello");
  document.getElementById("myForm").submit();
  var name = document.getElementById("name").value;
  console.log(name);
  var email = document.getElementById("email").value;
  console.log(email);
  var message = document.getElementById("message").value;
  console.log(message);

  const data = {
    name: name,
    email: email,
    message: message,
  };
  console.log(data);

  fetch("https://portfolio-kunal.firebaseio.com/data.json", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  alert("Form Submitted");
}
