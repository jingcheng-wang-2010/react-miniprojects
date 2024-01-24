import './App.css';
import ColorRenderer from './01-color-renderer/ColorRenderer'
import DarkMode from './02-dark-mode/DarkMode'
import FormValidator from './03-form-validator/FormValidator'
import DogPic from './04-dog-pic/DogPic'
import ScoreKeeper from './05-score-keeper/ScoreKeeper'
import ToggleWindowEvent from './06-add-window-event/ToggleWindowEvent'
import ColorPicker from './07-color-picker/ColorPicker'
import PixelArt from './08-pixel-art/PixelArt'

function App() {
  return (
    <div className="App">
      {/*<ColorRenderer />
      <DarkMode />
      <FormValidator />
      <DogPic />
      <ScoreKeeper />
      <ToggleWindowEvent />
      <ColorPicker />*/}
      <PixelArt />
    </div>
  );
}

export default App;
