// Class declaration for PortfolioItems
class PortfolioItem {
  constructor(title, image, url) {
    this.title = title;
    this.image = image;
    this.url = url;
  }

  /**
   * Renders PortfolioItem as an HTML element
   * @param {string} targetElementId - ID of element to render PortfolioItem to
   */
  renderHTML(targetElementId) {
    const $galleryImgDiv = $("<div>").addClass("gallery-img");
    const $galleryAnchor = $("<a>").attr("href", this.url);
    const $galleryImg = $("<img>").attr({ src: `assets/images/${this.image}`, alt: this.title });
    const $galleryImgLabel = $("<div>").addClass("img-label").text(this.title);

    $galleryAnchor.append($galleryImg);
    $galleryImgDiv.append($galleryAnchor);
    $galleryImgDiv.append($galleryImgLabel);

    $(`#${targetElementId}`).append($galleryImgDiv);
  }
}

$(document).ready(() => {

  // Create porfolio items for all of my projects
  const portfolioItems = [
    new PortfolioItem("Healer, Healer", "healer.png", "https://highwireact.itch.io/healer-healer"),
    new PortfolioItem("Psychic Game", "psychic.png", "https://github.com/HighwireAct/Psychic-Game"),
    new PortfolioItem("JQuery RPG", "rpg.png", "https://github.com/HighwireAct/unit-4-game"),
    new PortfolioItem("Literary Trivia Game", "trivia.png", "https://github.com/HighwireAct/TriviaGame"),
    new PortfolioItem("GIPHY Generator", "giphy.png", "https://github.com/HighwireAct/giphy-app"),
    new PortfolioItem("Films with Friends", "films-with-friends.png", "https://github.com/HighwireAct/group-project-1"),
    new PortfolioItem("Bamazon", "bamazon.png", "https://github.com/HighwireAct/bamazon"),
    new PortfolioItem("LIRI", "liri.png", "https://github.com/HighwireAct/liri")
  ]
  
  // Iterate through the array and render each item
  for (item of portfolioItems) {
    item.renderHTML("gallery");
  }
});