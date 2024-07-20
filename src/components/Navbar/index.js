import {Link} from 'react-router-dom'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const switchTheme = isDarkTheme ? 'dark' : 'light'

      const onClickTheme = () => {
        toggleTheme()
      }

      const logoImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navbarBgClassName = isDarkTheme
        ? 'dark-container'
        : 'light-container'

      return (
        <div className={`navbar ${navbarBgClassName}`}>
          <img src={logoImage} alt="website logo" className="logo" />
          <ul className="list-container">
            <Link className={`nav-link-${switchTheme}`} to="/">
              <li>Home</li>
            </Link>
            <Link className={`nav-link-${switchTheme}`} to="/about">
              <li>About</li>
            </Link>
          </ul>
          <button
            data-testid="theme"
            className="image-button"
            type="button"
            onClick={onClickTheme}
          >
            <img src={themeImage} alt="theme" className="theme" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
