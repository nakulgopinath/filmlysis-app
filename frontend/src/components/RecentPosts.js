import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function RecentPosts() {
    const [recentPosts, setRecentPosts] = useState([])
    useEffect(() => {
        axios.get('https://filmlysis-backend.herokuapp.com/recentposts/')
            .then(response => {
                setRecentPosts(response.data.result)
                console.log(response)
            })
            .catch(error => {
                console.log('error block', error)
            })
    }, [])
    // const category = ['The Classics', 'Form & Style', 'Behind The Scenes']
    return (
        <div className="recentpostscontainer">
            {recentPosts.map((post) =>
                <div className="recentpostscard">
                    <div className='recentpostscategorylabel'>{post.category}</div>
                    <img className="image" src={post.image_url} alt={'url'} />
                    <div className="text">
                        <h2 className='recentpostsheader'>{post.post_name}</h2>
                        <h5 className='recentpostsdate'>{post.date}</h5>
                        <p className='recentpostdescription'>{post.post_description.substring(0, 150) + '...'}</p>
                        <Link className='recentpostreadfullpostlink'>Read More</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default RecentPosts
