import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../assets/style/CentralHome.css';
import { Table } from 'react-bootstrap';

var picture = require('../assets/images/me.jpg')

class BioCard extends Component {
    render() {
        return (
            <div className="picAndBioHome">
                <div className="quickLine">Fullstack developer, computational theory, and an eternal student</div>
                <img className="picOfMe" src={picture} alt="The pic of me seems to not be loading right now"/>
                <Table className="quickBio">
                    <tbody className="quickBioBody">
                        <tr className="quickBioName">
                           Hi, I'm Hayden
                        </tr>
                        <tr className="quickBioInfo">
                            I'm a sofware engineer currnetly in southern California, I have worked professionally on APIs, monolithic and distributed systems, web application development, and embedded systems. My natural curiosity and process oriented learning make me an intrinsic developer. 
                        </tr>
                    </tbody>
                </Table>
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

export default connect(mapStateToProps)(BioCard)
