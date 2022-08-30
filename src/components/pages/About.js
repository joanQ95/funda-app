import React from 'react'
import Vmc from './Vmc'

function Aboutus() {
  return (
    <div>
        <section className='py-4 bg-info'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 my-auto'>
                        <h4>About us</h4>
                    </div>
                    <div className='col-md-8 my-auto'>
                        <h6 className='float-end'>
                            Home / About us
                        </h6>
                    </div>
                </div>
            </div>
        </section>

        <section className='section bg-c-light border-bottom'>
            <div className='container'>
                <h5 className='main-heading'>Our Company</h5>
                <div className='underline'></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore maxime earum in ipsum repellendus illum culpa, delectus aliquid.</p>                
            </div>
        </section>

        <Vmc/>
    </div>
  )
}

export default Aboutus