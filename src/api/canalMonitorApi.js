import { canalMonitorDetails } from '../data/canalMonitorDetails'

const cloneResponse = (response) => {
  if (typeof structuredClone === 'function') {
    return structuredClone(response)
  }

  return JSON.parse(JSON.stringify(response))
}

export const fetchCanalMonitorDetail = async (id) => {
  const response = canalMonitorDetails.find((item) => item.id === id)

  if (!response) {
    throw new Error(`No canal monitor mock response for id: ${id}`)
  }

  return cloneResponse(response)
}
