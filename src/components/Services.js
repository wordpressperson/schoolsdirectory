import React, { Component } from 'react'
import Title from './Title'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FontAwesomeIcon icon={faGraduationCap} />,
                title: "Universities",
                info: "More than 150 accredited universities indexed"
            },
            {
                icon: <FontAwesomeIcon icon={faUserGraduate} />,
                title: "Polytechnics",
                info: "More than 100 accredited polytechnics indexed"
            },
            {
                icon: <FontAwesomeIcon icon={faAward} />,
                title: "Colleges of Education",
                info: "More than 50 accredited accredited colleges of education indexed"
            },
            {
                icon: <FontAwesomeIcon icon={faBookOpen} />,
                title: "Professional schools",
                info: "More than 20 accredited professional schools indexed"
            }

        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
