import React from 'react'
import Slider from '../inc/Slider'
import {Link} from 'react-router-dom'
import Vmc from './Vmc'
import Service1 from '../images/company-bg.jpg'

function Home() {
  return (
    <div>
        <Slider/>
        <section className='section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h3 className='main-heading'>Our Company</h3>
                        <div className='underline mx-auto'></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore maxime earum in ipsum repellendus illum culpa, delectus aliquid, facere id neque modi reiciendis dolores ex! Quasi ipsa commodi placeat totam architecto minus sunt aspernatur, porro eaque dignissimos expedita, sapiente debitis maiores harum omnis earum perferendis corrupti sed exercitationem? Autem quos voluptatem dolores cum repellendus hic ullam odit alias sint. At nemo dolor quod voluptatem quas? Est hic consectetur odio placeat debitis modi eaque eveniet voluptatibus ab velit officia, deserunt sunt et corrupti dicta ratione reprehenderit, beatae harum nemo culpa magni magnam ipsam natus! Atque beatae cupiditate fugit nulla illo?</p>
                        <Link to="/about" className='btn btn-warning shadow'> Read More</Link>
                    </div>
                </div>
            </div>
        </section>
        <Vmc/>
        <section className='section bg-c-light border-top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 mb-4 text-center'>
                        <h3 className='main-heading'>Our Services</h3>
                        <div className='underline mx-auto'></div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card shadow'>
                            <img src={Service1} className='w-100 border-bottom' alt='Services'/>
                            <div className='card-body'>
                                <h6>Services 1</h6>
                                <div className='underline'></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore maxime earum in ipsum repellendus illum culpa, delectus aliquid.</p>
                                <Link to="/services" className="btn btn-link">Read More</Link>
                            </div>
                        </div>
                        
                    </div>
                    <div className='col-md-4'>
                        <div className='card shadow'>
                            <img src={Service1} className='w-100 border-bottom' alt='Services'/>
                            <div className='card-body'>
                                <h6>Services 2</h6>
                                <div className='underline'></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore maxime earum in ipsum repellendus illum culpa, delectus aliquid.</p>
                                <Link to="/services" className="btn btn-link">Read More</Link>
                            </div>
                        </div>
                        
                    </div>
                    <div className='col-md-4'>
                        <div className='card shadow'>
                            <img src={Service1} className='w-100 border-bottom' alt='Services'/>
                            <div className='card-body'>
                                <h6>Services 3</h6>
                                <div className='underline'></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore maxime earum in ipsum repellendus illum culpa, delectus aliquid.</p>
                                <Link to="/services" className="btn btn-link">Read More</Link>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home