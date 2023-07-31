import './Home.css'
import HeaderSocial from './HeaderSocial'
import Scroll from './Scroll'
import avatar from '../../assets/avatar.jpg'
const Home = () => {
  return(
    <section className='home-container' id='home'>
        <div className='home-img-container'>
          <img src={avatar} className='home-img'/>
          <div className='home-box'></div>
        </div>
      <div className='introduction'>
        <h1 className='home-name'>Domitila Oceda</h1>
        <span className='home-education'>I'm a FullStack Developer</span>

        <HeaderSocial/>

        <a href='#contact' className='btn'>Contact Me</a>

        <Scroll/>
      </div>
    </section>
  )
}

export default Home