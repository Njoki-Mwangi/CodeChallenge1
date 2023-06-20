function calculateDeduction(grossPay) {
    let deduction = 0;
  
    switch (true) {
      case grossPay >= 6000 && grossPay <= 7999:
        deduction = 300;
        break;
      case grossPay >= 8000 && grossPay <= 11999:
        deduction = 400;
        break;
      case grossPay >= 12000 && grossPay <= 14999:
        deduction = 500;
        break;
      case grossPay >= 15000 && grossPay <= 19999:
        deduction = 600;
        break;
      case grossPay >= 20000 && grossPay <= 24999:
        deduction = 750;
        break;
      case grossPay >= 25000 && grossPay <= 29999:
        deduction = 850;
        break;
      case grossPay >= 30000 && grossPay <= 34999:
        deduction = 900;
        break;
      case grossPay >= 35000 && grossPay <= 39999:
        deduction = 950;
        break;
      case grossPay >= 40000 && grossPay <= 44999:
        deduction = 1000;
        break;
      case grossPay >= 45000 && grossPay <= 49999:
        deduction = 1100;
        break;
      case grossPay >= 50000 && grossPay <= 59999:
        deduction = 1200;
        break;
      case grossPay >= 60000 && grossPay <= 69999:
        deduction = 1300;
        break;
      case grossPay >= 70000 && grossPay <= 79999:
        deduction = 1400;
        break;
      case grossPay >= 80000 && grossPay <= 89999:
        deduction = 1500;
        break;
      case grossPay >= 90000 && grossPay <= 99999:
        deduction = 1600;
        break;
      case grossPay >= 100000:
        deduction = 1700;
        break;
    }
  
    return deduction;
  }
  
  function calculatePensionablePayTier(pay) {
    return pay * 0.06;
  }
  
  function calculateTaxRate(monthlyTaxablePay) {
    let rate = 0;
  
    switch (true) {
      case monthlyTaxablePay <= 24000:
        rate = 10;
        break;
      case monthlyTaxablePay >= 24001 && monthlyTaxablePay <= 32333:
        rate = 25;
        break;
      case monthlyTaxablePay > 32333:
        rate = 30;
        break;
    }
  
    return rate;
  }
  
  
  
 
  
  console.log();
  