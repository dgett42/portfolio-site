//Step 2

let employeeObjects = [
    { name: "John", hourlyRate: 20, hoursWorked: 35 },
    { name: "Sarah", hourlyRate: 22, hoursWorked: 40 },
    { name: "Mike", hourlyRate: 18, hoursWorked: 30 },
    { name: "Emily", hourlyRate: 25, hoursWorked: 38 },
    { name: "David", hourlyRate: 19, hoursWorked: 32 }
];

// Step 3 

function calculateBasePay(rate, hours) {
    return rate * Math.min(hours, 40);
}

//Step 4

function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        return (hours - 40) * rate * 1.5;
    }
    return 0;
}

