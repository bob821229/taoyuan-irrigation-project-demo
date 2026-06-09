export const mapLayers = {
  home: {
    title: '桃園管理處灌區',
    parent: null,
  },
  hukou: {
    title: '湖口站灌區',
    parent: 'home',
  },
  'guangfu-1': {
    title: '1支線灌區',
    parent: 'hukou',
  },
}

export const getLayerTrail = (layerName) => {
  const trail = []
  let currentName = layerName

  while (currentName && mapLayers[currentName]) {
    trail.unshift({
      name: currentName,
      ...mapLayers[currentName],
    })
    currentName = mapLayers[currentName].parent
  }

  return trail
}
