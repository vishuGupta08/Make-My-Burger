import React from 'react'
import classes from './Order.css'
import Logo from '../Logo/Logo'
const order = () => {
    return (
        <div className={classes.Order}>
            <div >
                <p className={classes.Data}>Ingredients: Salad(1) </p>
                <p className={classes.Data}> Price: <strong>Rs. 5</strong></p>
            </div>

            <Logo />

        </div >
    )

}

export default order