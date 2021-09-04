import React, { Fragment } from 'react'
import Categories from './Categories'
import Footer from './Footer'
import HeaderImage from './HeaderImage'
import Navbar from './Navbar'
import RecentPosts from './RecentPosts'

function Home() {
    return (
        <Fragment>
            <HeaderImage />
            <Navbar />
            <RecentPosts />
            <Categories />
            <Footer />
        </Fragment>
    )
}

export default Home
