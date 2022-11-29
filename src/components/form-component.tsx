import React, { ButtonHTMLAttributes, MouseEvent } from 'react';
import Button from 'react-bootstrap/Button';
import { DATA } from "../db/dummby-db";

import TinyPizza from '../components/pizza'
import Checkout from '../components/checkout-element'

export class OrderForm extends React.Component {

    constructor(props: any) {
      super(props);
    }

    cartState = {
        order: {
                size: '',
                pizzaPrice: 0,
                side: '',
                sidePrice: 0,
            }
    }

    dataState = { data: DATA }
    checkoutState = { clicked: false}

    // addToOrder(element: MouseEvent<HTMLButtonElement>){
    //     const button = element.currentTarget;
    //     button.classList.toggle('selected')

    //     const orderItem: any = {
    //         pizzaOrder: {pizzaPrice: button.value, size: button.name}
    //     }
        
    //     this.orderObject.order.push(orderItem)
    
    //     console.log(this.orderObject.order)
    //     this.forceUpdate()

    // }
    
    addPizza(element: MouseEvent<HTMLButtonElement>) {

        const button = element.currentTarget;
        button.classList.toggle('selected')
        if (button.classList.contains('selected')){
            this.setState(() => {
                this.cartState.order.size = button.name
                this.cartState.order.pizzaPrice = Number(button.value)
            })
        } else {
            this.setState(() => {
                this.cartState.order.size = ''
                this.cartState.order.pizzaPrice = 0
            })
        }
        this.forceUpdate()
    }

    addSide(element: MouseEvent<HTMLButtonElement>) {
        const button = element.currentTarget;
        button.classList.toggle('selected')
        if (button.classList.contains('selected')){
            this.setState(() => {
                this.cartState.order.side = button.name
                this.cartState.order.sidePrice = Number(button.value)
            })
        } else {
            this.setState(() => {
                this.cartState.order.side = ''
                this.cartState.order.sidePrice = 0
            })
        }
        this.forceUpdate()
    }

    secondSide() {
        const sides = document.querySelectorAll('.side')
        sides.forEach(side => {
            if (!side.classList.contains('selected')){
            }
        })
    }

    handleClick () {
            this.setState(() => {
                    this.checkoutState.clicked = true
                })
    }

    checkout (element: MouseEvent<HTMLButtonElement>) {
        const checkoutButton = element.currentTarget;
        this.handleClick()
        this.forceUpdate()
    }
   
    render() {

        const { data } = this.dataState;

        return (
            <>
                <h1>ORDER A PIZZA</h1>
                {data.map((element) => {
                   if (element.type == 'pizza'){
                       return (
                        <Button id={element.name} data-getter='product-button' name={element.name} value={element.price} onClick = {(e) => this.addPizza(e)} variant="light">{element.name}</Button>
                       )
                    }
                })}

                <h1>CHOOSE A SIDE</h1>
                {data.map((element) => {
                   if (element.type == 'side'){
                       return (
                        <Button className={element.type} id={element.name} name={element.name} value={element.price} onClick = {(e) => this.addSide(e)} variant="light">{element.name}</Button>
                       )
                    }
                })}

                <Checkout orderData={this.cartState.order}/>

                <div>
                <Button id="checkout-button" onClick = {(e) => this.checkout(e)} variant="secondary">CHECKOUT</Button>{' '}
                </div>

                {this.checkoutState.clicked ? 
                <TinyPizza />
                : null }
    </>

);
}
}


