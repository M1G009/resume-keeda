import React from 'react'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Theme1 from '../../component/Themes/Theme1/Theme1';
import Theme2 from '../../component/Themes/Theme2/Theme2';
import Theme3 from '../../component/Themes/Theme3/Theme3';

const Index = ({ userData }) => {
  console.log("userData", userData);

  if (userData.theme == "65f41e0067724a8ce1ccd129") {
    return <Theme1 data={userData} />
  }
  else if (userData.theme == "65f41dd267724a8ce1ccd125") {
    return <Theme2 data={userData} />
  }
  else if (userData.theme == "65f7ff4d67724a8ce1ccd9c1") {
    return <Theme3 data={userData} />
  }

  return (
    <>
    </>
  )
}

export const getServerSideProps = (async (context) => {
  // console.log(context.params.slug);

  // Fetch data from external API
  const res = await fetch(`${process.env.API_BASE_URL}/api/v1/themeselect/${context?.params?.slug?.toString() || ""}`)
  const repo: any = await res.json()

  console.log(repo);
  // Pass data to the page via props
  return { props: { userData: repo.data } }
}) satisfies GetServerSideProps<{ userData: any }>


export default Index
