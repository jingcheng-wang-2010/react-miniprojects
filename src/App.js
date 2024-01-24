import './App.css';
import ColorRenderer from './01-color-renderer/ColorRenderer'
import DarkMode from './02-dark-mode/DarkMode'
import FormValidator from './03-form-validator/FormValidator'
import DogPic from './04-dog-pic/DogPic'
import ScoreKeeper from './05-score-keeper/ScoreKeeper'

function App() {
  return (
    <div className="App">
      {/*<ColorRenderer />
      <DarkMode />
      <FormValidator />
      <DogPic />*/}
      <ScoreKeeper />
    </div>
  );
}

export default App;
