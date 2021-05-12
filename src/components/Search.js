import React from 'react'

function Search ({ handleInput, search }) {
    return (
        <div>
            <section className='searchbox-wrap'>
                <input 
                    onChange={handleInput} 
                    onKeyPress={search}
                    className='searchbox' 
                    type='text' 
                    placeholder='Search Your Movie'
                />
            </section>
        </div>
    )
}

export default Search
