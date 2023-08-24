import './About.css'
import Abt from '../../assets/Domi2.jpg'
import AboutBox from './AboutBox'

const About = () => {
  return(
    <section className='about container section' id='about'>
      <h2 className='section-title'>About Me</h2>
      
      <div className='about-container grid'>
        <img src={Abt} className='about-img'/>

        <div className='about-data grid'>
          <div className='about-info'>
            <p className='about-description'>Hola! Soy Domitila Oceda, alguien que esta en pasos de aprendizaje para ser FullStack developer, pero con algo de experiencia en desarrollar proyectos visualmente agradables.</p>
            
          </div>

          <div className='about-skill grid'>
            <div className='skill-data'>
              <div className='skill-title'>
                <h3 className='skill-name'>CSS</h3>
                <span className='skill-number'>60%</span>
              </div>
              <div className='skill-bar'>
                <span className='skill-percentage development'></span>
              </div>
            </div>

            <div className='skill-data'>
              <div className='skill-title'>
                <h3 className='skill-name'>HTML</h3>
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