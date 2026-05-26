const SVG_NAMESPACE = 'http://www.w3.org/2000/svg'
const INFO_TOOLTIP_TEXT = '開啟詳細資訊'

export const applySvgInfoTooltips = (mapElement) => {
  if (!mapElement) {
    return
  }

  mapElement.querySelectorAll('[id$="_info"]').forEach((element) => {
    element.setAttribute('aria-label', INFO_TOOLTIP_TEXT)

    const existingTitle = element.querySelector(':scope > title[data-info-tooltip="true"]')
    if (existingTitle) {
      existingTitle.textContent = INFO_TOOLTIP_TEXT
      return
    }

    const title = document.createElementNS(SVG_NAMESPACE, 'title')
    title.dataset.infoTooltip = 'true'
    title.textContent = INFO_TOOLTIP_TEXT
    element.prepend(title)
  })
}
