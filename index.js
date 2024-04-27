const btn = document.querySelector(".btn");
const userList = document.querySelector(".char__list");

async function fetchСhar() {
  const response = await fetch("https://rickandmortyapi.com/api/character ");
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
}

function renderСhar(characters) {
  const marcup = characters
    .map((character) => {
      return `
    <li>
    <p class="name_char"> Name:${character.name}</p>
    <img class="photo_char" src="${character.image}" alt="Name">
    </li>
    `;
    })
    .join("");
  console.log(marcup);
  userList.innerHTML = marcup;
}

btn.addEventListener("click", () => {
  fetchСhar()
    .then((characters) => {
      renderСhar(characters.results);
    })
    .catch((error) => console.log(error));
});
