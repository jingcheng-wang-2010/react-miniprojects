import './styles.css'
import { useState }  from "react"

export default function DarkMode () {
    /*function darkModeOn() {
      document.getElementsByClassName('page')[0].classList.add('dark-mode');
    }

    function darkModeOff() {
      document.getElementsByClassName('page')[0].classList.remove('dark-mode');
    }*/

    const [darkMode, setDarkMode] = useState(false)

    return (
      <div className= {`page ${darkMode && 'dark-mode'}`}>
        <button className='dark-mode-button' onClick={() => setDarkMode(true)}>Dark Mode</button>
        <button className='light-mode-button' onClick={() => setDarkMode(false)}>Light Mode</button>
      </div>
    )
  }