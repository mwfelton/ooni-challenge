
export type ProductType = 'side' | 'pizza';

export interface Product {
    name: string;
    price: number;
    type: ProductType
  }
  
//   export function totalPrice(products: Product[]): number {
//     return products[0].price + products[1].price
//   }
  