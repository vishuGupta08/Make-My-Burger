import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' }


]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Burger Price: <strong>Rs.{props.price}</strong></p>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}

                    removed={() => props.ingredientRemoved(ctrl.type)} />
            ))}
            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}
            >{props.isAuth ? 'Make My Burger' : 'Sign Up First'}</button>
        </div >
    )
}
export default buildControls