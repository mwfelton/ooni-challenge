import React from "react";
import { Dropdown } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { DATA } from "../db/dummby-db";

export class Form extends React.Component {

    constructor(props: any) {
      super(props);
    }

    cartState = {
        order: [
            {
                size: '',
                pizzaPrice: 0,
                side: '',
                sidePrice: 0
            }
        ]
    }
  
    egg () {
      console.log('yuss')
    }

    addPizza(size: string) {
        const pizza: any = {
            large: {pizzaPrice: 12.99, size: 'large'},
            small: {pizzaPrice: 8.99, size: 'small'},
            medium: {pizzaPrice: 10.99, size: 'medium'}
        }

        const newPizza = pizza[size];
        this.cartState.order.push(newPizza);
        console.log(this.cartState)
    }

    addSide(sideOrder: string) {
        const side: any = {
            dip: {sidePrice: 0.80, side: 'dip'},
            wedges: {sidePrice: 3.40, side: 'wedges'}
        }

        const newSide = side[sideOrder];
        this.cartState.order.push(newSide);
    }

    clickHandler () {
        console.log(this.cartState)
    }
  
    render() {
      return (
        <>
        <h1>ORDER A PIZZA</h1>

        <Button onClick = { () => this.addPizza('small') } variant="light">Small</Button>{' '}
        <Button onClick = { () => this.addPizza('medium') } variant="light">Medium</Button>{' '}
        <Button onClick = { () => this.addPizza('large') } variant="light">Large</Button>{' '}

      <h1>CHOOSE A SIDE</h1>
      <Button onClick = { () => this.addSide('wedges') } variant="secondary">CHIPS</Button>{' '}
      <Button onClick = { () => this.addSide('dip') } variant="secondary">Herb Garlic dip</Button>{' '}

      <h1>Checkout</h1>
      <Button onClick = { () => this.egg() } variant="secondary">Order Total</Button>{' '}
      </>
      );
    }
  }
