import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../Assets/header-bg.jpg';

import Services from '../Common/Services';
import Portofolio from '../Common/Portofolio';
import About from '../Pages/About';
import Team from '../Common/Team';


class Home extends Component{
    render(){
        return(
            <div>
               <Header
                    title ="Welcome to GerShop"
                    subtitle = "Happy Shopping!"
                    buttonText="Show Me More"
                    link = "/about"
                    showButton = {true}
                    image={image}
               />

               <Services               
               />
               <Portofolio/>
               <About/>
               <Team/>
            </div> 
            )
            
        
    }
}

export default Home;