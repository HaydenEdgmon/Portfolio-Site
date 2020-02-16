import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {changeNav} from '../actions/NavActions'
import { connect } from 'react-redux'
import '../assets/Header.css'

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
    render() {
        const {NavReducer} = this.props
        console.log(NavReducer)
        return (
            <div className="siteHeader">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href={"#" + NavReducer.currentPage.toLowerCase()} onClick={() => this.navigateTo("Home")}>Hayden Edgmon</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href={"#" + NavReducer.currentPage.toLowerCase()} active={NavReducer.currentPage == "About"} onClick={() => this.navigateTo("About")}>About</Nav.Link>
                    
                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
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
