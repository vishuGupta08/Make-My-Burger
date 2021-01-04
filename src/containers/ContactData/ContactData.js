
import Button from '../../components/UI/Button/Button'
import React, { Component } from 'react'
import classes from './ContactData.css'
class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            flatNumber: '',
            zipcode: '',
        }
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>
                    Enter Your Contact Details
</h4>
                <div className={classes.FormAlign}>
                    <form className={classes.Form} >

                        <input className={classes.Input} type="text" name="name" placeholder="Your Name" id="name"></input>
                        <input className={classes.Input} type="email" name="email" placeholder="Your Email Address" id="email"></input>
                        <input className={classes.Input} type="text" name="flatNumber" placeholder="Your Flat Number" id="add"></input>
                        <input className={classes.Input} type="text" name="zipcode" placeholder="Zip Code"></input>
                        <div> <Button btnType="Success" >Order</Button></div>
                    </form>
                </div>
            </div>

        )
    }


}

export default ContactData