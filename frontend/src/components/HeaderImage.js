import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HeaderImage() {
    const [imageArray, setImageArray] = useState([])
    const [name, setName] = useState('')
    useEffect(() => {
        setName("Nakul")
        axios.get('http://localhost:8080/headerimages/')
            .then(response => {
                setImageArray(response.data.secureUrls)
                console.log(response)
            })
            .catch(error => {
                console.log('error block', error)
            })
    }, [])
    return (
        // 
        <div className='headerimagecontainer'>
            {imageArray.map(url =>
                <img src={url} className='headerimage' />
            )}
        </div>


    )
}

export default HeaderImage
