// Step 2: Create an array of products 
let products = [
    { name: "Laptop", category: "electronics", price: 999.99, inventory: 10 },
    { name: "Smartphone", category: "electronics", price: 699.99, inventory: 25 },
    { name: "Desk Chair", category: "household", price: 89.99, inventory: 15 },
    { name: "Bookcase", category: "household", price: 129.99, inventory: 5 },
    { name: "Shirts", category: "apparel", price: 19.99, inventory: 130 },
]; 

// Step 3: loops through the array and applies discounts based on category

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

// Step 4: Create Variable for customer type and subtotal, then apply additional discounts

let customerType = "student"; ;
let subtotal = 230;
let discount = 0;

if (customerType === "student") {
    discount = 0.05; // 5% discount
} else if (customerType === "senior") {
    discount = 0.07; // 7% discount
} else {
    discount = 0;     // No discount
}

let total = subtotal * (1 - discount);
console.log(`Subtotal before discount: $${subtotal.toFixed(2)}`);
console.log(`The total after a ${discount*100}% discount for a ${customerType} is $${total.toFixed(2)}`);



