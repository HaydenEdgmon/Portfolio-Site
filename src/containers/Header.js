import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {changeNav} from '../actions/NavActions'
import { connect } from 'react-redux'
import '../assets/style/Header.css'

var logo  = require('../assets/images/logo.png')
var twitter  = require('../assets/images/twitter.png')
var github  = require('../assets/images/github.png')

class Header extends Component {
    constructor(props){
        super(props)
        this.navigateTo = this.navigateTo.bind(this)
    }
    navigateTo = (page) =>
    {
        const {dispatch} = this.props
        dispatch(changeNav(page))
    }
    openLink = (place) => {
        this.navigateTo(place)
        if(place==="twitter"){
            window.open("https://twitter.com/haydenedgmon")
        }
        if(place==="github"){
            window.open("https://github.com/HaydenEdgmon")
        }
    }
    render() {
        const {NavReducer} = this.props
        console.log(NavReducer)
        return (
            <div className="navHead" >
                <Navbar collapseOnSelect expand="lg" variant="dark" className="navHead">
                    <Navbar.Brand href={"#" + NavReducer.currentPage.toLowerCase()} onClick={() => this.navigateTo("Home")}>
                        <img className="logoNavBar" src={logo} alt="H E"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href={"#" + NavReducer.currentPage.toLowerCase()} active={NavReducer.currentPage === "About"} onClick={() => this.navigateTo("About")}>
                                About
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href={"#" + NavReducer.currentPage.toLowerCase()} onClick={()=>this.openLink("github")}>
                                <img className="logoNavBar" src={github} alt="Github"/>
                            </Nav.Link>
                            <Nav.Link href={"#" + NavReducer.currentPage.toLowerCase()} onClick={()=>this.openLink("twitter")}>
                                <img className="logoNavBar" src={twitter} alt="Twitter"/>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { NavReducer } = state
    console.log(NavReducer)
    return {
        NavReducer
    }
}

export default connect(mapStateToProps)(Header);
