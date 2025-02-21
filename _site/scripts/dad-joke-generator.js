async function showJokeModal() {
  const modal = document.getElementById("dadJokeGenerator");
  modal.showModal();

  const dimensions = modal.getBoundingClientRect();

  window.addEventListener("click", e => {
    if (e.clientX < dimensions.left || e.clientX > dimensions.right || e.clientY < dimensions.top || e.clientY > dimensions.bottom) {
      modal.close();
    }
  });
}

async function cmonDad() {
  document.getElementById("currentDadJoke").innerText = "loading...";

  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent": "My Library (https://github.com/kemmojr/kemmojr.github.io)"
      }
    });
    const joke = await response.json();

    document.getElementById("currentDadJoke").innerText = joke.joke;
  } catch (ex) {
    console.error(`Error fetching dad joke ${ex}`);
    document.getElementById("currentDadJoke").innerText = "Error: it seems we are all out of Dad jokes";
  }
}
