import React from "react";
import Header from "./header";
import Hero from "./hero";
import About from "./about";
import Resume from "./resume";
import Skills from "./skills";
import Project from "./project";

interface Theme1Props {
  data: {
    professionaldetail: any;
    users: any;
    personaldetail: any;
    educationsdetails: any;
    workexperiences: any;
    skills: any;
    projects: any;
  };
}

const Theme1: React.FC<Theme1Props> = ({ data }) => {
  return (
    <div>
      <Header />
      <Hero professionalDetail={data.professionaldetail} user={data.users} />
      <About
        personal={data.personaldetail}
        professionalDetail={data.professionaldetail}
        user={data.users}
      />
      <Resume
        educationdetail={data.educationsdetails}
        workexp={data.workexperiences}
      />
      <Skills skilldetail={data.skills} />
      <Project data={data.projects} />
    </div>
  );
};

export default Theme1;
