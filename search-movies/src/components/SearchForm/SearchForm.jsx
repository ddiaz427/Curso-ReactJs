import React, { useState } from 'react'
import { apiKey, url } from '../../utils/urls'

const SearchForm = ({onResults}) => {
    const [inputMovie, setInputMovie] = useState("")

    const handleChange = (e) => {
        setInputMovie(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${url}?apikey=${apiKey}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                const { Search = [] } = results
                onResults(Search)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input 
                        className="input" 
                        onChange={handleChange}
                        type="text" 
                        placeholder="Movie to search..." />
                </div>
                <div className="control">
                    <button className="button is-info">
                    Search
                    </button>
                </div>
            </div>
        </form>
)}

export default SearchForm;