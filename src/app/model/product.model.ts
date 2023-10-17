export interface Product {
  id : number
  name : string
  description : string
  price : number
}
export interface Cart {
  id: number
  articles : Product
  quantity : number
}
