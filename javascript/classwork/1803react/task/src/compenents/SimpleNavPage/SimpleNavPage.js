import React from 'react';
import Footer from "./Footer"
import HeadNav from "./HeadNav"

const SimpleNavPage = props =>{
    return(
        <>
        <HeadNav navItems ={props.navItems} />
        <MainContent pathItems={props} />
        <Footer/>
        </>
    )
}

