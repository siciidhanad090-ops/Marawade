const addPostBtn = document.getElementById("addPostBtn");
const dashboard = document.getElementById("dashboard");
const postForm = document.getElementById("postForm");
const postsContainer = document.getElementById("postsContainer");

addPostBtn.addEventListener("click", function () {
    dashboard.style.display = "block";

    dashboard.scrollIntoView({
        behavior: "smooth"
    });
});

postForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;
    const image = document.getElementById("postImage").files[0];

    const post = document.createElement("article");
    post.className = "post";

    const titleElement = document.createElement("h3");
    titleElement.textContent = title;

    const contentElement = document.createElement("p");
    contentElement.textContent = content;

    post.appendChild(titleElement);
    post.appendChild(contentElement);

    if (image) {

        const imageElement = document.createElement("img");

        imageElement.src = URL.createObjectURL(image);

        imageElement.alt = title;

        post.appendChild(imageElement);
    }

    postsContainer.prepend(post);

    postForm.reset();

    alert("Qoraalka waa la daabacay!");

    document.getElementById("posts").scrollIntoView({
        behavior: "smooth"
    });
});