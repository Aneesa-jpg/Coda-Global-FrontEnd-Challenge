import React from 'react'
import './search.styles.css'


export const Search = () => {
    return (
        <div className='search'>
           <img className='icon' src="https://img.icons8.com/metro/26/000000/search.png" alt='searchIcon'/>
           <input type='text' placeholder='Search your favorite recipes...' />
        </div>
    )
}
