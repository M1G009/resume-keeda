import React from "react";
import Header from "./header";
import Hero from "./hero";
import About from "./about";
import Project from "./project";
import Contact from "./contact";

const Theme3 = ({ data }: any) => {
  return (
    <div>
      <Header professional={data.professionaldetail} />
      <Hero
        professional={data.professionaldetail}
        user={data.users}
        personal={data.personaldetail}
      />
      <About
        user={data.users}
        professional={data.professionaldetail}
        personal={data.personaldetail}
        educationdetail={data.educationsdetails}
        workexp={data.workexperiences}
        skilldetail={data.skills}
      />
      <Project data={data.projects} />
      <Contact user={data.users} personal={data.personaldetail} />
    </div>
  );
};

export default Theme3;
