import React from 'react'
import ButtonBackHome from '../components/ButtonBackHome/ButtonBackHome'
import Title from '../components/Title/Title'

const NotFound = () => {
    return (
        <div>
            <Title>Error 404</Title>
            <h2>Page Not Found</h2>
            <ButtonBackHome />
        </div>
    )
}

export default NotFound