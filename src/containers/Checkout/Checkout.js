import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route, Redirect } from 'react-router-dom'
import ContactData from '../ContactData/ContactData'
import { connect } from 'react-redux'

class Checkout extends Component {
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact')
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    render() {
        let summary = <Redirect to="/" />

        if (this.props.ings) {
            console.log(this.props.purchased)
            const purchasedRedirect = this.props.purchased ? <Redirect to="/orders" /> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        checkoutContinued={this.checkoutContinuedHandler}
                        checkoutCancelled={this.checkoutCancelledHandler} />
                    <Route
                        path={this.props.match.path + '/contact'}
                        component={ContactData} />
                </div>
            )
        }

        return summary

    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}




export default connect(mapStateToProps)(Checkout)