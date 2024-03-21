import React, { useEffect } from "react";
import LandingLayout from "../Layouts/Landing/LandingLayout";
import Landing from "../component/Landing/landing";
import SeoContainer from "../component/SeoContainer/SeoContainer";
import CustomHead from "../component/CustomHead/CustomHead";


export default function Home() {

  const data = {
    title: "Create A Resume Fast With Our Easy And Free Resume Builder",
    description: "Use professional field-tested resume templates that follow the exact 'resume rules' employers look for. Easy to use and done within minutes - try now for free!"
  }
  return (
    <>
      <CustomHead />
      <SeoContainer data={data}>
        <LandingLayout>
          <Landing />
        </LandingLayout>
      </SeoContainer>
    </>
  );
}
