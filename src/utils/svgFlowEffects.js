const SVG_NAMESPACE = 'http://www.w3.org/2000/svg'
const DEFAULT_FLOW_CLASS = 'svg-flow-segment'
const DEFAULT_FLOW_DURATION = '1.1s'
const FLOW_DIRECTIONS = new Set(['up', 'down', 'left', 'right', 'forward', 'reverse'])
const FLOW_SHAPE_SELECTOR = 'line, path, polygon, polyline, rect'
const NON_RENDERED_SVG_TAGS = new Set(['defs', 'desc', 'metadata', 'style', 'title'])
const DIRECT_SVG_CHILD_TAGS = new Set(['g', 'line', 'path', 'polygon', 'polyline', 'rect'])

export const getSvgFlowDirection = (element) => {
  const rawName = [
    element.getAttribute('id'),
    element.getAttribute('data-name'),
  ]
    .filter(Boolean)
    .join('_')
  const nameParts = rawName.split(/[_-]+/).map((part) => part.toLowerCase())

  return nameParts.find((part) => FLOW_DIRECTIONS.has(part)) ?? 'forward'
}

const createFlowLineFromRect = (rect, direction = 'forward') => {
  const x = Number(rect.getAttribute('x') ?? 0)
  const y = Number(rect.getAttribute('y') ?? 0)
  const width = Number(rect.getAttribute('width') ?? 0)
  const height = Number(rect.getAttribute('height') ?? 0)
  const line = document.createElementNS(SVG_NAMESPACE, 'line')
  const isVerticalDirection = direction === 'up' || direction === 'down'
  const isHorizontalDirection = direction === 'left' || direction === 'right'

  if ((height >= width && !isHorizontalDirection) || isVerticalDirection) {
    line.setAttribute('x1', `${x + width / 2}`)
    line.setAttribute('x2', `${x + width / 2}`)

    if (direction === 'up' || direction === 'reverse') {
      line.setAttribute('y1', `${y + height}`)
      line.setAttribute('y2', `${y}`)
    } else {
      line.setAttribute('y1', `${y}`)
      line.setAttribute('y2', `${y + height}`)
    }
  } else {
    line.setAttribute('y1', `${y + height / 2}`)
    line.setAttribute('y2', `${y + height / 2}`)

    if (direction === 'left' || direction === 'reverse') {
      line.setAttribute('x1', `${x + width}`)
      line.setAttribute('x2', `${x}`)
    } else {
      line.setAttribute('x1', `${x}`)
      line.setAttribute('x2', `${x + width}`)
    }
  }

  return line
}

const parsePoints = (points) => {
  const values = points
    .match(/-?\d+(?:\.\d+)?/g)
    ?.map(Number) ?? []

  return Array.from({ length: Math.floor(values.length / 2) }, (_, index) => {
    return [values[index * 2], values[index * 2 + 1]]
  })
}

const getBoundsFromPoints = (points) => {
  const xs = points.map(([x]) => x)
  const ys = points.map(([, y]) => y)

  return {
    minX: Math.min(...xs),
    minY: Math.min(...ys),
    maxX: Math.max(...xs),
    maxY: Math.max(...ys),
    width: Math.max(...xs) - Math.min(...xs),
    height: Math.max(...ys) - Math.min(...ys),
  }
}

export const isThinRectFlowElement = (element) => {
  const width = Number(element.getAttribute('width') ?? 0)
  const height = Number(element.getAttribute('height') ?? 0)

  return width > 0 && height > 0 && Math.min(width, height) <= 3
}

export const isThinOrOrthogonalPolygonFlowElement = (element) => {
  const points = parsePoints(element.getAttribute('points') ?? '')

  if (points.length < 3) {
    return false
  }

  const { width, height } = getBoundsFromPoints(points)

  if (Math.min(width, height) <= 3 && Math.max(width, height) >= 12) {
    return true
  }

  const isOrthogonalFlowShape = points.length >= 5 && width >= 20 && height >= 20

  return isOrthogonalFlowShape
}

const reversePath = (path) => {
  const commands = path.match(/[ML] [^ML]+/g) ?? []
  const reversedCommands = commands.reverse().map((command, index) => {
    return `${index === 0 ? 'M' : 'L'} ${command.slice(2)}`
  })

  return reversedCommands.join(' ')
}

const createFlowPathFromPolygon = (polygon, direction = 'forward') => {
  const points = parsePoints(polygon.getAttribute('points') ?? '')
  const { minX, minY, maxX, maxY, width, height } = getBoundsFromPoints(points)
  const path = document.createElementNS(SVG_NAMESPACE, 'path')
  let pathData = ''

  if (Math.min(width, height) <= 3) {
    const centerX = minX + width / 2
    const centerY = minY + height / 2

    if (height >= width) {
      pathData = direction === 'up' || direction === 'reverse'
        ? `M ${centerX} ${maxY} L ${centerX} ${minY}`
        : `M ${centerX} ${minY} L ${centerX} ${maxY}`
    } else {
      pathData = direction === 'left' || direction === 'reverse'
        ? `M ${maxX} ${centerY} L ${minX} ${centerY}`
        : `M ${minX} ${centerY} L ${maxX} ${centerY}`
    }

    path.setAttribute('d', pathData)

    return path
  }

  const verticalXs = [...new Set(points.map(([x]) => x))]
    .sort((a, b) => a - b)
    .slice(0, 2)
  const horizontalYs = [...new Set(points.map(([, y]) => y))]
    .sort((a, b) => a - b)
    .slice(0, 2)
  const centerX = verticalXs.reduce((sum, x) => sum + x, 0) / verticalXs.length
  const centerY = horizontalYs.reduce((sum, y) => sum + y, 0) / horizontalYs.length

  pathData = `M ${centerX} ${maxY} L ${centerX} ${centerY} L ${maxX} ${centerY}`
  path.setAttribute('d', direction === 'left' || direction === 'up' || direction === 'reverse'
    ? reversePath(pathData)
    : pathData)

  return path
}

const createFlowLineFromLine = (element, direction = 'forward') => {
  const x1 = element.getAttribute('x1') ?? '0'
  const y1 = element.getAttribute('y1') ?? '0'
  const x2 = element.getAttribute('x2') ?? '0'
  const y2 = element.getAttribute('y2') ?? '0'
  const line = document.createElementNS(SVG_NAMESPACE, 'line')
  const shouldReverse = direction === 'left' || direction === 'up' || direction === 'reverse'

  line.setAttribute('x1', shouldReverse ? x2 : x1)
  line.setAttribute('y1', shouldReverse ? y2 : y1)
  line.setAttribute('x2', shouldReverse ? x1 : x2)
  line.setAttribute('y2', shouldReverse ? y1 : y2)

  return line
}

const createFlowPathFromPolyline = (element, direction = 'forward') => {
  const points = parsePoints(element.getAttribute('points') ?? '')
  const orderedPoints = direction === 'left' || direction === 'up' || direction === 'reverse'
    ? [...points].reverse()
    : points
  const path = document.createElementNS(SVG_NAMESPACE, 'path')
  const pathData = orderedPoints
    .map(([x, y], index) => `${index === 0 ? 'M' : 'L'} ${x} ${y}`)
    .join(' ')

  path.setAttribute('d', pathData)

  return path
}

const createFlowSegment = (element, direction) => {
  const tagName = element.tagName.toLowerCase()

  if (tagName === 'line') {
    return createFlowLineFromLine(element, direction)
  }

  if (tagName === 'rect') {
    return createFlowLineFromRect(element, direction)
  }

  if (tagName === 'polygon') {
    return createFlowPathFromPolygon(element, direction)
  }

  if (tagName === 'polyline') {
    return createFlowPathFromPolyline(element, direction)
  }

  return element.cloneNode(false)
}

const getFirstRenderedSvgChild = (svg) => {
  return [...svg.children].find((child) => {
    return !NON_RENDERED_SVG_TAGS.has(child.tagName.toLowerCase())
  })
}

const getOrCreateFlowLayer = (svg, flowClass) => {
  const layerClass = `${flowClass}-layer`
  const existingLayer = svg.querySelector(`:scope > .${layerClass}`)

  if (existingLayer) {
    return existingLayer
  }

  const layer = document.createElementNS(SVG_NAMESPACE, 'g')
  layer.classList.add(layerClass)
  layer.setAttribute('aria-hidden', 'true')

  svg.insertBefore(layer, getFirstRenderedSvgChild(svg) ?? null)

  return layer
}

const getDirectSvgChild = (element, svg) => {
  let current = element

  while (current?.parentElement && current.parentElement !== svg) {
    current = current.parentElement
  }

  return current?.parentElement === svg && DIRECT_SVG_CHILD_TAGS.has(current.tagName.toLowerCase())
    ? current
    : null
}

const moveFlowRootsToLayer = (flowTargets, svg, flowLayer) => {
  const movedRoots = new WeakSet()

  flowTargets.forEach(({ element }) => {
    const root = getDirectSvgChild(element, svg)

    if (!root || movedRoots.has(root) || root === flowLayer) {
      return
    }

    movedRoots.add(root)
    flowLayer.append(root)
  })
}

const isFlowShape = (element) => element.matches(FLOW_SHAPE_SELECTOR)

const getFlowTargets = (element) => {
  if (isFlowShape(element)) {
    return [{ element, directionSource: element }]
  }

  return [...element.querySelectorAll(FLOW_SHAPE_SELECTOR)].map((child) => ({
    element: child,
    directionSource: element,
  }))
}

const getElementsByRule = (svg, rule) => {
  const elements = [...svg.querySelectorAll(rule.selector)]

  if (!rule.filter) {
    return elements
  }

  return elements.filter(rule.filter)
}

export const defaultSvgFlowRules = [
  {
    selector: '[id^="river_"], [id^="canal_"], [id^="drain_"]',
  },
  // Demo fallback rules for the current exported SVG.
  // Prefer stable selectors such as [id^="river__"] or [id^="canal__"] in production.
  {
    selector: '.cls-15',
  },
  {
    selector: '.cls-7',
    filter: (element) => {
      const tagName = element.tagName.toLowerCase()

      return (tagName === 'rect' && isThinRectFlowElement(element))
        || (tagName === 'polygon' && isThinOrOrthogonalPolygonFlowElement(element))
    },
  },
]

export const applySvgFlowEffects = (
  mapElement,
  {
    rules = defaultSvgFlowRules,
    flowClass = DEFAULT_FLOW_CLASS,
    duration = DEFAULT_FLOW_DURATION,
    keepRiverBelowContent = true,
    keepBelowContent,
  } = {},
) => {
  const svg = mapElement?.querySelector('svg')

  if (!svg || svg.querySelector(`.${flowClass}`)) {
    return
  }

  const seenElements = new WeakSet()
  const flowTargets = rules
    .flatMap((rule) => getElementsByRule(svg, rule))
    .flatMap(getFlowTargets)
    .filter(({ element }) => {
      if (seenElements.has(element)) {
        return false
      }

      seenElements.add(element)

      return true
    })

  if (!flowTargets.length) {
    return
  }

  const shouldKeepRiverBelowContent = keepBelowContent ?? keepRiverBelowContent
  const flowLayer = shouldKeepRiverBelowContent ? getOrCreateFlowLayer(svg, flowClass) : null

  if (flowLayer) {
    moveFlowRootsToLayer(flowTargets, svg, flowLayer)
  }

  flowTargets.forEach(({ element, directionSource }) => {
    const direction = getSvgFlowDirection(directionSource)
    const segment = createFlowSegment(element, direction)

    segment.removeAttribute('id')
    segment.removeAttribute('class')
    segment.classList.add(flowClass)
    segment.classList.add(`${flowClass}--${direction}`)
    segment.dataset.flowDirection = direction
    segment.style.setProperty('--svg-flow-duration', duration)
    segment.setAttribute('aria-hidden', 'true')

    element.after(segment)
  })
}
