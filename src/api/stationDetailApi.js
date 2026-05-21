import { stationDetails } from '../data/stationDetails'

const cloneResponse = (response) => {
  if (typeof structuredClone === 'function') {
    return structuredClone(response)
  }

  return JSON.parse(JSON.stringify(response))
}

export const fetchStationDetail = async (id) => {
  const response = stationDetails.find((item) => item.id === id)

  if (!response) {
    throw new Error(`No station detail mock response for id: ${id}`)
  }

  return cloneResponse(response)
}
