/*
 * WEB222 – Assessment Final
 * info.js
 *
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 *      Name:       KA YING, CHAN
 *      Student ID: 123231227
 *      Date:       9 AUG 2023
*/
function historyDiv() {
  const historyDiv = document.getElementById("historyDiv");
  historyDiv.classList.add("historyDiv");
  const header = document.createElement("h2");
  header.textContent = "#History";
  const text = document.createElement("p");
  text.innerHTML = `This is the captivating tale of the Rummikub game, which was conceived over 70 years ago. Mr. Ephraim Hertzano, who used to sell toothbrushes, plastic items, and cosmetics, came up with a brilliant idea for a game while living in Romania under the Communist regime, where card games were banned.
  Mr. Hertzano wanted to create a game that could be enjoyed by people of all ages and backgrounds, using small tiles instead of cards. He aimed to bring people together and revolutionize leisure time worldwide. He named this game Rummikub. With a bright and ambitious vision, the game quickly gained popularity.
  After World War II, the Hertzano family moved to Israel, where they continued developing Rummikub. They worked on it in the backyard of their home in Bat Yam and eventually became professional game developers after successfully launching it in the market.
  <br><br> Over the years, Rummikub has become a household name, recognized and enjoyed by generations across the globe. Its ability to bridge language and cultural barriers has made it a universal pastime. The game's legacy continues as it remains a staple in family gatherings, social events, and gaming communities.<br>`;
  const h_img = document.createElement("img");
  h_img.src = `https://rummikub.com/wp-content/uploads/2021/02/evolution.d110a0.webp`;
  historyDiv.appendChild(header);
  historyDiv.appendChild(text);
  historyDiv.appendChild(h_img);
}

function rulesDiv() {
  const rulesDiv = document.getElementById("rulesDiv");
  const header = document.createElement("h2");
  header.textContent = "#Rules";
  const text = document.createElement("p");
  text.innerHTML = `Rummikub The Original Game Tutorial<br>`;
  const ytDiv = document.createElement("div");
  ytDiv.innerHTML = `<iframe width="800" height="450" src="https://www.youtube.com/embed/85D3Ixkt0cM"
   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  rulesDiv.appendChild(header);
  rulesDiv.appendChild(text);
  rulesDiv.appendChild(ytDiv);
}

function tipsDiv() {
  const tipsDiv = document.getElementById("tipsDiv");
  const header = document.createElement("h2");
  header.textContent = "#WinningTips";
  const text = document.createElement("p");
  text.innerHTML = `
  <ul>
  <li><b>#1. Use the Joker Wisely: </b>Only get rid of the joker when you can win. This stops others from benefiting from your joker.</li>
  <li><b>#2. Make a Fun Mistake: </b>Sometimes, do something wrong on purpose and finish your turn. As a punishment, pick three extra cards. This gives you more choices for your next turn.</li>
  <li><b>#3. Joker Strategy: </b>If you have a joker and a similar tile, use the joker after swapping it. If a card is on the board twice, throw it away. This way, others can't use the joker advantage.</li>
  <li><b>#4. Locking Tiles: </b>You can't remove tiles from a meld with a joker, but you can lock tiles to stop others from using them together. This is a great tip.</li>
  <li><b>#5. Three Tile Trick: </b>Try not to add tiles to groups that are already there. Instead, use your tiles in groups of three. It's harder for others to match three tiles.</li>
  <li><b>#6. Save Some Moves: </b>Don't use all your moves at once. Play one and save the others for later. This way, you won't need to remove more tiles.</li>
  <li><b>#7. Swap with the Joker: </b>If you have a tile like the joker, switch it with the joker. This lets you use the joker somewhere else.</li>
  <li><b>#8. Smart Joker Use: </b>If you're losing, use the joker in your hand. It can be worth 30 points. So, use the jokers early. Others might use them, giving you more choices.</li>
  </ul>`;
  const ytDiv = document.createElement("div");
  ytDiv.innerHTML = `<iframe width="800" height="450" src="https://www.youtube.com/embed/ox0sNDk41uU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

  tipsDiv.appendChild(header);
  tipsDiv.appendChild(text);
  tipsDiv.appendChild(ytDiv);
}

historyDiv();
rulesDiv();
tipsDiv();
