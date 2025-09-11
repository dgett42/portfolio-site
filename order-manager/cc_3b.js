let inventory = [
    { sku: "sku-001", name: "Hammer", price: 15.0, stock: 100 },
    { sku: "sku-002", name: "Nails (100)", price: 5.0, stock: 200 },
    { sku: "sku-003", name: "Screwdriver", price: 10.0, stock: 150 },
    { sku: "sku-004", name: "Wrench", price: 12.0, stock: 80 },
];

inventory.forEach(obj => console.log(`${obj.sku}\t|\t${obj.name}`));       
