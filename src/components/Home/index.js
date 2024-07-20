import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeBgClassName = isDarkTheme
        ? 'hdark-container'
        : 'hlight-continer'

      const homeHeadClassName = isDarkTheme ? 'hdark' : 'hlight'

      return (
        <>
          <Navbar />
          <div className={`home ${homeBgClassName}`}>
            <img src={homeImage} alt="home" className="home-image" />
            <h1 className={`home-heading ${homeHeadClassName}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
