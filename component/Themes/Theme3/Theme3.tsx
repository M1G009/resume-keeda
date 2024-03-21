import React from 'react'
import Header from './header'
import Hero from './hero'
import About from './about'
import Project from './project'
import Contact from './contact'


const Theme3 = ({ data }: any) => {

  console.log("data-->", data);

  return (
    <div>

      <Header professional={data.professionaldetail} />
      <Hero
        professional={data.professionaldetail}
        user={data.users}
        personal={data.personaldetail} />
      <About
        user={data.users}
        professional={data.professionaldetail}
        personal={data.personaldetail}
        educationdetail={data.educationsdetails}
        workexp={data.workexperiences}
        skilldetail={data.skills} />
      <Project data={data.projects} />
      <Contact
        user={data.users}
        personal={data.personaldetail} />

    </div>
  )
}

export default Theme3

// export async function getServerSideProps() {
//   try {
//     const response = await axios.get('http://localhost:5500');
//     const categoryData = response.data || [];
//     console.log(categoryData);

//     return { props: { categoryData } };
//   } catch (error) {
//     return { props: { categoryData: [] } };
//   }
// }
