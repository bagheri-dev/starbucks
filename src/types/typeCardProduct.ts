export interface ICardProduct {
    name: string,
    img: string,
    price: number,
    quantity: number,
    updateQuantity: (newQuantity: number) => void; // تعریف نوع برای تابع
}