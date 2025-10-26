import HeroParent from '@/components/HeroComponents/HeroParent'
import React from 'react'

const Home = () => {
    return (
        // <div>
        //  <Hero /> 
        // </div>

        <div className="min-h-screen bg-linear-to-br from-white via-blue-50/30 to-purple-50/20 md:px-10">
            <HeroParent /> {/* Render the parent component */}
        </div>
    )
}

export default Home
