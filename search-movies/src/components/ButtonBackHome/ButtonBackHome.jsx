import React from 'react'
import { Link } from 'react-router-dom'

const ButtonBackHome = () => {

    return (
        <Link
            to='/'
            className='button is-info'
        >Back to Home</Link>
    )
}

export default ButtonBackHome