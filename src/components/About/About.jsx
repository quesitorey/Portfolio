import './About.css'
import Abt from '../../assets/avatar2.jpg'
import AboutBox from './AboutBox'

const About = () => {
  return(
    <section className='about container section' id='about'>
      <h2 className='section-title'>About Me</h2>
      
      <div className='about-container grid'>
        <img src={Abt} className='about-img'/>

        <div className='about-data grid'>
          <div className='about-info'>
            <p className='about-description'>Hi I'm Domitila Oceda, FullStack developer from Lima, Peru. I have a lot of experience in web design and building.</p>
            <a href='' className='btn'>Download CV</a>
          </div>

          <div className='about-skill grid'>
            <div className='skill-data'>
              <div className='skill-title'>
                <h3 className='skill-name'>Development</h3>
                <span className='skill-number'>78%</span>
              </div>
              <div className='skill-bar'>
                <span className='skill-percentage development'></span>
              </div>
            </div>

            <div className='skill-data'>
              <div className='skill-title'>
                <h3 className='skill-name'>UI/UX Design</h3>
                <span className='skill-number'>80%</span>
              </div>
              <div className='skill-bar'>
                <span className='skill-percentage ui'></span>
              </div>
            </div>

            <div className='skill-data'>
              <div className='skill-title'>
                <h3 className='skill-name'>React</h3>
                <span className='skill-number'>70%</span>
              </div>
              <div className='skill-bar'>
                <span className='skill-percentage react'></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox/>
    </section>
  )
}

export default About