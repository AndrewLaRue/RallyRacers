import { AppState } from "./Appstate.js"
import { Racer } from "./models/Racer.js";



function _drawRacers() {
  // console.log('drawRacers');

  let racers = AppState.racers
  let template = ''
  racers.forEach(racer => template += racer.Template)

  // @ts-ignore
  document.getElementById('racers').innerHTML = template

}

let _raceInterval = null

function _moveRacers() {
  // console.log('function move racers');
  let racers = AppState.racers
  racers.forEach(racer => {
    if (racer.distance < 95) {
      // console.log(racer.name);
      racers.forEach(racer => racer.distance += Math.floor(Math.random()*4))
      racers.forEach(racer => racer.move())
      _drawRacers()
    } else {
      clearInterval(_raceInterval)
    }
  })
}

export class Controller{

  constructor() {
    console.log(AppState.racers);
    _drawRacers()

  }

  start() {
    // console.log('start button');
     _raceInterval = setInterval(_moveRacers, 100)
    _moveRacers()
    
  }

  reset() {
    let racers = AppState.racers
    racers.forEach(racer => racer.distance = 0)
    _drawRacers()

  }

}


