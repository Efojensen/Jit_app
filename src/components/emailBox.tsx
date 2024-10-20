import React from 'react'
import './styles.css';

const EmailBox = () => {
    return (
        <form className='input'>
            <input type='input' placeholder='youremail@example.com' className='emailBox'/>
            <button className='sendEmail'>Notify me</button>
        </form>
    )
}

export default EmailBox