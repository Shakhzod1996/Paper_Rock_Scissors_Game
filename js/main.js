
// Deleting Circles
let circles = document.querySelectorAll('.circle');
let gameMain = document.querySelector('.game-main');
let results = document.querySelector('.results');
let yourChoice = document.querySelector('.your-choice');
let randomChoice = document.querySelector('.random-choice');

let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let rock = document.querySelector('.rock');
let yourResult = document.querySelector('.your-result');
let houseResult = document.querySelector('.house-result');
let myScore = document.querySelector('.my-score');
let houseScore = document.querySelector('.comp-score');

let sum = 0
let comp = 0

// Clicking circle
circles.forEach(circle => {
  circle.addEventListener('click', () => {
    gameMain.classList.add('game-main-hide')
    results.classList.add('results-show')
    let cloneCircle = circle.cloneNode(true)
    yourChoice.appendChild(cloneCircle)
    cloneCircle.classList.add('circle-add')

    // Choosing Rand
    setTimeout(() => {
      let clonePaper = paper.cloneNode(true)
      let cloneScissors = scissors.cloneNode(true)
      let cloneRock = rock.cloneNode(true)
      let random = Math.random()

      if (random < 0.33) {
        randomChoice.appendChild(clonePaper)
        clonePaper.classList.add('circle-add')
      } else if (random < 0.66) {
        randomChoice.appendChild(cloneScissors)
        cloneScissors.classList.add('circle-add')
      } else if (random < 1) {
        randomChoice.appendChild(cloneRock)
        cloneRock.classList.add('circle-add')
      }


      // Comparing with each other 
      let eachOfRandomChoice = randomChoice.children

      for (let i = 0; i < eachOfRandomChoice.length; i++) {
        if (circle.classList.contains('paper') && eachOfRandomChoice[i].classList.contains('rock')) {
          console.log('qwerty');
          myScore.innerHTML = sum++
          setTimeout(() => {
            gameMain.classList.remove('game-main-hide')
            results.classList.remove('results-show')
          }, 2000)

        } 
        // else if (circle.classList.contains('rock') && eachOfRandomChoice[i].classList.contains('scissors')) {
        //   myScore.innerHTML = sum++
        //   setTimeout(() => {
        //     gameMain.classList.remove('game-main-hide')
        //     results.classList.remove('results-show')
        //   }, 2000)
        // } else if (circle.classList.contains('scissors') && eachOfRandomChoice[i].classList.contains('paper')) {
        //   myScore.innerHTML = sum++
        //   setTimeout(() => {
        //     gameMain.classList.remove('game-main-hide')
        //     results.classList.remove('results-show')
        //   }, 2000)
        // } else {
        //   setTimeout(() => {
        //     gameMain.classList.remove('game-main-hide')
        //     results.classList.remove('results-show')
        //   }, 2000)
        // }

        // // Computer Wins
        // if (eachOfRandomChoice[i].classList.contains('paper') && circle.classList.contains('rock')) {
        //   houseScore.innerHTML = comp++
        //   setTimeout(() => {
        //     gameMain.classList.remove('game-main-hide')
        //     results.classList.remove('results-show')
        //   }, 2000)
        // } else if (eachOfRandomChoice[i].classList.contains('rock') && circle.classList.contains('scissors')) {
        //   houseScore.innerHTML = comp++
        //   setTimeout(() => {
        //     gameMain.classList.remove('game-main-hide')
        //     results.classList.remove('results-show')
        //   }, 2000)
        // } else if (eachOfRandomChoice[i].classList.contains('scissors') && circle.classList.contains('paper')) {
        //   houseScore.innerHTML = comp++
        //   setTimeout(() => {
        //     gameMain.classList.remove('game-main-hide')
        //     results.classList.remove('results-show')
        //   }, 2000)
        // } else {
        //   setTimeout(() => {
        //     gameMain.classList.remove('game-main-hide')
        //     results.classList.remove('results-show')
        //   }, 2000)
        // }
      }

      // if (sum == 5 ||comp == 5 ) {
      //   sum = 0
      //   comp = 0
      // }

    }, 1000)
  })
})



