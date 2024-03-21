import React from 'react'
import Header from './header'
import About from './about';
import Skills from './skills';
import Education from './education';
import Experience from './experience';
import Projects from './projects';
import Hero from './hero';


const Theme2 = ({ data }: any) => {

  return (
    <div>
      <Header />
      <Hero professional={data.professionaldetail} />
      <About
        personal={data.personaldetail}
        professionalDetail={data.professionaldetail}
        user={data.users} />
      <Education educationdetail={data.educationsdetails} />
      <Skills skilldetail={data.skills} />
      <Experience workexp={data.workexperiences} />
      <Projects data={data.projects} />

    </div>
  )
}

export default Theme2;
