# detailOverrides.js 欄位對照

本文件整理 `src/data/detailOverrides.js` 內 mock detail 資料的欄位，對照實際畫面會讀取的位置。

確認方式不是只看命名：已追過 `src/data/detailOverrides.js` 的 normalize 流程、`src/api/stationDetailApi.js` 的 mock 回傳，以及 `src/components/StationDetailDialog.vue` 與 `src/components/detail-tabs/*Tab.vue` 的實際渲染欄位。

## 資料流

`detailOverrides` 不會直接進畫面，會先轉成 `detailMockRecords`：

1. `detailOverrides.{type}.{id}` 是原始 mock 資料。
2. `normalizeDetailRecord()` 會把原始資料整理成 `info`。
3. `fetchDetail()` / `fetchStationDetail()` 依 `type + id` 回傳 `info`。
4. `StationDetailDialog.vue` 用 `info.availableTabs` 決定要顯示哪些 tab，並把同一份 `info` 傳給各 tab。

## 根節點欄位

| detailOverrides 原始欄位 | normalize 後欄位 | 畫面位置 | 備註 |
|---|---|---|---|
| `detailOverrides.{type}` | `info.type` | `SensorTab` 判斷感測器型態 | `sensor` 會顯示水位/流量；`pound` 會顯示埤塘蓄水感測資料。 |
| `detailOverrides.{type}.{id}` | `info.id`, `info.detailKey` | API 查資料用 | `detailKey` 是 `${type}_${id}`。畫面不直接顯示 id。 |
| `rawId` | `info.rawId` | 彈窗標題 fallback | `name` 沒值時標題用 `rawId`。 |
| `name` | `info.name` | 彈窗標題 | `StationDetailDialog` 標題主要來源。 |
| `availableTabs` | `info.availableTabs` | 彈窗分頁 | 決定顯示 `irrigation`、`pond`、`weir`、`irrigationSupply`、`waterSource`、`crop`、`sensor`、`media`、`location`、`monitor` 哪些 tab。 |

## irrigation 灌溉資訊 tab

畫面元件：`IrrigationTab.vue`。

| detailOverrides 原始欄位 | normalize 後欄位 | 畫面欄位 |
|---|---|---|
| `irrigation.groupCount` | `info.irrigation.groupCount` | 摘要：小組數 |
| `irrigation.benefitArea` | `info.irrigation.benefitArea` | 摘要：受益面積/總面積 |
| `irrigation.mainLineDirectArea` | `info.irrigation.mainLineDirectArea` | 摘要：幹線直灌面積 |
| `irrigation.branchLineDirectArea` | `info.irrigation.branchLineDirectArea` | 摘要：支線直灌面積 |
| `irrigation.lateralLineDirectArea` | `info.irrigation.lateralLineDirectArea` | 摘要：分線直灌面積 |
| `irrigation.groups[].name` | `info.irrigation.groups[].name` | 展開表格：小組名稱 |
| `irrigation.groups[].benefitArea` | `info.irrigation.groups[].benefitArea` | 展開表格：受益面積 |
| `irrigation.groups[].mainLineDirectArea` | `info.irrigation.groups[].mainLineDirectArea` | 展開表格：幹線直灌面積 |
| `irrigation.groups[].branchLineDirectArea` | `info.irrigation.groups[].branchLineDirectArea` | 展開表格：支線直灌面積 |
| `irrigation.groups[].lateralLineDirectArea` | `info.irrigation.groups[].lateralLineDirectArea` | 展開表格：分線直灌面積 |

備註：`detailOverrides` 目前統一使用 `irrigation` 物件放小組資訊，欄位對應畫面摘要與展開表格。normalize 仍保留舊根層欄位與舊 row 欄位的 fallback。`groupCount === 1` 時，摘要文案會改成單一小組版，但讀取的欄位大致相同。

## pond 埤塘資訊 tab

畫面元件：`PondTab.vue`。

| detailOverrides 原始欄位 | normalize 後欄位 | 畫面欄位 |
|---|---|---|
| `pondCount` | `info.pond.count` | 摘要：埤塘數量 |
| `maxStorage` | `info.pond.maxStorage` | 摘要：總最大蓄水量 |
| `effectiveStorage` | `info.pond.effectiveStorage` | 摘要：總有效蓄水量 |
| `storageRate` | `info.pond.storageRate` | 摘要：總蓄水率 |
| `pond.updatedAt` | `info.pond.updatedAt` | 摘要：資料時間；有這個欄位時會使用單一埤塘摘要版 |
| `pond.maxStorage` | `info.pond.maxStorage` | 摘要：最大蓄水量 |
| `pond.effectiveStorage` | `info.pond.effectiveStorage` | 摘要：有效蓄水量 |
| `pond.storageRate` | `info.pond.storageRate` | 摘要：蓄水率 |
| `ponds[].name` | `info.pond.rows[].name` | 展開表格：埤塘名稱 |
| `ponds[].maxStorage` | `info.pond.rows[].maxStorage` | 展開表格：最大蓄水量 |
| `ponds[].time` | `info.pond.rows[].time` | 展開表格：資料時間 |
| `ponds[].effectiveStorage` | `info.pond.rows[].effectiveStorage` | 展開表格：有效蓄水量 |
| `ponds[].storageRate` | `info.pond.rows[].storageRate` | 展開表格：蓄水率 |

備註：如果原始資料直接有 `pond` 物件，normalize 會保留其欄位；如果同時有根節點 `pondCount/maxStorage/effectiveStorage/storageRate/ponds`，根節點資料會覆寫到 `info.pond`。

## waterSource 水源資訊 tab

畫面元件：`WaterSourceTab.vue`。

| detailOverrides 原始欄位 | normalize 後欄位 | 畫面欄位 |
|---|---|---|
| `waterSource.intakeChannel.row[].type` | `info.waterSource.intakeChannel.row[].type` | 取水渠道表格：類型 |
| `waterSource.intakeChannel.row[].name` | `info.waterSource.intakeChannel.row[].name` | 取水渠道表格：名稱 |
| `waterSource.intakeChannel.rows[].type` | `info.waterSource.intakeChannel.row[].type` | 取水渠道表格：類型 fallback |
| `waterSource.intakeChannel.rows[].name` | `info.waterSource.intakeChannel.row[].name` | 取水渠道表格：名稱 fallback |
| `waterSource.pondSummary.row[].name` | `info.waterSource.pondSummary.row[].name` | 埤塘表格：埤塘名稱 |
| `waterSource.pondSummary.row[].time` | `info.waterSource.pondSummary.row[].time` | 埤塘表格：資料時間 |
| `waterSource.pondSummary.row[].updatedAt` | `info.waterSource.pondSummary.row[].time` fallback | 埤塘表格：資料時間 fallback |
| `waterSource.pondSummary.row[].maxStorage` | `info.waterSource.pondSummary.row[].maxStorage` | 埤塘表格：最大蓄水量；同時計入小計 |
| `waterSource.pondSummary.row[].effectiveStorage` | `info.waterSource.pondSummary.row[].effectiveStorage` | 埤塘表格：有效蓄水量；同時計入小計 |
| `waterSource.pondSummary.row[].storageRate` | `info.waterSource.pondSummary.row[].storageRate` | 埤塘表格：蓄水率 |
| `waterSource.pondSummary.rows[]` | `info.waterSource.pondSummary.row[]` fallback | 埤塘表格 fallback |

備註：水源 tab 的埤塘小計不是直接讀欄位，而是由畫面程式加總 `maxStorage`、`effectiveStorage` 後計算 `storageRate`。

## crop 作物資訊 tab

畫面元件：`CropTab.vue`。

| detailOverrides 原始欄位 | normalize 後欄位 | 畫面欄位 |
|---|---|---|
| `crop.groupCount` | `info.crop.groupCount` | 摘要：小組數 |
| `crop.floodedAreaDate` | `info.crop.floodedAreaDate` | 摘要文案日期、展開表格湛水面積欄位表頭 |
| `crop.recentFloodedArea` | `info.crop.recentFloodedArea` | 摘要：近期農地湛水面積 |
| `crop.researchAverage.firstSeason` | `info.crop.researchAverage.firstSeason` | 摘要：近 5 年航照一期作平均 |
| `crop.researchAverage.secondSeason` | `info.crop.researchAverage.secondSeason` | 摘要：近 5 年航照二期作平均 |
| `crop.agencyAverage.firstSeason` | `info.crop.agencyAverage.firstSeason` | 摘要：近 5 年公糧申報一期作平均 |
| `crop.agencyAverage.secondSeason` | `info.crop.agencyAverage.secondSeason` | 摘要：近 5 年公糧申報二期作平均 |
| `crop.years[]` | `info.crop.years[]` | 展開表格年份欄位 |
| `crop.rows[].name` | `info.crop.rows[].name` | 展開表格：小組名稱 |
| `crop.rows[].floodedArea` | `info.crop.rows[].floodedArea` | 展開表格：農地湛水面積 |
| `crop.rows[].researchFirstSeason[]` | `info.crop.rows[].researchFirstSeason[]` | 展開表格：航照一期作各年度 |
| `crop.rows[].researchSecondSeason[]` | `info.crop.rows[].researchSecondSeason[]` | 展開表格：航照二期作各年度 |
| `crop.rows[].agencyFirstSeason[]` | `info.crop.rows[].agencyFirstSeason[]` | 展開表格：公糧申報一期作各年度 |
| `crop.rows[].agencySecondSeason[]` | `info.crop.rows[].agencySecondSeason[]` | 展開表格：公糧申報二期作各年度 |

備註：`agencyAverageNote` 目前由 normalize 預設補上，不是 `detailOverrides` 既有主要欄位；畫面會用在摘要備註與表格表頭。

## weir 河水堰資訊 tab

畫面元件：`WeirTab.vue`。

| detailOverrides 原始欄位 | normalize 後欄位 | 畫面欄位 |
|---|---|---|
| `weir.intakeDirection` | `info.weir.intakeDirection` | 取水方向 |
| `weir.riverSystem` | `info.weir.riverSystem` | 水系 |
| `weir.branchLine` | `info.weir.branchLine` | 支線 |
| `weir.waterRightStatus` | `info.weir.waterRightStatus` | 水權狀態 |
| `weir.waterRightNumber` | `info.weir.waterRightNumber` | 水權狀號數；也決定是否顯示完整水權欄位與月用水量表 |
| `weir.applicationDate` | `info.weir.applicationDate` | 申請日期，畫面會嘗試轉民國日期 |
| `weir.waterRightOwner` | `info.weir.waterRightOwner` | 水權人姓名 |
| `weir.approvedWaterRightStartDate` | `info.weir.approvedWaterRightStartDate` | 核准水權期間起日 |
| `weir.approvedWaterRightEndDate` | `info.weir.approvedWaterRightEndDate` | 核准水權期間迄日 |
| `weir.waterUsePurpose` | `info.weir.waterUsePurpose` | 用水標的 |
| `weir.referencedWaterSource` | `info.weir.referencedWaterSource` | 引用水源，優先於 `waterSource` |
| `weir.waterSource` | `info.weir.waterSource` | 引用水源 fallback |
| `weir.waterUseArea` | `info.weir.waterUseArea` | 用水範圍 |
| `weir.waterUseMethod` | `info.weir.waterUseMethod` | 使用方法 |
| `weir.intakeLocation` | `info.weir.intakeLocation` | 引水地點 |
| `weir.returnWaterLocation` | `info.weir.returnWaterLocation` | 退水地點 |
| `weir.monthlyWaterUse[].month` | `info.weir.monthlyWaterUse[].month` | 月用水量表：月份 |
| `weir.monthlyWaterUse[].monthlyIntakeDays` | `info.weir.monthlyWaterUse[].monthlyIntakeDays` | 月用水量表：每月取水日數 |
| `weir.monthlyWaterUse[].waterVolumePerSecond` | `info.weir.monthlyWaterUse[].waterVolumePerSecond` | 月用水量表：引用水量 |
| `weir.monthlyWaterUse[].dailyWaterUseHours` | `info.weir.monthlyWaterUse[].dailyWaterUseHours` | 月用水量表：每日用水時間 |
| `weir.hydraulicHeadHeight` | `info.weir.hydraulicHeadHeight` | 水頭高度 |
| `weir.groundwaterWellDepth` | `info.weir.groundwaterWellDepth` | 水井深度 |
| `weir.registrationAuthority` | `info.weir.registrationAuthority` | 登記主管機關 |

備註：如果 `waterRightNumber` 沒值，畫面只顯示水權狀態，不顯示申請日期、水權人、月用水量等完整欄位。normalize 也會依是否有 `waterRightNumber` 補預設 `waterRightStatus`。

## irrigationSupply 供灌資訊 tab

畫面元件：`IrrigationSupplyTab.vue`。

| detailOverrides 原始欄位 | normalize 後欄位 | 畫面欄位 |
|---|---|---|
| `irrigationSupply.group.row[].name` | `info.irrigationSupply.group.row[].name` | 供灌小組表格：小組名稱 |
| `irrigationSupply.group.rows[].name` | `info.irrigationSupply.group.row[].name` fallback | 供灌小組表格：小組名稱 fallback |
| `irrigationSupply.pond.row[].name` | `info.irrigationSupply.pond.row[].name` | 供灌埤塘表格：埤塘名稱 |
| `irrigationSupply.pond.row[].time` | `info.irrigationSupply.pond.row[].time` | 供灌埤塘表格：資料時間 |
| `irrigationSupply.pond.row[].maxStorage` | `info.irrigationSupply.pond.row[].maxStorage` | 供灌埤塘表格：最大蓄水量 |
| `irrigationSupply.pond.row[].effectiveStorage` | `info.irrigationSupply.pond.row[].effectiveStorage` | 供灌埤塘表格：有效蓄水量 |
| `irrigationSupply.pond.row[].storageRate` | `info.irrigationSupply.pond.row[].storageRate` | 供灌埤塘表格：蓄水率 |
| `irrigationSupply.pond.rows[]` | `info.irrigationSupply.pond.rows[]` fallback | 供灌埤塘表格 fallback |

備註：供灌資訊目前只以 `row` 明細渲染。供灌小組表格只顯示 `name`；供灌埤塘小計由畫面加總 `pond.row[]` 的 `maxStorage`、`effectiveStorage` 後計算 `storageRate`，不再讀取 `irrigationSupply.pond` 的總計欄位。

## sensor 感測器資訊 tab

畫面元件：`SensorTab.vue`。

| detailOverrides 原始欄位 | normalize 後欄位 | 畫面欄位 |
|---|---|---|
| `sensor.name` | `info.sensor.name` | 名稱 |
| `sensor.time` | `info.sensor.time` | 時間 |
| `sensor.waterLevel` | `info.sensor.waterLevel` | 水位；只在 `info.type === 'sensor'` 顯示 |
| `sensor.flow` | `info.sensor.flow` | 流量；只在 `info.type === 'sensor'` 顯示 |
| `sensor.waterLevelAlertThreshold` | `info.sensor.waterLevelAlertThreshold` | 流量警示門檻；`flow > waterLevelAlertThreshold` 時顯示警示文字 |
| `sensor.maxStorage` | `info.sensor.maxStorage` | 最大蓄水量；只在 `info.type === 'pound'` 顯示 |
| `sensor.effectiveStorage` | `info.sensor.effectiveStorage` | 有效蓄水量；只在 `info.type === 'pound'` 顯示 |
| `sensor.storageRate` | `info.sensor.storageRate` | 蓄水率；只在 `info.type === 'pound'` 顯示 |

## media 影像資訊 tab

畫面元件：`MediaTab.vue`。

| detailOverrides 原始欄位 | normalize 後欄位 | 畫面欄位 |
|---|---|---|
| `media.images[].url` | `info.media.images[].url` | 輪播圖片來源 |
| `media.images[].title` | `info.media.images[].title` | 圖片 key 與 `alt` 文字；一般不會作為可見文字顯示 |
| `media.images[].description` | `info.media.images[].description` | 圖片說明文字；有值才顯示 caption |

備註：normalize 會把缺少的 `description` 補成 `null`。

## location 位置資訊 tab

畫面元件：`LocationTab.vue`。

| detailOverrides 原始欄位 | normalize 後欄位 | 畫面欄位 |
|---|---|---|
| `location.wgs84.x` | `info.location.wgs84.x` | WGS84 顯示文字的經度，也是 Google Map iframe query 的 longitude |
| `location.wgs84.y` | `info.location.wgs84.y` | WGS84 顯示文字的緯度，也是 Google Map iframe query 的 latitude |
| `location.tm97.x` | `info.location.tm97.x` | TM97 顯示文字的 X |
| `location.tm97.y` | `info.location.tm97.y` | TM97 顯示文字的 Y |
| `location.tm97X` | `info.location.tm97.x` fallback | TM97 X fallback |
| `location.tm97Easting` | `info.location.tm97.x` fallback | TM97 X fallback |
| `location.tm97Y` | `info.location.tm97.y` fallback | TM97 Y fallback |
| `location.tm97Northing` | `info.location.tm97.y` fallback | TM97 Y fallback |
| `location.name` | `info.location.name` | 目前畫面未顯示 |
| `location.address` | `info.location.address` | 目前畫面未顯示 |

## monitor 監控資訊 tab

畫面元件：`MonitorTab.vue`。

| detailOverrides 原始欄位 | normalize 後欄位 | 畫面欄位 |
|---|---|---|
| `monitor.imageUrl` | `info.monitor.imageUrl` | 監控圖片來源 |

備註：畫面每 5 秒會在 URL 後面加時間戳 query，強制刷新圖片。

## 特別注意

- `availableTabs` 只控制分頁是否出現，不會自動保證該 tab 有資料；例如 tab 出現但該 tab 對應資料為空時，畫面會顯示空狀態。
- `location.name`、`location.address` 目前都不是畫面可見欄位。
- `waterSource.pondSummary` 與 `irrigationSupply.pond` 的小計都由畫面即時計算。
- `record.name` 才是彈窗標題來源；`location.name` 不是。
- 若新增欄位但沒有被 normalize 帶到 `info`，或 tab 元件沒有讀取該欄位，畫面就不會顯示。
