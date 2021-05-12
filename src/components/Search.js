import React from 'react'

function Search ({ handleInput }) {
    return (
        <div>
            <section className='searchbox-wrap'>
                <input 
                    onChange={handleInput} 
                    className='searchbox' 
                    type='text' 
                    placeholder='Search Your Movie'
                />
            </section>
        </div>
    )
}

export default Search
