import React from "react";
import "./Team.css"
import { teams } from "../../data";

const Team = () => {
    return(
        <section id="team">
            <div className="container">
                <h1 className="title">Our <span className="g-text">Team</span></h1>
                <h3 className="sub__title">Meet my diverse team of creative minds, developers, and strategists - the driving force behind every project's success.</h3>
                <div className="teams__container">
                    {
                        teams.map((team,index)=>(
                            <div className="team__card" key={index} >
                                <div className="profile__container">
                                    <img src={team.profile} alt={team.name} />
                                </div>
                                <div className="details">
                                    <h3 className="name"> {team.name} </h3>
                                    <p className="text__muted"> {team.title} </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Team;