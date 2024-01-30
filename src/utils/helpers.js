function generateArray(num) {
  if (num < 0) return []
  return Array.from({ length: num }, (_, index) => index)
}

function jsonString(obj) {
  const stringifiedObj = JSON.stringify(obj, (_, value) => {
    // Check if the value is a float
    if (
      typeof value === 'number' &&
      Number.isFinite(value) &&
      !Number.isInteger(value)
    ) {
      // Parse the float value to a fixed number of decimal places
      return parseFloat(value.toFixed(1))
    }
    return value // Return the original value for other types
  })
  return stringifiedObj
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export { generateArray, jsonString, sleep }
