import './Portfolio.css'
import Galleta from '../../assets/galleta.png'
import Portafolio from '../../assets/portfolio.png'
import Ecommerce from '../../assets/ecommerce.png'
import Weather from '../../assets/weather.png'
import RM from '../../assets/RM.jpeg'
import Users from '../../assets/Users.jpeg'

const Portfolio = () => {
  return(
    <section className='work container section' id='portfolio'>
      <h2 className='section-title'>Portfolio</h2>
      
      <div className='work-container grid'>
        
        <div className='work-container-child'>
          <img className='work-img' src={Galleta}/>
          <div className='work-description'>
            <a href='https://galleta-de-fortuna.netlify.app' target='_blank' className='work-link'><p>Galleta de la Fortuna</p></a>
          </div>
        </div>

         <div className='work-container-child'>
          <img className='work-img' src={Weather}/>
          <div className='work-description'>
            <a href='https://wether-appp.netlify.app' target='_blank' className='work-link'><p>Weather App</p></a>
          </div>
        </div>

         <div className='work-container-child'>
          <img className='work-img' src={RM}/>
          <div className='work-description'>
            <a href='https://rickymortyy.netlify.app' target='_blank' className='work-link'><p>Rick & Morty</p></a>
          </div>
        </div>

         <div className='work-container-child'>
          <img className='work-img' src={Users}/>
          <div className='work-description'>
            <a href='https://users-proyect-crud.netlify.app' target='_blank' className='work-link'><p>CRUD Users</p></a>
          </div>
        </div>

        <div className='work-container-child'>
          <img className='work-img' src={Portafolio}/>
          <div className='work-description'>
            <a href='https://sparkling-baklava-2b1c14.netlify.app/' target='_blank' className='work-link'><p>My first Portfolio</p></a>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Portfolio