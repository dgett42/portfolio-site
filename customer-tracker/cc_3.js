let customers = [
    {name: "John", email: "Johndoe23@gmail.com", purchases: ["Bannanas", "apples", "oranges"]},
    {name: "Sarah", email: "sarahJane@gmail.com", purchases: ["pasta", "rice", "carrots"]},
    {name: "Malik", email: "maliktheman@gmail.com", purchases: ["pizza", "Oreos", "chicken"]}
] 

console.log(customers)

// step 3

customers.push({name: "sophia", email: "sophie22@usf.edu", purchases: ["flour", "sugar", "baking powder"]}) 

console.log(customers)

customers.shift()

console.log(customers)

//step 4 
customers[1].purchases.push("Ketchup");

console.log(customers);

// Step 5 
customers.forEach(customer => {console.log(`Name: ${customer.name}, Email: ${customer.email}, Total Purchases: ${customer.purchases.length}`)})