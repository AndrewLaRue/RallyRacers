import { AppState } from "../Appstate.js"



export class Racer{

constructor(name, img, number, distance, wins ){

  this.name = name
  this.img = img
  this.number = number
  this.distance = distance
  this.wins = wins
  }
  
  get Template() {
    return `
     <div id="${this.number}" class="col-12 bg-light border border-dark border-2 rounded my-1 fs-1" style="padding-left: ${this.distance}%;">${this.img}</div>
    `
  }

  move() {
    
    if (this.distance >= 95) {
      this.distance = 95
      this.winner()
    }
  }

  winner() {
    if (this.distance = 95) {
      // console.log(this.name);

      let winner = document.getElementById('winner')

      // @ts-ignore
      winner.innerText = `${this.img}`
      
      this.wins++

      let hall = document.querySelector('#' + `${this.name}`)
      console.log(hall, 'hall');

      let scale = 50 + (this.wins*4)
      let size = scale
      hall.innerHTML = `
            <div id="${this.name}" title="Coins: ${this.wins}" class="col-2"style="font-size: ${size}px;">${this.img}</div>
            
      `


    }
  }

}

