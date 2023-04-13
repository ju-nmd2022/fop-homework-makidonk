const contentElement = document.getElementById("content");
const loginElement = document.getElementById("login");
let currentUser;

let posts = [];
for (let i = 1; i <= 32; i++) {
  const post = {
    title: "Awesome Hamster " + i,
    url: "img/hamster" + i + ".jpg",
    likes: [],
  };
  posts.push(post);
}

function displayPosts() {
  contentElement.innerHTML = "";

  for (let post of posts) {
    const postElement = createPostElement(post);
    contentElement.appendChild(postElement);
  }
}


function createPostElement(post) {
  const articleElement = document.createElement("article");
  articleElement.classList.add("post");

  const titleElement = document.createElement("h4");
  titleElement.classList.add("padding");
  titleElement.innerText = post.title;
  articleElement.appendChild(titleElement);

  const imageElement = document.createElement("img");
  imageElement.src = post.url;
  articleElement.appendChild(imageElement);

  const infoElement = document.createElement("div");
  infoElement.classList.add("padding");
  articleElement.appendChild(infoElement);

  const likeButtonElement = document.createElement("button");
  if (post.likes.indexOf(currentUser) === -1) {
    likeButtonElement.innerText = "🤍";
  } else {
    likeButtonElement.innerText = "❤️";
  }

  if (currentUser) {
    likeButtonElement.disabled = false;
  } else {
    likeButtonElement.disabled = true;
  }

  likeButtonElement.addEventListener("click", () => {
    const userIndex = post.likes.indexOf(currentUser);
    if (userIndex === -1) {
      post.likes.push(currentUser);
    } else {
      post.likes.splice(userIndex, 1);
    }

    const updatedPost = createPostElement(post);
    articleElement.replaceWith(updatedPost);
  });

  infoElement.appendChild(likeButtonElement);

  const likeTextElement = document.createElement("span");
  likeTextElement.innerText = post.likes.length + " likes";
  infoElement.appendChild(likeTextElement);

  return articleElement;
}

function checkLogin() {
  loginElement.innerHTML = "";

  if (currentUser) {
    loginElement.innerText = "Hi, " + currentUser + "!  ";
    const logoutButton = document.createElement("button");
    logoutButton.innerText = "Log out";
    loginElement.appendChild(logoutButton);
    logoutButton.addEventListener("click", () => {
      currentUser = undefined;
      checkLogin();
      displayPosts();
    });
  } else {
    const inputElement = document.createElement("input");
    inputElement.placeholder = "Username";
    loginElement.appendChild(inputElement);

    const loginButton = document.createElement("button");
    loginButton.innerText = "Login";
    loginElement.appendChild(loginButton);
    loginButton.addEventListener("click", () => {
      if (inputElement.value.length > 0) {
        currentUser = inputElement.value;
        checkLogin();
        displayPosts();
      }
    });
  }
}

function loadJSON() {
  const url = "images.JSON";
  const method = "GET";

  const request = new XMLHttpRequest();
  request.responseType = "json";
  request.open(method, url);
  request.addEventListener("load", (event) => {
    const request = event.target;
    const response = request.response;
    posts = response;
    displayPosts();
  });
  request.send();
}

function fetchJSON() {
  const url = "images.JSON";
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      posts = response;
      displayPosts();
    });
}

fetchJSON();
//loadJSON();

checkLogin();
//displayPosts();
