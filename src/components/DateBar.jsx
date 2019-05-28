import React from 'react'
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DAYS = ['Sun', 'Mon', 'Tue','Wed','Thu','Fri','Sat']

class SideBar extends React.Component{

    render () {
        const getDay = (date) => DAYS[date.getDay()]
        const getDate = (date) => date.getDate() + '.' + date.getMonth()
        const nextDateInDays = (number) => new Date(new Date().getTime()+(number*24*60*60*1000));
        let days = 0, show = []
        while (days < 5) {
            show.push(
                <div key={days} className={`day ${days - 2 === 0 ? 'today' : ''}`}>
                    {getDay(nextDateInDays(days - 2))}
                    <p>
                        {getDate(nextDateInDays(days - 2))}
                    </p>
                </div>
            )
            days++
        }
        return (
            <div className="dateBar">
                <span className='starIcon'>
                    <FontAwesomeIcon icon="star" size="2x" color="#666"/>
                </span>
                <div className="days">
                    {show}
                </div>
            </div>
        )
    }

}

const mapStateToProps = ({main}) => {
    return {
        shows: main.shows
    }
};

const SideBarConnect = connect(
    mapStateToProps,
    null
)(SideBar);

export default SideBarConnect;