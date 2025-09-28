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

//Step 5 

function calculateTaxes(grossPay) {
    return grossPay * 0.15;
}

//Step 6 

function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes;

    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };
}