
window.reviews = [
  {
    id: "r1",
    name: "Wavierwww",
    date: "2023-8-6",
    imageUrl: `https://pbs.twimg.com/profile_images/1354154947630292993/nGzZq5MN_400x400.jpg`,
    content: `Why did the Rummikub tile go to therapy? Because it couldn't find its matching set and had an identity crisis!`,
    ratings: "🌕🌕🌕🌕🌑"
  },
  {
    id: "r2",
    name: "Lake",
    date: "2023-8-2",
    imageUrl: `https://static.wikia.nocookie.net/4503bd5c-072f-44fe-bb1c-40db1c016385/scale-to-width/755`,
    content: `I've always enjoyed Rummikub, and I've started playing it again recently. I understand waiting between turns and taking time during my own turn. My wife and I use a 3-minute timer to keep things moving. Playing online with a free app helps reset the game. When I played in person a few times, it was frustrating to redo a tricky move that didn't go well.`,
    ratings: "🌕🌕🌕🌕🌕"
  },
  {
    id: "r3",
    name: "DrewDude",
    date: "2023-7-19",
    imageUrl: `https://images.squarespace-cdn.com/content/v1/5ab85e1fb98a7888d761a856/1539290385703-39AT8H3MKU130V9HWGK1/bwg_square_v1.jpg`,
    content: `Rummikub is like Rummy, but with tiles. I enjoy Rummy games like Gin and Canasta, but Rummikub takes too much time and waiting without a timer can be frustrating.`,
    ratings: "🌕🌕🌕🌕🌕"
  },
  {
    id: "r4",
    name: "Hehe999",
    date: "2023-5-21",
    imageUrl: `https://static01.nyt.com/images/2021/04/30/multimedia/30xp-meme/29xp-meme-mediumSquareAt3X-v5.jpg`,
    content: `Rummikub is a blast to play, but watch out – it can get seriously competitive! It's all in good fun though, and that's what makes it even more exciting.`,
    ratings: "🌕🌕🌕🌕🌕"
  },
  {
    id: "r5",
    name: "ConfusedLady",
    date: "2022-12-29",
    imageUrl: `https://64.media.tumblr.com/99b3aa3543c285ec379d0e4c6063427c/917fb3f20dfb2f12-49/s400x600/1f6a1f4f2dca6ad7ccfedfabef410495ea9f16a9.gifv`,
    content: `I am still loading... But it's probably the easiest game I have ever played...`,
    ratings: "🌕🌕🌕🌕🌑"
  },
  {
    id: "r6",
    name: "SingingCat",
    date: "2022-10-6",
    imageUrl: `https://as2.ftcdn.net/v2/jpg/01/21/53/67/1000_F_121536712_G4dCFgDHNl4Y2MJQjjXH3wprpC7jxXd4.jpg`,
    content: `I bet you can't beat me in this game😼😼 rrrrrrr`,
    ratings: "🌕🌕🌕🌕🌕"
  }
];


const reviews = window.reviews;
function createReviews() {
  const reviewsDiv = document.getElementById("reviewsDiv");
  const header = document.createElement("h2");
  header.textContent = "#LeaveSomeComments!";

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("cardContainer");

  reviews.forEach((review) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const iconImg = document.createElement("img");
    iconImg.classList.add("iconCircle");
    iconImg.src = review.imageUrl;

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("textContainer");

    const name = document.createElement("p");
    name.classList.add("textContainer_name");
    name.textContent = review.name;
    const date = document.createElement("p");
    date.classList.add("textContainer_date");
    date.textContent = review.date;
    const content = document.createElement("p");
    content.classList.add("textContainer_content");
    content.textContent = review.content;
    const ratings = document.createElement("p");
    ratings.textContent = review.ratings;

    reviewsDiv.appendChild(header);
    reviewsDiv.appendChild(cardContainer);
    cardContainer.appendChild(card);
    card.appendChild(iconImg);
    card.appendChild(infoContainer)
    infoContainer.appendChild(name);
    infoContainer.appendChild(date);
    infoContainer.appendChild(content);
    infoContainer.appendChild(ratings);
    });

  // return cardContainer;
}

createReviews();