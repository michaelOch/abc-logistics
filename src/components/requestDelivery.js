import React from 'react';

function RequestDelivery() {
    return (
        <section className='modal fade' id='requestDeliveryForm' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1'>
            <div className='modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal'></button>
                    </div>
                    <div className='modal-body'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-7'>
                                    <div className=''></div>
                                </div>
                                <div className='col-md-5'>
                                    <div className=''>
                                        <h4 className='text-center'>Delivery Request</h4>
                                        <form className=''>
                                            <div className='mb-3'>
                                                <div className='input-group'>
                                                    <input type='text' className={`form-control`} placeholder='Enter pickup location' />
                                                    <span className={`input-group-text`}>
                                                            <button type='button' className=''>SEND</button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='mb-3'>
                                                <div className='input-group'>
                                                    <input type='text' className={`form-control`} placeholder='Enter pickup location' />
                                                    <span className={`input-group-text`}>
                                                            <button type='button' className=''>SEND</button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='form-check mb-3'>
                                                <input type='checkbox' name='express' className='form-check-input' value='' id='express' />
                                                <label className='form-check-label' htmlFor='express'>Express</label>
                                            </div>
                                            <div className='mb-3'>
                                                <p className='mb-0'>
                                                    What packaging can comfortably contain your items?
                                                </p>
                                            </div>
                                            <div className='mb-3'>
                                                <select className='form-select'>
                                                    <option value='1'>Small Envelope</option>
                                                    <option value='2'>A4 Envelope</option>
                                                    <option value='3'>Shoe Box</option>
                                                    <option value='4'>Bagco Bag</option>
                                                    <option value='5'>Boot of a Car</option>
                                                    <option value='6'>A Van</option>
                                                    <option value='7'>Small Ghana-must-go Bag</option>
                                                    <option value='8'>Big Ghana-must-go Bag</option>
                                                </select>
                                            </div>
                                            <div className=''>
                                                <button type='submit' className='btn btn-primary'>Request Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RequestDelivery;