import { waterStorageDetails } from '../data/waterStorageDetails'

const cloneResponse = (response) => {
  if (typeof structuredClone === 'function') {
    return structuredClone(response)
  }

  return JSON.parse(JSON.stringify(response))
}

export const fetchWaterStorageDetail = async (id) => {
  const response = waterStorageDetails.find((item) => item.id === id)

  if (!response) {
    throw new Error(`No water storage mock response for id: ${id}`)
  }

  return cloneResponse(response)
}
