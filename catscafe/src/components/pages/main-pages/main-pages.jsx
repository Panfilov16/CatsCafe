import React from 'react';
import About from '../../blocks/about/about';
import StarList from '../../blocks/starlist/starslist';

function MainPage({ stars }){
    return(
        <>
       <About />
       <StarList stars={stars}/>
       </>
    );
}
export default MainPage;