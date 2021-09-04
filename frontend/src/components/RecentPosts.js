import React, { useEffect, useState } from 'react'
import axios from 'axios'

function RecentPosts() {
    const [recentPostsImages, setRecentPostsImages] = useState([])
    useEffect(() => {
        axios.get('https://filmlysis-backend.herokuapp.com/recentposts/')
            .then(response => {
                setRecentPostsImages(response.data.secureUrls)
                console.log(response)
            })
            .catch(error => {
                console.log('error block', error)
            })
    }, [])
    const category = ['The Classics', 'Form & Style', 'Behind The Scenes']
    return (
        <div className="recentpostscontainer">
            {recentPostsImages.map((url, index) =>
                <div className="recentpostscard">
                    <div className='recentpostscategorylabel'>{category[index]}</div>
                    <img className="image" src={url} alt={'url'} />
                    <div className="text"></div>
                </div>
            )}
        </div>
    )
}

export default RecentPosts
