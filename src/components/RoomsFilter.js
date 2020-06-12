import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'

const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))]

}

function RoomsFilter({rooms}) {
    const context=useContext(RoomContext)
    const {
        handleChange, schooltype, schoollocation, schoolfees, minPrice, maxPrice, minSize, maxSize, medicine, law, engineering, agriculture
    } = context;

    //unique types
    let schooltypes=getUnique(rooms, 'schooltype')
    schooltypes = ['all', ...schooltypes]
    schooltypes = schooltypes.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
    })

    let location = getUnique(rooms, 'schoollocation')
    location = ['all', ...location]
    location = location.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    
    return (
        <div>
            <section className="filter-container">
                <Title title="Higher Institutions" />
                <form className="filter-form">
                    {/*room type*/}
                    <div className="form-group">
                        <label htmlFor="schooltype">school type</label>
                        <select name="schooltype" id="schooltype" value={schooltype} className="form-control" onChange={handleChange}>{schooltypes}</select>
                    </div>
                    {/*guests type*/}
                    <div className="form-group">
                        <label htmlFor="schoollocation">Location (GPZ)</label>
                        <select name="schoollocation" id="schoollocation" value={schoollocation} className="form-control" onChange={handleChange}>{location}</select>
                    </div>
                    {/* price type */}
                    <div className="form-group">
                        <label htmlFor="price">
                            Avg fees ₦{schoolfees}
                        </label>
                        <input className="form-control" type="range" name="price" min={minPrice} max={maxPrice} id="price" value={schoolfees} onChange={handleChange} />
                    </div>
                   {/* size type */}
                   <div className="form-group">
                       <label htmlFor="size">foundation range</label>
                       <div className="size-inputs">
                           <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                           <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                       </div>
                   </div>
                   {/* extras */}
                   <div className="form-group">
                       <div className="single-extra">
                           <input type="checkbox" name="medicine" id="medicine" checked={medicine} onChange={handleChange} />
                           <label htmlFor="medicine">medicine</label>
                       </div>
                       <div className="single-extra">
                           <input type="checkbox" name="law" id="law" checked={law} onChange={handleChange} />
                           <label htmlFor="law">law</label>
                       </div>
                       <div className="single-extra">
                           <input type="checkbox" name="engineering" id="engineering" checked={engineering} onChange={handleChange} />
                           <label htmlFor="engineering">engineering</label>
                       </div>
                       <div className="single-extra">
                           <input type="checkbox" name="agriculture" id="agriculture" checked={agriculture} onChange={handleChange} />
                           <label htmlFor="agriculture">agriculture</label>
                       </div>
                   </div>
                </form>
            </section>
        </div>
    )
}

export default RoomsFilter
