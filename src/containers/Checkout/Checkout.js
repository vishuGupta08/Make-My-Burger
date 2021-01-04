import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import ContactData from '../ContactData/ContactData'

class Checkout extends Component {
    state = {
        ingredients: {
            cheese: 1,
            salad: 1,
            bacon: 1,
            meat: 1
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {}
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1]
        }
        this.setState({ ingredients: ingredients })
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact')
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutContinued={this.checkoutContinuedHandler}
                    checkoutCancelled={this.checkoutCancelledHandler} />
                <Route path={this.props.match.path + '/contact'} component={ContactData} />
            </div>
        )
    }
}


export default Checkout