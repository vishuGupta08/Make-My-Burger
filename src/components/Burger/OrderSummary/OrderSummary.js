import React from 'react'
import Aux from '../../../hoc/auxi'
import Button from '../../UI/Button/Button'
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            )
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>
                Delicious Burger With Following Ingredients
    </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: Rs.{props.price}</strong></p>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>Cancel</Button>
        </Aux>
    )
}
export default orderSummary