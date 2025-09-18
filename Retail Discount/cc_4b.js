let products = [
    { sku: "sku-1001", name: "Laptop", category: "Electronics", price: 1200, inventory: 30 },
    { sku: "sku-1002", name: "Smartphone", category: "Electronics", price: 800, inventory: 42 },
    { sku: "sku-1003", name: "Jeans", category: "Clothing", price: 50, inventory: 25 },
    { sku: "sku-1004", name: "T-Shirt", category: "Clothing", price: 20, inventory: 100 },
    { sku: "sku-1005", name: "Blender", category: "household", price: 150, inventory: 15 },
];

console.log("Before discounts:", products);

for (let product of products) {
    let discountRate = 0;
switch (product.category) {
    case "Electronics":
       discountRate = 0.20; // 20% discount
        break;
    case "Clothing":
        discountRate = 0.15; // 15% discount
        break;
    case "household":
        discountRate = 0.1; // 10% discount
        break;
    default:
        discountRate = 0;
} 
    let promoPrice = product.price * (1-discountRate);
    product.price = promoPrice;

}
console.log("After discounts:", products);

// Step 4 

let customerType = "student", ;
let subtotal = 230;
let discount = 0;

if (customerType === "student") {
    discount = 0.05; // 5% discount
} else {
    discount = 0;
}