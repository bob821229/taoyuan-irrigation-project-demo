<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  detail: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['update:modelValue'])

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const expandedTables = ref({})

watch(
  () => props.detail,
  (detail) => {
    expandedTables.value = Object.fromEntries(
      (detail?.tabs ?? []).map((tab) => [tab.name, false]),
    )
  },
  { immediate: true },
)

const toggleTable = (name) => {
  expandedTables.value[name] = !expandedTables.value[name]
}
</script>

<template>
  <el-dialog
    v-model="visible"
    class="detail-dialog"
    :title="detail?.dialogTitle ?? '詳細資料'"
    width="min(1440px, calc(100vw - 32px))"
  >
    <el-tabs
      v-if="detail"
      :model-value="detail.tabs?.[0]?.name"
      class="detail-tabs"
    >
      <el-tab-pane
        v-for="tab in detail.tabs"
        :key="tab.name"
        :label="tab.label"
        :name="tab.name"
      >
        <dl class="detail-list" :class="tab.summaryClass">
          <div v-for="item in tab.summary" :key="item.label">
            <dt>{{ item.label }}</dt>
            <dd>
              <template v-if="item.lines">
                <span
                  v-for="line in item.lines"
                  :key="line.value"
                  class="detail-line"
                >
                  {{ line.value }}<span>{{ line.unit }}</span>
                </span>
              </template>
              <template v-else>
                {{ item.value }}
                <span v-if="item.unit">{{ item.unit }}</span>
              </template>
            </dd>
          </div>
        </dl>
        <div class="detail-actions">
          <el-button
            class="expand-button"
            circle
            type="primary"
            :aria-expanded="expandedTables[tab.name]"
            :aria-label="tab.expandLabel"
            @click="toggleTable(tab.name)"
          >
            {{ expandedTables[tab.name] ? '-' : '+' }}
          </el-button>
        </div>
        <div
          v-if="expandedTables[tab.name]"
          class="detail-table-wrap"
          :class="tab.tableWrapClass"
        >
          <table
            v-for="(table, tableIndex) in tab.tables"
            :key="`${tab.name}-${tableIndex}`"
            class="detail-table"
            :class="table.tableClass"
          >
            <thead>
              <tr
                v-for="(headerRow, headerRowIndex) in table.headerRows"
                :key="`${tab.name}-${tableIndex}-header-${headerRowIndex}`"
              >
                <th
                  v-for="(cell, cellIndex) in headerRow"
                  :key="`${tab.name}-${tableIndex}-header-${headerRowIndex}-${cellIndex}`"
                  :colspan="cell.colspan"
                  :rowspan="cell.rowspan"
                >
                  <template v-if="cell.lines">
                    <span
                      v-for="line in cell.lines"
                      :key="line"
                      class="table-header-line"
                    >
                      {{ line }}
                    </span>
                  </template>
                  <template v-else>
                    {{ cell.label }}
                  </template>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, rowIndex) in table.rows" :key="rowIndex">
                <td v-for="(cell, index) in row" :key="`${rowIndex}-${index}`">
                  {{ cell }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>
