import './Services.css'
import Service1 from '../../assets/service-1.svg'
import Service2 from '../../assets/service-2.svg'
import Service3 from '../../assets/service-3.svg'

const Services = () => {
  return(
    <section className='services container section' id='services'>
      <h2 className='section-title'>Services</h2>

      <div className='services-container grid'>

        <div className='services-card'>
          <img src={Service1} className='services-img'/>
          <h3 className='services-title'>UI/UX Design</h3>
          <p className='services-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
        </div>

        <div className='services-card'>
          <img src={Service2} className='services-img'/>
          <h3 className='services-title'>Web Development</h3>
          <p className='services-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
        </div>

        <div className='services-card'>
          <img src={Service3} className='services-img'/>
          <h3 className='services-title'>Photography</h3>
          <p className='services-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
        </div>
        
      </div>
    </section>
  )
}

export default Services