function getReceipt(days, wantsToll, wantsGPS, wantsRoadSide, isUnderAge) {
  const rentalDay = 29.99;
  const surchargePercent = 0.3;
  let carRental = rentalDay * days;
  let surchargeAmount = 0; // Initialize surchargeAmount

  // Apply surcharge if under age
  if (isUnderAge) {
    surchargeAmount = surchargePercent * carRental;
    carRental += surchargeAmount; // Add surcharge to car rental
  }

  let optionsSubTotal = 0;

  // Calculate options subtotal based on selected options
  if (wantsToll) {
    optionsSubTotal += 3.95 * days;
  }
  if (wantsGPS) {
    // Change to if to allow multiple selections
    optionsSubTotal += 2.95 * days;
  }
  if (wantsRoadSide) {
    // Change to if to allow multiple selections
    optionsSubTotal += 2.95 * days;
  }

  const grandTotal = (carRental + optionsSubTotal + surchargeAmount).toFixed(2);

  return `
    Car Rental: ${carRental.toFixed(2)} 
    Options: ${optionsSubTotal.toFixed(2)} 
    Under 25 surcharge: ${surchargeAmount.toFixed(2)} 
    Total Due: ${grandTotal} 
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const numberDays = document.getElementById("numberDays");
  const toll = document.getElementById("toll");
  const gps = document.getElementById("gps");
  const roadside = document.getElementById("roadside");
  const isUnder = document.getElementById("isUnder");
  const estimateButton = document.getElementById("estimateButton");
  const receiptOutput = document.getElementById("receiptOutput");

  estimateButton.addEventListener("click", () => {
    receiptOutput.innerText = getReceipt(
      parseInt(numberDays.value), // Convert to integer
      toll.checked,
      gps.checked,
      roadside.checked,
      isUnder.checked
    );
  });
}); // end DOM CONTENT LOADED
