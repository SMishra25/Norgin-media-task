import React, { Component } from 'react';
import {connect} from "react-redux";
import './Components.css';

// Utils
import {getTimeInMinutes, getShowTime} from './../utils/getTime'

const TILE_MULTIPLIER  = 6

class DailyShowPlans extends Component  {
    show24HourList (schedules=[]) {
        let isActiveNow = -1;
        return schedules.map((schedule,i) => {
            const showDuration = getTimeInMinutes(schedule.start,schedule.end)
            const timeLeftFromNow = getTimeInMinutes(this.props.clock,schedule.end)
            const showTime = getShowTime(schedule.start,schedule.end)

            if (isActiveNow !==0 && isActiveNow === -1) {
                isActiveNow = timeLeftFromNow >= 0 ? 1 : -1
            } else {
                isActiveNow = 0
            }

            const tileWidth = showDuration * TILE_MULTIPLIER + 'px'

            return (
                <div
                    key={i}
                    data-starttime={schedule.start}
                    data-endtime={schedule.end}
                    className={isActiveNow === 1 ? 'tile active ': 'tile'}
                    style={{minWidth: tileWidth}}
                >
                    <p className="show-name">
                        {schedule.title}
                    </p>
                    <p className="show-time">
                        {showTime}
                    </p> 
                </div>
            )
        })
    }

    fixTheBlankEnds(schedules=[]){
        const remainingHours = 24 * 60 - getTimeInMinutes(new Date().setHours(0,0,0), schedules[schedules.length - 1].end)
        if(remainingHours > 0) {
            return (
                <div className={'tile empty'} style={{minWidth: remainingHours * TILE_MULTIPLIER + 'px'}}>
                    <p>
                       TBD
                    </p>
                </div>
            )
        }
    }
    
    showAllChannelLists() {
        const {
            shows :{
                channels = []
            }
        } = this.props
        return channels.map((channel,i) => {
            return (
                <div key={i} className="channel-show list-row">
                    {this.show24HourList(channel.schedules)}
                    {this.fixTheBlankEnds(channel.schedules)}
                </div>
            )
        })
    }

    showTimePanel () {
        let timeInHours = 0, returnValue = []
        const tileWidth = 60 * TILE_MULTIPLIER + 'px'
        const formatTime = (hour ) => hour < 10 ? '0' + hour + ':00' : hour + ':00'
        while(timeInHours < 24) {
            returnValue.push(
                <div key={timeInHours} className="tile" style={{minWidth: tileWidth}}>
                    {timeInHours >= 0 &&
                        <div>
                            <span/>
                            <p>{formatTime(timeInHours)}</p>
                        </div>
                    }
                </div>
            )
            timeInHours ++
        }
        return (
            <div className="channel-show timeline list-row">
                {returnValue}
            </div>
        )
    }

    render () {
        return (
            <div className="showDailyDetails">
                <div className="list-view">
                    {this.showTimePanel()}
                    {this.showAllChannelLists()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({main}) => {
    return {
        shows: main.shows,
        clock: main.clock
    }
};

const DailyShowPlansConnect = connect(
    mapStateToProps,
    null
)(DailyShowPlans);

export default DailyShowPlansConnect;