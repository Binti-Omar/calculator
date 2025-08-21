document.getElementById("tax_form").addEventListener("submit", function (event) {
    event.preventDefault()


    let basic_salary = Number(document.getElementById("basic_salary").value)
    let allowances = Number(document.getElementById("allowances").value)

    // calculate gross salary
    function calculate_grossSalary(basic_salary, allowances) {
        return basic_salary + allowances
    }
    let gross_salary = calculate_grossSalary(basic_salary, allowances)
    document.getElementById("gross").innerHTML = gross_salary

    // calculate nhif
    function calculateNHIF(gross_salary) {
        let nhifContribution = 0

        if (gross_salary < 6000) {
            nhifContribution = 150
        } else if (gross_salary < 8000) {
            nhifContribution = 300
        } else if (gross_salary < 12000) {
            nhifContribution = 400
        } else if (gross_salary < 15000) {
            nhifContribution = 500
        } else if (gross_salary < 20000) {
            nhifContribution = 600
        } else if (gross_salary < 25000) {
            nhifContribution = 750
        } else if (gross_salary < 30000) {
            nhifContribution = 850
        } else if (gross_salary < 35000) {
            nhifContribution = 900
        } else if (gross_salary < 40000) {
            nhifContribution = 950
        } else if (gross_salary < 45000) {
            nhifContribution = 1000
        } else if (gross_salary < 50000) {
            nhifContribution = 1100
        } else if (gross_salary < 60000) {
            nhifContribution = 1200
        } else if (gross_salary < 70000) {
            nhifContribution = 1300
        } else if (gross_salary < 80000) {
            nhifContribution = 1400
        } else if (gross_salary < 90000) {
            nhifContribution = 1500
        } else if (gross_salary < 100000) {
            nhifContribution = 1600
        } else {
            nhifContribution = 1700
        }

        return nhifContribution
    }
    let nhif = calculateNHIF(gross_salary)
    document.getElementById("nhif").innerHTML = nhif




    // calculate nssf
    function calculateNSSF(gross_salary) {
        if (gross_salary <= 6000) {
            return gross_salary * 0.06
        } else {
            return 6000 * 0.06
        }
    }
    let nssf = calculateNSSF(gross_salary)
    document.getElementById("nssf").innerHTML = nssf

    // calculate nhdf
    function calculateNHDF(gross_salary) {
        return gross_salary * 0.015
    }
    let nhdf = calculateNHDF(gross_salary)
    document.getElementById("nhdf").innerHTML = nhdf

    // calculate taxable income
    function calculateTaxableIncome(gross_salary, nssf, nhif, nhdf) {
        return gross_salary - (nssf + nhif + nhdf)
    }
    let taxable_income = calculateTaxableIncome(gross_salary, nssf, nhif, nhdf)
    document.getElementById("taxable_income").innerHTML = taxable_income

    // calculate net pay
    function calculatePaye(taxableIncome) {
        let tax = 0

        if (taxableIncome <= 24000) {
            tax = taxableIncome * 0.1
        } else if (taxableIncome <= 32333) {
            tax = 2400 + (taxableIncome - 24000) * 0.15
        } else if (taxableIncome <= 40000) {
            tax = 2400 + (32333 - 24000) * 0.15 + (taxableIncome - 32333) * 0.2
        } else {
            tax = 2400 + (32333 - 24000) * 0.15 + (40000 - 32333) * 0.2 + (taxableIncome - 40000) * 0.25
        }

        return taxableIncome - tax
    }
    let net_pay = calculateNetPay(taxable_income)
    document.getElementById("net_pay").innerHTML = net_pay
})

