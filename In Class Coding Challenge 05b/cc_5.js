// Esports Arena catalog (price per unit)
const products = [
  { id: 201, name: "Pro Mouse (wired)",   category: "gear",    price: 39.99 },
  { id: 202, name: "Team Jersey",         category: "apparel", price: 49.5  },
  { id: 203, name: "Energy Drink 6-pack", category: "snacks",  price: 12.0  },
  { id: 204, name: "Arena Day Pass",      category: "access",  price: 15.0  },
  { id: 205, name: "Switchable Keycaps",  category: "gear",    price: 19.0  }
];

// Example cart (product & quantity)
const cart = [
  { productId: 202, qty: 1 },
  { productId: 203, qty: 2 },
  { productId: 204, qty: 1 },
  { productId: 205, qty: 1 }
];

// Try: "regular", "student", "member", or "vip"
const customerType = "member";

// Task 1 
function getCategoryDiscount(category) {
    switch (category) {
        case"gear":
            return .1
            break
        case "apparel":
            return .15
            break
        case "snacks":
            return .08
            break 
        case "access": 
            return .05
            break
        default: 
            return 0
            break;

    }
}
console.log(getCategoryDiscount("gear"))
//Task 2 

function priceAfterCategoryDiscount(product) {
    let rate = getCategoryDiscount(product.category);
    return product.price * (1-rate);
}

console.log(priceAfterCategoryDiscount(products[0]))

//Task 3

function findProductById(id) {
    for (let p of products) {
        if (p.id === id) return p;
    }
    return null;
}

//Task 4 
function lineItemTotal(cartItem) {
    const product = findProductById(cartItem.productId);
    if (!product || cartItem.qty <= 0) return 0;
    const discountedUnitPrice = priceAfterCategoryDiscount(product);
    return cartItem.qty * discountedUnitPrice;
}

//Task 5
 function orderSubtotal(cart) {
    return cart.reduce((sum, item) => sum + lineItemTotal(item), 0);
 }

 //Task 6 
function customerAdjustmentRate(type) {
    switch (type) {
        case "student":
            return 0.03;
        case "member":
            return 0.05;
        case "vip":
            return 0.10;
        default:
            return 0;
    }
}

