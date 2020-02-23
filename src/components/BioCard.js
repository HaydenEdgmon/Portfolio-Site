import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../assets/style/CentralHome.css';
import { Table } from 'react-bootstrap';

var picture = require('../assets/images/me.jpg')

class BioCard extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="picAndBioHome">
                <div className="quickLine">Fullstack developer, computational theory, and an eternal student</div>
                <img className="picOfMe" src={picture}/>
                <Table className="quickBio">
                    <tbody className="quickBioBody">
                        <tr className="quickBioName">
                            Hayden Edgmon
                        </tr>
                        <tr className="quickBioInfo">
                            Fullerton California
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
