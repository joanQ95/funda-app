import React from 'react'

function Contactus() {
  return (
    <div>
        <section className='py-4 bg-info'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 my-auto'>
                        <h4>Contact us</h4>
                    </div>
                    <div className='col-md-8 my-auto'>
                        <h6 className='float-end'>
                            Home / Contact us
                        </h6>
                    </div>
                </div>
            </div>
        </section>

        <section className='section'>
            <div className='container'>
                <div className='card shadow'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h6>Contact Form</h6>
                                <hr/>
                                <div className='form-group'>
                                    <label className='mb-1'>Full Name</label>
                                    <input type="text"  className="form-control" placeholder='Enter Full Name'/>
                                </div>
                                <div className='form-group'>
                                    <label className='mb-1'>Phone Number</label>
                                    <input type="text"  className="form-control" placeholder='Enter Full Name'/>
                                </div>
                                <div className='form-group'>
                                    <label className='mb-1'>Email Address</label>
                                    <input type="text"  className="form-control" placeholder='Enter Full Name'/>
                                </div>
                                <div className='form-group'>
                                    <label className='mb-1'>Message</label>
                                    <textarea rows="3" className="form-control" placeholder='Type your message...'></textarea>
                                </div>
                                <div className='form-group py-3'>
                                    <button type='button' className="btn btn-primary shadow w-100">Send Message</button>
                                </div>
                            </div>
                            <div className='col-md-6 border-start'>
                                <h6>Address Information</h6>
                                <hr/>
                                <div><p className='text-black mb-1'>#64, Joan Q Peru. Peru</p></div>
                                <div><p className='text-black mb-1'>+91 8888XXXX88</p></div>
                                <div><p className='text-black mb-1'>+91 8888XXXX88</p></div>
                                <div><p className='text-black mb-1'>email@doamin.com</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                
        </section>
    </div>
  )
}

export default Contactus