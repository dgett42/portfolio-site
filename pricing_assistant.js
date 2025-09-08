let productname = Shirts;

let costPerunit = 2.50;
let basePrice = 10.00; 
let discountRate = .25;
let salesTaxRate = 0.07;
let fixedMonthlyCosts = 2500;

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0; 

console.log("=== Product Pricing Assistant ===");
console.log("Product Name: " + productName);
console.log("Discounted Price (before tax): $" + discountedPrice.toFixed(2));
console.log("Final Price (with tax): $" + finalPriceWithTax.toFixed(2));
console.log("Profit Per Unit: $" + profitPerUnit.toFixed(2));
console.log("Break-Even Units: " + breakEvenUnits);
console.log("Profitable Per Unit: " + isProfitablePerUnit);