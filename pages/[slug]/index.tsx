import React from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Theme1 from "../../component/Themes/Theme1/Theme1";
import Theme2 from "../../component/Themes/Theme2/Theme2";
import Theme3 from "../../component/Themes/Theme3/Theme3";

const Index = ({ userData }) => {
  if (userData.theme?.index == 1) {
    return <Theme1 data={userData} />;
  } else if (userData.theme?.index == 2) {
    return <Theme2 data={userData} />;
  } else if (userData.theme?.index == 3) {
    return <Theme3 data={userData} />;
  } else {
    return <Theme1 data={userData} />;
  }

  return <></>;
};

export const getServerSideProps = (async (context) => {
  // Fetch data from external API
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/themeselect/${
      context?.params?.slug?.toString() || ""
    }`
  );
  const repo: any = await res.json();

  // Pass data to the page via props
  return { props: { userData: repo.data } };
}) satisfies GetServerSideProps<{ userData: any }>;

export default Index;
