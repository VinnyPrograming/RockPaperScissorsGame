//╭╮╱╱╭╮╱╱╱╱╱╱╱╱╱╱╭━━━╮╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//┃╰╮╭╯┃╱╱╱╱╱╱╱╱╱╱╰╮╭╮┃╱╱╱╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╯╰╮
//╰╮┃┃╭╋━╮╭━╮╭╮╱╭╮╱┃┃┃┣━━┳╮╭┳━━┫┃╭━━┳━━┳╮╭┳━━┳━╋╮╭╯
//╱┃╰╯┣┫╭╮┫╭╮┫┃╱┃┃╱┃┃┃┃┃━┫╰╯┃┃━┫┃┃╭╮┃╭╮┃╰╯┃┃━┫╭╮┫┃
//╱╰╮╭┫┃┃┃┃┃┃┃╰━╯┃╭╯╰╯┃┃━╋╮╭┫┃━┫╰┫╰╯┃╰╯┃┃┃┃┃━┫┃┃┃╰╮
//╰╯╰┻╯╰┻╯╰┻━╮╭╯╰━━━┻━━╯╰╯╰━━┻━┻━━┫╭━┻┻┻┻━━┻╯╰┻━╯
//╱╱╱╱╱╱╱╱╱╭━╯┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╱╱╱╱╱╱╱╱╱╰━━╯╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰╯


const player = prompt("What is your choice? ")

const answers = ["rock", "paper", "scissors"]

const random = Math.floor(Math.random() * answers.length)

const computer = answers[random]

console.log(computer)


function rockPaperScissors() {

    switch(true){
        
      case player === computer:
        console.log("It is a tie")
        break
      case player === "rock" && computer === "scissors":
        console.log("You Win!")
        break
      case player === "scissors" && computer === "paper":
        console.log("You Win!")
        break
      case player === "paper" && computer === "rock":
        console.log("You Win!")
        break
      default: console.log("You lost...Please, play again!") 
        
           
        
    }

}






rockPaperScissors()
