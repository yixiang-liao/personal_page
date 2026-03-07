import React from 'react'
import Home from '../layouts/Home'
import About from '../layouts/About'
import Project from '../layouts/Project'
import BackToTopButton from '../components/BackToTopButton'

const HomePage = () => {
  return (
    <div>
        <Home />
        <About />
        <Project />
        <BackToTopButton />
    </div>
  )
}

export default HomePage
