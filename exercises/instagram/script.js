const contentElement = document.getElementById("content");
const loginElement = document.getElementById("login");
let currentUser = "Mathilda";

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
  likeButtonElement.innerText = "🤍";
  likeButtonElement.addEventListener("click", () => {
    post.likes.push(currentUser);
    displayPosts();
  });
  infoElement.appendChild(likeButtonElement);

  const likeTextElement = document.createElement("span");
  likeTextElement.innerText = post.likes.length + " likes";
  infoElement.appendChild(likeTextElement);

  return articleElement;
}

displayPosts();
