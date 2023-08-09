/*
 * WEB222 – Assignment Final
 *
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 *      Name:       KA YING, CHAN
 *      Student ID: 123231227
 *      Date:       8 AUG 2023
 */


/***************** GETTING CONTENTS *****************/

/* notes: contentDiv will be called by buttons in navBar() */
function contentDiv_Info() {
  const contentDiv = document.getElementById("contentDiv");
  contentDiv.classList.add("contentDiv");
  contentDiv.innerHTML="";

  const infoDiv = document.createElement("iframe");
  infoDiv.classList.add("info-iframe");
  infoDiv.src = "/info.html";
  contentDiv.appendChild(infoDiv);
}

function contentDiv_reviews() {
  const contentDiv = document.getElementById("contentDiv");
  contentDiv.classList.add("contentDiv");
  contentDiv.innerHTML="";
  const infoDiv = document.createElement("iframe");
  infoDiv.classList.add("reviews-iframe");
  infoDiv.src = "/reviews.html";
  contentDiv.appendChild(infoDiv);
}

function contentDiv_about() {
  const contentDiv = document.getElementById("contentDiv");
  contentDiv.classList.add("contentDiv");
  contentDiv.innerHTML="";
  const infoDiv = document.createElement("iframe");
  infoDiv.classList.add("about-iframe");
  infoDiv.src = "/about.html";
  contentDiv.appendChild(infoDiv);
}


/***************** HEADER AND NAVBAR *****************/

function headerContent() {
  const headerContainer = document.getElementById("headerContainer");
  headerContainer.classList.add("headerContainer");
  const solgan = document.querySelector(".slogan");

  const homeButton = document.getElementById("homeButton");
  const button = document.createElement("button"); // CREATE: a button element
  button.textContent = "Rummikub";
  button.classList.add("home-button");

  homeButton.addEventListener("click", function() {
    window.location.href = "/index.html";
  });

  headerContainer.appendChild(homeButton);
  headerContainer.appendChild(solgan);
  homeButton.appendChild(button); // Append the button to the parent element
}
function navBar() {
  const navBar = document.getElementById("menu");

  const bt_info = document.createElement("button");
  bt_info.classList.add("navButton");
  bt_info.textContent = "Info";
  bt_info.addEventListener("click", () => {
    contentDiv_Info();
  });

  const bt_review = document.createElement("button");
  bt_review.classList.add("navButton");
  bt_review.textContent = "Reviews";
  bt_review.addEventListener("click", () => {
    contentDiv_reviews();
  });

  const bt_about = document.createElement("button");
  bt_about.classList.add("navButton");
  bt_about.textContent = "About";
  bt_about.addEventListener("click", () => {
    contentDiv_about();
  });

  navBar.appendChild(bt_info);
  navBar.appendChild(bt_review);
  navBar.appendChild(bt_about);
}


// CALL FUNCTIONS TO CREATE
/*1*/ headerContent();
/*2*/ navBar();


/***************** VALIDATE FOR EMAIL *****************/

const getButton = document.getElementById("submitButton");
getButton.addEventListener("click", (e)=>{
  const email = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    e.preventDefault(); // Prevent sending it to the serve if email not correct
    const err = document.getElementById("validateEmail");
    err.classList.add("errEmail");
    err.innerHTML = "Sorry! Invalid email format detected.";
    return false;
  }
else{
  const valid = document.getElementById("validateEmail");
  valid.classList.add("validEmail");
  valid.innerHTML = "Thank you! Sending information...";
  return true;
}

})



