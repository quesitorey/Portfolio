
const AboutBox = () => {
  return(
    <div className='about-boxes grid'>
      
      <div className='about-box'>
        <i className='about-icon bx bxs-hot'></i>

        <div>
          <h3 className='about-title'>25</h3>
          <span className='about-subtitle'>Projects Completed</span>
        </div>
      </div>

      <div className='about-box'>
        <i className='about-icon bx bxs-user-check'></i>

        <div>
          <h3 className='about-title'>38</h3>
          <span className='about-subtitle'>Satisfied clients</span>
        </div>
      </div>

      <div className='about-box'>
        <i className='about-icon bx bxs-school'></i>

        <div>
          <h3 className='about-title'>5</h3>
          <span className='about-subtitle'>Satisfied companies</span>
        </div>
      </div>
    </div>
  )
}
export default AboutBox