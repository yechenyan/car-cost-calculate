export const getPresentValue = (futureValue, discountRate, periods) => {
  if (futureValue <= 0 || discountRate < 0 || periods < 0) {
    throw new Error(
      "Invalid input values: Future value must be greater than 0, and discount rate and periods must be non-negative.",
    );
  }

  // Present Value formula calculation
  const presentValue = futureValue / (1 + discountRate) ** periods;

  return presentValue;
};

export const getFuturePrice = (initialPrice, growthRate, years) => {
  const futurePrice = initialPrice * Math.pow(1 + growthRate, years);

  return futurePrice;
};
