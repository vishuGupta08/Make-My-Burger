import React from 'react'
import classes from './Order.css'
import Logo from '../Logo/Logo'
import Burger from '../Burger/Burger'
const order = (props) => {

    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }

        )
    }


    const ingredientOutput = ingredients.map(ig => {
        return <span>
            {ig.name} ({ig.amount})
        </span>
    })

    return (
        <div className={classes.Order}>
            <div >
                <p className={classes.Data}>Ingredients:<strong>{ingredientOutput} </strong> </p>
                <p className={classes.Data}> Price: <strong>Rs. {props.price}</strong></p>
            </div>
            <div className={classes.Burger}>
                <Burger ingredients={props.ingredients} />
            </div>
            {/* <Logo /> */}
        </div >
    )

}

export default order