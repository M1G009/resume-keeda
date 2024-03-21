import React from 'react'
import LandingLayout from '../Layouts/Landing/LandingLayout'
import ContactPage from '../component/Contact/contactPage'
import SeoContainer from '../component/SeoContainer/SeoContainer'

const Contact = () => {
    const data = {
        title: "Have Some Question",
        description: "Thank you for your interest in our services. Please fill out the form below or email us at sprins1353@gmail.com and we will get back to you promptly regarding your request."
    }
    return (
        <SeoContainer data={data}>
            <LandingLayout>
                <ContactPage />
            </LandingLayout>
        </SeoContainer>
    )
}

export default Contact
