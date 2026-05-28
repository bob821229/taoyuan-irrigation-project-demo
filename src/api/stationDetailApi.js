import { detailRecordMap } from '../data/detailRecords'
import { createDetailKey, normalizeSvgDetailId } from '../utils/svgDetailId'

const cloneResponse = (response) => {
  if (typeof structuredClone === 'function') {
    return structuredClone(response)
  }

  return JSON.parse(JSON.stringify(response))
}

const normalizePayload = (payload) => {
  if (typeof payload === 'string') {
    return normalizeSvgDetailId(payload)
  }

  if (payload?.type && payload?.id) {
    return payload
  }

  return null
}

export const fetchDetail = async (payload) => {
  const normalizedPayload = normalizePayload(payload)

  if (!normalizedPayload) {
    throw new Error(`Invalid detail mock request: ${JSON.stringify(payload)}`)
  }

  const response = detailRecordMap.get(createDetailKey(normalizedPayload))

  if (!response) {
    throw new Error(`No detail mock response for type: ${normalizedPayload.type}, id: ${normalizedPayload.id}`)
  }

  return cloneResponse(response)
}

export const fetchStationDetail = fetchDetail
