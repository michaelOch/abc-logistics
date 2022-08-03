import React from 'react';

function Register() {
    return (
        <section className='modal fade' id='signupForm' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal'></button>
                    </div>
                    <div className='modal-body'>
                        <div className='container'>
                            <h4 className='text-center'>Sign Up</h4>
                            <form className=''>
                                <div className='mb-3'>
                                    <input type='text' name='name' className='form-control' placeholder='Name' />
                                </div>
                                <div className='mb-3'>
                                    <input type='email' name='email' className='form-control' placeholder='Email' />
                                </div>
                                <div className='mb-3'>
                                    <input type='number' name='phoneNumber' className='form-control' placeholder='Phone Number' />
                                </div>
                                <div className='mb-3'>
                                    <select className='form-select'>
                                        <option defaultValue=''>What type of vehicle do you have?</option>
                                        <option value='1'>Motorcycle</option>
                                        <option value='2'>Bicycle</option>
                                        <option value='3'>Tricycle</option>
                                        <option value='4'>SUV</option>
                                    </select>
                                </div>
                                <div className=''>
                                    <button type='submit' className='btn btn-primary'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;