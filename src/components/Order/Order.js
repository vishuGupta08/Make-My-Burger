import React from 'react'
import classes from './Order.css'
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
        return <span style={{ textTransform: 'capitalize', border: '1px solid grey', margin: '3px', padding: '1px 2px' }} key={ig.name}>
            {ig.name}- {ig.amount}
        </span>
    })

    return (
        <div className={classes.Order}>
            <div >
                <p className={classes.Data}>Ingredients:<strong>{ingredientOutput} </strong> </p>
                <p className={classes.Data}> Price: <strong>Rs. {props.price}</strong></p>
            </div>
            <div className={classes.Burger} >
                <Burger ingredients={props.ingredients} />
            </div>

        </div >
    )

}

export default order