
const AboutBox = () => {
  return(
    <div className='about-boxes grid'>
      
      <div className='about-box'>
        <i className='about-icon bx bxs-hot'></i>

        <div>
          <h3 className='about-title'>7</h3>
          <span className='about-subtitle'>Proyectos Completados</span>
        </div>
      </div>

      <div className='about-box'>
        <i className='about-icon bx bxs-user-check'></i>

        <div>
          <h3 className='about-title'>400</h3>
          <span className='about-subtitle'>Horas de apredizaje</span>
        </div>
      </div>
    </div>
  )
}
export default AboutBox