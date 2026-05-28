const DETAIL_SUFFIX_PATTERN = /_(info|nav)$/

const typeAliases = {
  pond: 'pound',
}

export const normalizeSvgDetailId = (rawSvgId) => {
  if (!rawSvgId || typeof rawSvgId !== 'string') {
    return null
  }

  const rawId = rawSvgId
  const cleanId = rawSvgId.replace(DETAIL_SUFFIX_PATTERN, '')
  const separator = cleanId.includes('__') ? '__' : '_'
  const [rawType, ...idParts] = cleanId.split(separator)
  const id = idParts.join(separator)

  if (!rawType || !id) {
    return null
  }

  const type = typeAliases[rawType] ?? rawType

  return {
    type,
    id,
    rawId,
  }
}

export const createDetailKey = ({ type, id }) => `${type}_${id}`
