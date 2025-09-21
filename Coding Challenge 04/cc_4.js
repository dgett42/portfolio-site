// Step 1: Create an array of product 
let products = [
    { name: "Laptop", category: "electronics", price: 999.99, inventory: 10 },
    { name: "Smartphone", category: "electronics", price: 699.99, inventory: 25 },
    { name: "Desk Chair", category: "household", price: 89.99, inventory: 15 },
    { name: "Bookcase", category: "household", price: 129.99, inventory: 5 },
    { name: "Shirts", category: "apparel", price: 19.99, inventory: 130 },
]; 

for (let product of products) {
    let discountRate = 0;

switch (product.category) {
    case "electronics":
       discountRate = 0.20; // 20% discount
        break;
    case "apparel":
        discountRate = 0.15; // 15% discount
        break;
    case "household":
        discountRate = 0.1; // 10% discount
        break;
    default:
        discountRate = 0;
} 
    let promoPrice = product.price * (1-discountRate);
    console.log(`The promotional price for the ${product.name} is $${promoPrice.toFixed(2)}`);

}