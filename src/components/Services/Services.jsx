import './Services.css'
import Service1 from '../../assets/service-1.svg'
import Service2 from '../../assets/service-2.svg'
import Service3 from '../../assets/service-3.svg'

const Services = () => {
  return(
    <section className='services container section' id='services'>
      <h2 className='section-title'>Skills</h2>

      <div className='services-container grid'>

        <div className='services-card'>
          <img src={Service1} className='services-img'/>
          <h3 className='services-title'>CSS</h3>
          <p className='services-description'>I like my projects to be pretty and well structured so they are aesthetically pleasing.</p>
        </div>

        <div className='services-card'>
          <img src={Service2} className='services-img'/>
          <h3 className='services-title'>Desarrollo Web</h3>
          <p className='services-description'>Organization is by my side. I like my code to be separated by classes and components.</p>
        </div>

        <div className='services-card'>
          <img src={Service3} className='services-img'/>
          <h3 className='services-title'>Node.js</h3>
          <p className='services-description'>Actually learning!!</p>
        </div>
        
      </div>
    </section>
  )
}

export default Services