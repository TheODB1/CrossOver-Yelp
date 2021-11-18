import React, { useEffect, useState } from 'react'
import axios from 'axios'


function DataFetching() {

    const[posts, usePosts] = useState([])

    useEffect(()=>{
        axios.get('https://yelp-mini-hackathon.herokuapp.com/restaurants')
        .then(res => {console.log(res)})
        .catch(err => {
            console.log(err)
        })
    })

    return (
        <div>
            
        </div>
    )
}



export default DataFetching

