const DETAIL_SUFFIX_PATTERN = /_(info|nav)$/

const typeAliases = {
  pond: 'pound',
}

export const normalizeSvgDetailId = (rawSvgId) => {
  if (!rawSvgId || typeof rawSvgId !== 'string') {
    return null
  }

  const cleanId = rawSvgId.replace(DETAIL_SUFFIX_PATTERN, '')
  const normalizedCleanId = cleanId.replace(/__+/g, '_')
  const [rawType, ...idParts] = normalizedCleanId.split('_')
  const id = idParts.join('_')

  if (!rawType || !id) {
    return null
  }

  const type = typeAliases[rawType] ?? rawType

  return {
    type,
    id,
    rawId: normalizedCleanId,
  }
}

export const createDetailKey = ({ type, id }) => `${type}_${id}`
