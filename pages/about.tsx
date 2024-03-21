import LandingLayout from '../Layouts/Landing/LandingLayout'
import React from 'react'
import AboutPage from '../component/About/aboutPage'
import SeoContainer from '../component/SeoContainer/SeoContainer'

const About = () => {

  const data = {
    title: "RESUME is your ultimate career toolbox.",
    description: "Use professional field-tested resume templates that follow the exact 'resume rules' employers look for. Easy to use and done within minutes - try now for free!"
  }
  return (
    <SeoContainer data={data}>
      <LandingLayout>
        <AboutPage />
      </LandingLayout>
    </SeoContainer>
  )
}

export default About
