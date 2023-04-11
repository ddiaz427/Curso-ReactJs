import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";
import ButtonBackHome from '../components/ButtonBackHome/ButtonBackHome';

import { apiKey, url } from '../utils/urls'

const Detail = () => {

    const { id } = useParams()

    const [movie, setMovie] = useState({})

    const fetchMovie = ({ id }) => {
      fetch(`${url}?apikey=${apiKey}&i=${id}`)
      .then(res => res.json())
      .then(movie => {
        setMovie(movie)
      })
    }

    useEffect(() => {
      fetchMovie({ id })
    })

    const { Title, Poster, Actors, Metascore, Plot } = movie
    return (
        <div>
            <ButtonBackHome />
            <h1>{Title}</h1>
            <img src={Poster} alt={Title} />
            <h3>{Actors}</h3>
            <span>{Metascore}</span>
            <p>{Plot}</p>
        </div>
    )
}

Detail.propTypes = {
    id: PropTypes.string
}

export default Detail