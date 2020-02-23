import React, { Component } from 'react';
import { connect } from 'react-redux'
import {changeReducerText} from '../actions/MainActions'
import ReactPageScroller from 'react-page-scroller'
import '../assets/style/CentralHome.css';
import { Table } from 'react-bootstrap';
import BioCard from './BioCard'

var picture = require('../assets/images/me.jpg')

class CentralHome extends Component {
    constructor(props){
        super(props)
        this.goToPage = this.goToPage.bind(this)
    }
    goToPage = (pageNumber) => {
        this.reactPageScroller.goToPage(pageNumber);
    }
    render() {
        const {MainReducer} = this.props
        return (
            <div className="centralDiv">
                <ReactPageScroller  ref={c => this.reactPageScroller = c} containerWidth="100%" animationTimer={800}>
                    <BioCard/>
                    <img className="picOfMe" src={picture}/>
                </ReactPageScroller>
            </div>
        );
  }
}

function mapStateToProps(state) {
    const { MainReducer } = state
    return {
        MainReducer
    }
}

export default connect(mapStateToProps)(CentralHome)
