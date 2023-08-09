import React from 'react';
import Header from '../header/header';
import MainPage from '../../pages/main-pages/main-pages';
import Footer from '../footer/footer';

function PageWrapper(){
    return(
       <div className='page-wrapper__main'>
        <Header />
        <MainPage />
        <Footer />
       </div>
    );
}

export default PageWrapper;