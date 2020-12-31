import React, { Component } from 'react';
import Aux from '../../hoc/auxi'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    sideDrawerOpenedHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }

        })
    }
    render() {
        return (
            <Aux>
                <Toolbar view={this.sideDrawerOpenedHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <footer className={classes.Footer}><b>Made by <a href="https://www.linkedin.com/in/vishu-gupta108" target="_blank"
                    rel="noopener noreferrer">Vishu Gupta </a> &copy; </b></footer>
            </Aux>
        )
    }
}


export default Layout;