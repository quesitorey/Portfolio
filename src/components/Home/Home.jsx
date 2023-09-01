import './Home.css'
import HeaderSocial from './HeaderSocial'
import Scroll from './Scroll'
import avatar from '../../assets/Domi2.jpg'
const Home = () => {
  return(
    <section className='home-container' id='home'>
        <div className='home-img-container'>
          <img src={avatar} className='home-img'/>
          <div className='home-box'></div>
        </div>
      <div className='introduction'>
        <h1 className='home-name'>Domitila Oceda</h1>
        <span className='home-education'>Front End Developer</span>

        <HeaderSocial/>

        <Scroll/>
      </div>
    </section>
  )
}

export default Home