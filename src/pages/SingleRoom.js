import React, { Component } from 'react'
import defaultBgc from '../images/rooms2.jpg'
//import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {

    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBgc
        }
    }

    static contextType = RoomContext;
    //componentDidMount() {   }
    /*
        This code segment is useful if you want to seperate main image from other images using array destructuring
        const [mainImg, ...otherImg] = images
        replace images[0] with mainImg
        replace images.map with otherimages.map
    */

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug)
        
        if (!room) {
            return (<div className="error">
                <h3>no such school could be found</h3>
                <Link to='/schools' className="btn-primary">back to schools</Link>
            </div>)
        }
        const {schoolname, description, schoollocation, foundingyear, schoolfees, extras, medicine, law, engineering, agriculture, images} = room 

        return (
            <div>
                <StyledHero img={images[0] || defaultBgc}>
                    <Banner title={`${schoolname} `}>
                        <Link to='/schools' className='btn-primary'>back to schools</Link>
                    </Banner>
                </StyledHero>      
                <section className="single-room">
                    <div className="single-room-images">
                        {images.map((item, index) => {
                            return <img key={index} src={item} alt={schoolname} />
                        })}
                    </div>                     
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>avg fees: ₦{((schoolfees/1000000)<1) ? ((schoolfees/1000)+'k') : ((schoolfees/1000000)+'m')}</h6>
                            <h6>established: {foundingyear} </h6>
                            <h6>Geopolitical zone: {schoollocation}</h6>
                            <h6>{medicine ? "medical faculty exists" : "no medicine faculty"}</h6>
                            <h6>{law ? "law faculty exists" : "no law faculty"}</h6>
                            <h6>{engineering ? "engineering college exists" : "no engineering courses"}</h6>
                            <h6>{agriculture && "agriculture course are available"}</h6>
                        </article>
                    </div>                 
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </div>
        )
    }
}
