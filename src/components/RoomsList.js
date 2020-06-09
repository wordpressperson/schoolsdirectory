import React from 'react'
import Room from './Room'

function RoomsList({rooms}) {
    if (rooms.length === 0) {
        return (
            <div class-name="empty-search">
                <h3>Sorry, no school matches your search query</h3>
            </div>
        )           
    }
    return (
        <div>
            <section className="roomslist">
                <div className="roomslist-center">
                   { rooms.map(item => {
                       return <Room key={item.id} room={item} />
                   })}
                </div>
            </section>
        </div>
    )
}

export default RoomsList
