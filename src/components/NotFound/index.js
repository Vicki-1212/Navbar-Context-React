import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgClassName = isDarkTheme ? 'notfounddark' : 'notfoundlight'

      return (
        <>
          <Navbar />
          <div className={`notfound-container ${notFoundBgClassName}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="notfound-image"
            />
            <h1 className="notfound-heading">Lost Your Way?</h1>
            <p className="notfound-paragraph">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
