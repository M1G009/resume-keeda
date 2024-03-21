import { NextSeo } from 'next-seo';
import React from 'react'



const SeoContainer = ({ children, data }: any) => {
  return (
    <>
      <NextSeo
        title={data.title}
        description={data.description}
        canonical={data.canonical}
        openGraph={{
          url: data?.canonical,
          title: data?.title,
          description: data?.description,
          images: [
            {
              url: data?.image,
              // add
              height:1200,
              width:630,
              // 
              alt:data?.title

            }
          ]
        }}
        additionalMetaTags={[
          {property:'author',content:'Resume Keeda'},
          {property:'copyright',content:'Resume Keeda'}
        ]}
        defaultTitle='Resume Keeda'
      />
      {children}
    </>
  )
}

export default SeoContainer
