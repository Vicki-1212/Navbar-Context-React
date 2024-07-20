import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutBgClassName = isDarkTheme ? 'aboutdark' : 'aboutLight'

      return (
        <>
          <Navbar />
          <div className={`about-container ${aboutBgClassName}`}>
            <img src={aboutImage} alt="about" className="about-image" />
            <h1 className="about-heading">About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
