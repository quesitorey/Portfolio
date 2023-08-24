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
          <h3 className='services-title'>CSS</h3>
          <p className='services-description'>Me gusta que mis proyectos queden bonitos y bien estructurados, todo lo necesario para que sean agradable visualmente.</p>
        </div>

        <div className='services-card'>
          <img src={Service2} className='services-img'/>
          <h3 className='services-title'>Desarrollo Web</h3>
          <p className='services-description'>La organizacion es una caracteristica mia, en mi codigo siempre habran secciones y clases.</p>
        </div>

        <div className='services-card'>
          <img src={Service3} className='services-img'/>
          <h3 className='services-title'>React</h3>
          <p className='services-description'>Actualmente puliendo los detalles de esta interesante libreria que estoy aprendiendo.</p>
        </div>
        
      </div>
    </section>
  )
}

export default Services