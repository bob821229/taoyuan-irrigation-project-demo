import { ref } from 'vue'
import { fetchDetail } from '../api/stationDetailApi'
import { normalizeSvgDetailId } from '../utils/svgDetailId'

export const useSvgDetailDialog = () => {
  const detailVisible = ref(false)
  const detailInfo = ref(null)

  const openDetail = async (rawId) => {
    const payload = normalizeSvgDetailId(rawId)

    if (!payload) {
      window.alert(`無法解析圖元代碼：${rawId}`)
      return
    }

    try {
      detailInfo.value = await fetchDetail(payload)
      detailVisible.value = true
    } catch {
      window.alert(`暫無該筆資料：${payload.type}_${payload.id}`)
    }
  }

  return {
    detailVisible,
    detailInfo,
    openDetail,
  }
}
