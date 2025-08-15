const characters = {
  asta: {
    name: "Asta",
    image: "images/asta.png"
  },
  yuno: {
    name: "Yuno",
    image: "images/yuno.png"
  },
  noelle: {
    name: "Noelle",
    image: "images/noelle.png"
  }
};

function changeCharacter(char) {
  const charData = characters[char];
  document.getElementById("character-img").src = charData.image;
  document.getElementById("character-name").innerText = charData.name;
}

function scrollToCharacters() {
  document.getElementById("characters").scrollIntoView({ behavior: "smooth" });
}
