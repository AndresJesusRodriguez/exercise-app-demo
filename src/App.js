import './App.css';
import { useState } from 'react';
import { useCallback } from 'react';
import DurationExercise from './components/DurationExercise';
import RepititionExercise from './components/RepetitionExercise';

const MENU_SCREEN = "menu"
const EXERCISE_SCREEN = "exercise"
const DURATION_EXERCISE = "duration"
const REPITITION_EXERCISE = "repitition"




let exerciseList = [
  { type: DURATION_EXERCISE, name: "Running" },
  { type: DURATION_EXERCISE, name: "Rowing" },
  { type: DURATION_EXERCISE, name: "Swimming" },
  { type: REPITITION_EXERCISE, name: "Push Ups" }
]

function App() {

  let [currentScreen, setCurrentScreen] = useState(MENU_SCREEN)
  let [currentExercise, setCurrentExercise] = useState({})
  let screenComponent = undefined
  let buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise)
    setCurrentScreen(EXERCISE_SCREEN)
  })

  if (currentScreen === MENU_SCREEN) {
    screenComponent = <div>
      <p>Exercise Menu</p>
      <ul>
        {exerciseList.map((exercise) => {
          return <li key={exercise.name}>
            <button onClick={() => buttonClick(exercise)}>{exercise.name}</button>
          </li>
        })}
      </ul>
    </div>
  } else if (currentScreen === EXERCISE_SCREEN) {
    switch (currentExercise.type) {
      case DURATION_EXERCISE:
        screenComponent = <DurationExercise
          setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          exercise={currentExercise} />
        break;
      case REPITITION_EXERCISE:
        screenComponent = <RepititionExercise
          setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          exercise={currentExercise} />
        break;
      default:
        screenComponent = undefined

    }

  }

  return (
    <div className="App">
      <header className="App-header">
        {screenComponent}
      </header>
    </div>
  );
}

export default App;
