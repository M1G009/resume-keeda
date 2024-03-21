import React from 'react'
import Header from './Header'
import Footer from './footer';

const LandingLayout = ({ children }: {
    children: any;
}): React.JSX.Element => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default LandingLayout
