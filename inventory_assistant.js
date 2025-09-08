const itemName = "shirts";   
const unitCost = 3.25;
const currentStock = 120;
const reorderLevel = 80;          
const targetStock = 250;          
const weeklyDemand = 90;          
const supplierLeadTimeWeeks = 2;  


const weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
const stockDeficit = Math.max(0, targetStock - currentStock);

const reorderNow =
  currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

const reorderQuantity = reorderNow ? Math.ceil(stockDeficit) : 0;

const estimatedReorderCost = reorderQuantity * unitCost;


let weeksOfCoverDisplay;

if (Number.isFinite(weeksOfCover)) {
  weeksOfCoverDisplay = weeksOfCover.toFixed(2);
} else 
  weeksOfCoverDisplay = "∞";


console.log("Item:", itemName);
console.log("Weeks of Cover:", weeksOfCoverDisplay);
console.log("Reorder Now?:", reorderNow);
console.log("Recommended Reorder Quantity:", reorderQuantity);
console.log("Estimated Cost: $" + estimatedReorderCost.toFixed(2));
