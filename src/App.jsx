import React, { Component } from 'react';
import {fetchShowDetails} from "./store/reducer";
import {connect} from "react-redux";
import DailyShowPlans from './components/DailyShowPlans';
import Header from './components/Header';
import DateBar from './components/DateBar';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import ShowTimeLine from './components/ShowTimeLine';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser ,faSearch, faHome, faTv, faListAlt,faBookReader, faHistory, faStar } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faUser, faSearch, faHome, faTv, faListAlt, faBookReader,faHistory,faStar);

class App extends Component  {
    componentDidMount() {
        this.props.fetchShowDetails()
    }
    render () {
        return (
            <div className="App">
                <Header />
                <DateBar />
                <div className="mainContent">
                    <SideBar />
                    <div id="scroll"className="content">
                        <ShowTimeLine />
                        <div>
                            <DailyShowPlans />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = ({main}) => {
    return {
        shows: main.shows
    }
};
const mapDispatchToProps = {
    fetchShowDetails
};
const AppConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppConnect;