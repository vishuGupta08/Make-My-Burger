
import Button from '../../components/UI/Button/Button'
import React, { Component } from 'react'
import classes from './ContactData.css'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../../hoc/auxi'
import img from '../../../../burger/src/assets/images/5aa78e207603fc558cffbf19.png'

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            flatNumber: '',
            zipcode: '',
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'VIshu Gupta',
                address: 'B-180 Sai Baba APartment',
                zipcode: '110085',
                country: 'India',
                contact: '8920673899',
                email: 'vishu.gupta.dtu@gmail.com'
            },
            loading: false
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false })
                this.props.history.push('/orders')
            })
            .catch(error => {
                this.setState({ loading: false })
            })

    }

    render() {

        let form = (<form className={classes.Form} >
            <input className={classes.Input} type="text" name="name" placeholder="Your Name" id="name"></input>
            <input className={classes.Input} type="email" name="email" placeholder="Your Email Address" id="email"></input>
            <input className={classes.Input} type="text" name="flatNumber" placeholder="Your Flat Number" id="add"></input>
            <input className={classes.Input} type="text" name="zipcode" placeholder="Zip Code"></input>
            <div> <Button btnType="Success" clicked={this.orderHandler} >Order</Button></div>
        </form>);
        if (this.state.loading) {
            form = (
                <Aux>
                    <Spinner />
                    <Modal show> Order Placed Successfully!
                    <div >
                            <img src={img} />
                        </div>
                    </Modal>
                </Aux>
            )
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Details</h4>
                <div className={classes.FormAlign}>
                    {form}
                </div>
            </div>

        )
    }


}

export default ContactData