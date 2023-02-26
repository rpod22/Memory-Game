window.onload = function() {
  const cards = document.querySelectorAll(".card");
  const activeCards = [];
  const notActiveCards = [cards];
  let correct = false;
  let clicked = document.getElementsByClassName("clicked");

  // let images = ["./images/sea-7403739_640.jpg", "./images/bird-7765384_640.jpg", "./images/corgi-6673343_640.jpg", "./images/gingerbread-1819596_640.png","./images/moth-7734668_640.jpg", "./images/night-sky-7733876_640.jpg"];

  // let spots = document.querySelectorAll(".front-img");
  // spots.forEach(spot => {
  //   spot.src = images[Math.random()]
  // });

  // MOZNA POPROBOWAC Z TYM RANDOMOWYM ROZKLADEM ZDJEC :))

  const startBtn = document.getElementById("start-game");
  startBtn.addEventListener("click", function() {
    startBtn.style.display = "none";
    document.getElementById("restart").style.display = "block";
    document.getElementById("timer").style.display = "block";
    document.getElementById("cards-container").style.display = "grid";

    const timer = document.getElementsByClassName("timer")[0];
    let seconds = -1;
    let minutes = 0;
    setInterval(() => {
      seconds++;
      if(seconds > 60) {
        minutes++;
        seconds = -1;
      }
      timer.innerHTML = minutes + ":" + seconds;
    }, 1000);

    const restart = document.getElementById("restart");
    restart.addEventListener("click", function(){ 
      cards.forEach(card => {
        card.classList.remove("clicked");
        activeCards.length = 0;
      });
      seconds = -1;
      minutes = 0;
    }); 
  });

  

  for(let i=0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
      const currentCard = cards[i];
      let currentImg = currentCard.lastElementChild.lastElementChild.lastElementChild;

      if (!currentCard.classList.contains("clicked")) {
        currentCard.classList.add("clicked");
        activeCards.push(currentImg);
        if(activeCards.length == 2 && activeCards[0].src == currentImg.src) {
          notActiveCards.splice(0, activeCards.length);
          activeCards.length = 0;
          correct = true;
        };
        if(activeCards.length == 2 && correct || activeCards.length == 2 && clicked.length < 3) {
          setTimeout(() => {
            if(activeCards.length !== 0) {
              currentCard.classList.remove("clicked");
              activeCards.length -= 1;
            };
          }, 1000);
        }
        if(clicked.length == 12) {
          document.getElementById("congrats").style.display = "block";
          setTimeout(() => {
            document.getElementById("congrats").style.display = "none";
          }, 3000);
        };      
      }
      else{
        currentCard.classList.remove("clicked");
        activeCards.length -= 1;
      };
    });
  };
};