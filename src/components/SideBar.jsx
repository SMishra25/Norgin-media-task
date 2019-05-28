import React from 'react'
import {connect} from "react-redux";

class SideBar extends React.Component{

    showChannelLogo() {
        const {
            shows :{
                channels = []
            }
        } = this.props
        return channels.map((channel,i) => {
            return (
                <div key={i} className="channel-row list-row">
                    <img src={channel.images.logo} alt={channel.title}/>
                </div>
            )
        })

    }
    render () {
        return (
            <div className="sideBar">
                <div  className="blank list-row"/>
                {this.showChannelLogo()}
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