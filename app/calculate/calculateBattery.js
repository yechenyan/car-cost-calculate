const calculateBattery = (data) => {
  let totalKm = (data.kmProWoche * 365) / 7 * data.jahr

  let costE = totalKm * data.stromabdeckung
  let batteryChargeCount = costE / data.Batteriekapazität

  let batteryStatus = (batteryChargeCount / data.Batterieverluste).toFixed(2)

  let batteryCost = Math.floor(batteryStatus) * data.Batteriepreis

  return {
    batteryStatus,
    batteryCost
  }

}

export default calculateBattery