import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <section className='section footer fixed-bottom bg-dark text-white'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <h6>Company Information</h6>
                    <hr/>
                    <p className='text-white'>
                        asfasfasgfasfgasf asdgfasfasfdasfas asfasedqwdfaxfasfda asddasfsdfgsdgsdg
                        sdsdgsdfhdfgyhehrt erteryerherhergsdfwed vcbdfhrftuytrikghhbjghfk
                         deryeryheyherherherherh hyertyhetrjhdtfhdrt
                    </p>
                </div>
                <div className='col-md-4'>
                    <h6>Quick Links</h6>
                    <hr/>
                    <div><Link to='/'>Home</Link></div>
                    <div><Link to='/about'>About</Link></div>
                    <div><Link to='/'>Contact</Link></div>
                    <div><Link to='/'>Blog</Link></div>
                </div>
                <div className='col-md-4'>
                    <h6>Contact Information</h6>
                    <hr/>
                    <div><p className='text-white mb-1'>#64, Bangalore Karnataka India. Byrathi</p></div>
                    <div><p className='text-white mb-1'>+91 8888XXXX88</p></div>
                    <div><p className='text-white mb-1'>+91 8888XXXX88</p></div>
                    <div><p className='text-white mb-1'>email@doamin.com</p></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer