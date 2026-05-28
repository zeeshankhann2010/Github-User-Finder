function getUser() {

  let user = document.getElementById("userInput").value;

  fetch("https://api.github.com/users/" + user)
  .then(r => r.json())
  .then(d => {

    document.querySelector("h3").innerText = d.login;
    document.querySelector("img").src = d.avatar_url;
    document.querySelector(".bio").innerText = d.bio || "No bio";

    let stats = document.querySelectorAll(".stats h4");

    stats[0].innerText = d.public_repos;
    stats[1].innerText = d.followers;
    stats[2].innerText = d.following;

  });

}