import React from 'react';

type Props = {
    orderData: any;
  };

export default class Checkout extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.state = {
          orderData: props,
          orderArray: props
        };
      }

    formatPrice(price: number){
        return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(price);
    }

    getTotal(){
        const total = this.props.orderData.sidePrice + this.props.orderData.pizzaPrice
        return this.formatPrice(total)
    }

    tuesdayOffer(){
        const dayOfWeekName = new Date().toLocaleString(
            'default', {weekday: 'long'}
            );

        if (dayOfWeekName == 'Tuesday'){
            return <h2>3 FOR 1 PIZZA TUESDAY!!!</h2>
        } else {
            return <h2>Don't miss our next 3 for 1 pizza tuesday!</h2> 
        }
    }

    render() {
       

        return (
            <>    
              <h1>Your Order</h1>
              <h2>Pizza : {this.props.orderData.size}</h2>
              <h2>Side : {this.props.orderData.side}</h2>
              <h2>Order Total : {this.getTotal()}</h2>
              {this.tuesdayOffer()}
            </>
)
}
}


