export const formatValue = (value) => {
  if (value === null || value === undefined || value === '') {
    return '...'
  }

  if (typeof value === 'number') {
    return new Intl.NumberFormat('zh-TW', {
      maximumFractionDigits: 2,
    }).format(value)
  }

  return value
}

export const formatBoolean = (value) => {
  if (value === null || value === undefined) {
    return '...'
  }

  return value ? '是' : '否'
}

export const createSummaryItem = (label, value, unit) => ({
  label,
  value: formatValue(value),
  unit,
})

export const createSeasonLine = (label, value) => ({
  value: `${label} ${formatValue(value)}`,
  unit: '公頃',
})
