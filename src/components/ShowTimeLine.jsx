import React, { Component } from 'react';
import { connect } from "react-redux";
import { getTimeInMinutes } from './../utils/getTime';
import { setClockNow } from "./../store/reducer";
import './Components.css';

const TILE_MULTIPLIER  = 6;

class ShowTimeLine extends Component  {
    state={
        loading:true
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            5000
        );
    }
    componentWillUpdate() {
        if(this.state.loading){
            setTimeout(()=>{
                this.scrollToThepage('instant')
                this.setState({loading:false})
            },100)
        }
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.props.setClockNow()
    }

    scrollPosition = () => {
        const positionOfClockoffset = window.innerWidth /2;
        return  this.timeSinceMidnight() * TILE_MULTIPLIER - positionOfClockoffset + 50
    }

    scrollToThepage(behaviour){
        window.scrollTo({
            top: 0,
            left: this.scrollPosition(),
            behavior: behaviour
        });
    }

    timeSinceMidnight = () => getTimeInMinutes( new Date().setHours(0,0,0) , this.props.clock )

    render () {
        const positionOfClock =  this.timeSinceMidnight() * TILE_MULTIPLIER  + 'px'

        return (
            <div>
                <span className="clockLine" style={{left: positionOfClock}}/>
                <button className={'now'} onClick={()=>this.scrollToThepage('smooth')}>  NOW  </button>
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
const mapDispatchToProps = {
    setClockNow
};
const ShowTimeLineConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowTimeLine);

export default ShowTimeLineConnect;