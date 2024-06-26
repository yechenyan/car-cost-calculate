const calculateBattery = (data) => {

  if (data.Batteriekapazität === 0 || data.Batteriepreis === 0 ) return {
    batteryStatus: 0,
    batteryCost: 0
  }
  let totalKm = (data.kmProWoche * 365) / 7 * data.jahr

  let costE = totalKm * data.stromabdeckung / 1.5
  let batteryChargeCount = costE / data.Batteriekapazität

  let batteryStatus = (batteryChargeCount / data.Batterieverluste)

  let batteryCost = Math.floor(batteryStatus) * data.Batteriepreis
  return {
    batteryStatus: batteryStatus,
    batteryCost
  }

}

export default calculateBattery