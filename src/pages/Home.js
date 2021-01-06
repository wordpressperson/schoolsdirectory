import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

const Home = () => {
    return (
        <div>
            <Hero>
                <Banner title="Higher institutions directory" subtitle="...informing you of your choice schools" >
                  <Link to='/schools' className="btn-primary">View accredited schools</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </div>
    )
}

export default Home
