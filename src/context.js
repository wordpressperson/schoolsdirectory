import React, { Component } from 'react'
//import items from './data'
import Client from './Contentful'

/*
Client.getEntries({
    content_type: 'schoolsDirectory'
})
.then((response) => console.log(response.items))
.catch(console.error)
*/ 

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        schooltype: 'all',
        schoollocation: 'all',
        schoolfees: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 1900,
        maxSize: 0,
        medicine: false,
        law: false, 
        engineering: false,
        agriculture: false, 
    }

    //get data
    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: 'highereducation',
                order: 'sys.createdAt',
                //order: 'fields.price'
            })

            let rooms = this.formatData(response.items)
            let featuredRooms = rooms.filter(room => room.featured === true)
            let maxPrice= Math.max(...rooms.map(item => item.schoolfees))
            let maxSize= Math.max(...rooms.map(item => item.foundingyear))
    
            this.setState({
                rooms, 
                featuredRooms, 
                sortedRooms: rooms, 
                loading: false, 
                schoolfees: maxPrice,
                maxPrice,
                maxSize  
            })
        }

        catch(e) {
            console.log(e)
        }
    }
    componentDidMount() {
        this.getData()
        // let rooms = this.formatData(items)
        // let featuredRooms = rooms.filter(room => room.featured === true)
        // let maxPrice= Math.max(...rooms.map(item => item.price))
        // let maxSize= Math.max(...rooms.map(item => item.size))

        // this.setState({
        //     rooms, 
        //     featuredRooms, 
        //     sortedRooms: rooms, 
        //     loading: false, 
        //     price: maxPrice,
        //     maxPrice,
        //     maxSize  
        // })
    }

    formatData(items) {
        let tempItems = items.map( item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields, images, id}
            return room;
        })
        return tempItems; 
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms]
        const room = tempRooms.find(room => room.slug === slug)
        return room;
    }

    handleChange = (event) => {
        //const type=event.target.type
        const target=event.target
        const value=target.type === 'checkbox' ? target.checked : target.value
        const name=event.target.name
        
        
        console.log(name, value)

        this.setState({
            [name]: value
        }, this.filterRooms)
    }

    filterRooms = () => {
        let { rooms, schooltype, schoollocation, schoolfees, minSize, maxSize, medicine, law, engineering, agriculture } = this.state
        let tempRooms = [...rooms] //all the rooms
        //transform value
        //schoollocation = parseInt(schoollocation) 
        schoolfees = parseInt(schoolfees) 

        //filter by room type
        if (schooltype !== 'all') {
            tempRooms = tempRooms.filter(room => room.schooltype === schooltype)
        }

        //filter by location
        if (schoollocation !== 'all') {
            tempRooms = tempRooms.filter(room => room.schoollocation === schoollocation)
        }

        //filter by fees
        tempRooms = tempRooms.filter(room => room.schoolfees <= schoolfees)

        //filter by founding year
        tempRooms = tempRooms.filter(room => room.foundingyear >= minSize && room.foundingyear <= maxSize)

        //filter by medicine
        if (medicine) {
            tempRooms = tempRooms.filter(room => room.medicine === true)
        }

        
        //filter by law
        if (law) {
            tempRooms = tempRooms.filter(room => room.law === true)
        }

        //filter by engineering 
        if (engineering) {
            tempRooms = tempRooms.filter(room => room.engineering === true)
        }

          //filter by agriculture 
          if (agriculture) {
            tempRooms = tempRooms.filter(room => room.agriculture === true)
        }

        //update state
        this.setState({
            sortedRooms: tempRooms 
        })
        }


    render() {
        return (
            <div>
                <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange: this.handleChange}}>
                    {this.props.children}
                </RoomContext.Provider>
            </div>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}

export {RoomProvider, RoomConsumer, RoomContext} ;
