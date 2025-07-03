   const game = document.getElementById("game");
    const scoreEl = document.getElementById("score");
    const timeEl = document.getElementById("time");
    const barkSound = document.getElementById("bark-sound");

    let score = 0;
    let time = 20;
    let timer;

    function startGame() {
      score = 0;
      time = 20;
      scoreEl.textContent = score;
      timeEl.textContent = time;
      game.innerHTML = "";
      clearInterval(timer);
      spawnDog();
      timer = setInterval(() => {
        time--;
        timeEl.textContent = time;
        if (time <= 0) {
          clearInterval(timer);
          game.innerHTML = "";
          alert("Game Over! Your score: " + score);
        }
      }, 1000);
    }

    function spawnDog() {
      const dog = document.createElement("img");
      dog.src = "https://cdn-icons-png.flaticon.com/512/616/616408.png";
      dog.className = "dog";
      dog.style.top = Math.random() * (game.clientHeight - 60) + "px";
      dog.style.left = Math.random() * (game.clientWidth - 60) + "px";

      dog.onclick = () => {
        score++;
        scoreEl.textContent = score;
        barkSound.currentTime = 0;
        barkSound.play();
        dog.remove();
        spawnDog();
      };

      game.appendChild(dog);
    }