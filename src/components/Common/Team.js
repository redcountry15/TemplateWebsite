import React, {Component} from 'react';

import image1 from '../Assets/Team/1.jpg';
import image2 from '../Assets/Team/2.jpg';
import image3 from '../Assets/Team/3.jpg';

import TeamItem from './TeamItem';

const team = [
    {name:'Kay Garland', position:'Lead Designer', image:image1},
    {name:'Kay Garland', position:'Larry Parker', image:image2},
    {name:'Kay Garland', position:'Diana Petersen', image:image3}
]

class Team extends Component {


    render(){
        return(
            <div>
                 <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                    {team.map((item,index) => {
                        return <TeamItem {...item} key={index} />
                    })
                    }
                   
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
            </div>
        )
    }

}

export default Team;