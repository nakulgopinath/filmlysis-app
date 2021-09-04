import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HeaderImage() {
    const [imageArray, setImageArray] = useState([])
    useEffect(() => {
        axios.get('https://filmlysis-backend.herokuapp.com/headerimages/')
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
                <img src={url} className='headerimage' alt={'url'} />
            )}
        </div>


    )
}

export default HeaderImage
