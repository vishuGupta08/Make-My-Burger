import React from 'react'
import classes from './Menu.css'
const menu = (props) => {
    return (
        <div onClick={props.show} className={classes.Menu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
export default menu