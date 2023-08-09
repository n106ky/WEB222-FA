
window.reviews = [
  {
    //id: 1,
    name: "Wavierwww",
    date: "2023-8-6",
    imageUrl: `https://pbs.twimg.com/profile_images/1354154947630292993/nGzZq5MN_400x400.jpg`,
    comment: `Why did the Rummikub tile go to therapy? Because it couldn't find its matching set and had an identity crisis!`,
    ratings: 4
  },
  {
    //id: 2,
    name: "Lake",
    date: "2023-8-2",
    imageUrl: `https://static.wikia.nocookie.net/4503bd5c-072f-44fe-bb1c-40db1c016385/scale-to-width/755`,
    comment: `I've always enjoyed Rummikub, and I've started playing it again recently. I understand waiting between turns and taking time during my own turn. My wife and I use a 3-minute timer to keep things moving. Playing online with a free app helps reset the game. When I played in person a few times, it was frustrating to redo a tricky move that didn't go well.`,
    ratings: 5
  },
  {
    //id: 3,
    name: "DrewDude",
    date: "2023-7-19",
    imageUrl: `https://images.squarespace-cdn.com/content/v1/5ab85e1fb98a7888d761a856/1539290385703-39AT8H3MKU130V9HWGK1/bwg_square_v1.jpg`,
    comment: `Rummikub is like Rummy, but with tiles. I enjoy Rummy games like Gin and Canasta, but Rummikub takes too much time and waiting without a timer can be frustrating.`,
    ratings: 5
  },
  {
    //id: 4,
    name: "Hehe999",
    date: "2023-5-21",
    imageUrl: `https://static01.nyt.com/images/2021/04/30/multimedia/30xp-meme/29xp-meme-mediumSquareAt3X-v5.jpg`,
    comment: `Rummikub is a blast to play, but watch out – it can get seriously competitive! It's all in good fun though, and that's what makes it even more exciting.`,
    ratings: 5
  },
  {
    //id: 5,
    name: "ConfusedLady",
    date: "2022-12-29",
    imageUrl: `https://64.media.tumblr.com/99b3aa3543c285ec379d0e4c6063427c/917fb3f20dfb2f12-49/s400x600/1f6a1f4f2dca6ad7ccfedfabef410495ea9f16a9.gifv`,
    comment: `I am still loading... But it's probably the easiest game I have ever played...`,
    ratings: 4
  },
  {
    //id: 6,
    name: "SingingCat",
    date: "2022-10-6",
    imageUrl: `https://as2.ftcdn.net/v2/jpg/01/21/53/67/1000_F_121536712_G4dCFgDHNl4Y2MJQjjXH3wprpC7jxXd4.jpg`,
    comment: `I bet you can't beat me in this game😼😼 rrrrrrr`,
    ratings: 5
  }
];


const reviews = window.reviews;
function displayReviews() {
  const reviewsDiv = document.getElementById("reviewsDiv");
  reviewsDiv.innerHTML = "";
  const header = document.createElement("h2");
  header.classList.add("headerh2");
  header.textContent = "#CommentsArea";

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
    const comment = document.createElement("p");
    comment.classList.add("textContainer_content");
    comment.textContent = review.comment;
    const ratings = document.createElement("p");
    ratings.textContent = `${'🌕'.repeat(review.ratings)}${'🌑'.repeat(5 - review.ratings)}`;


    reviewsDiv.appendChild(header);
    reviewsDiv.appendChild(cardContainer);
    cardContainer.appendChild(card);
    card.appendChild(iconImg);
    card.appendChild(infoContainer)
    infoContainer.appendChild(name);
    infoContainer.appendChild(date);
    infoContainer.appendChild(comment);
    infoContainer.appendChild(ratings);
    });
}
// displayReviews();


function addReview() {
  var form = document.getElementById("commentsForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var date = new Date();
    var formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    var imageUrl= `https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQFH1wgOpFSsG2R9yXCMr5iC_tZ7uD4QNNZFeFyAT4WLAdMow4H`;
    var comment = document.getElementById("comments").value; // Changed to "comments"
    var ratings = document.getElementById("ratings").value;

    var newReview = {
      name,
      date: formattedDate, // assigning the value of the formattedDate variable to the date property of the newReview object. Just "formattedDate" is wrong.
      imageUrl,
      comment,
      ratings,
    };

    reviews.push(newReview);
    form.reset();
    displayReviews();
  });
}

function onLoad() {
  displayReviews();
  addReview();
}

window.addEventListener("load", onLoad);