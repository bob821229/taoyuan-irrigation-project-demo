需求 
    目前的svg有許多元素
    目前只有id ，我希望可以辨識它的類別
    ex.ISTD403009004 這個是水利小組 、ISTD003009027 這是埤塘、ISTD003009005 這是感應器、ISTD603009001 這是支線、ISTD303009001 這是工作站
    舉例:我要辨識 id是不是要多個前綴 pond_ISTD003009027
目的
    幫我幫這些類別 命名 我在請公司出圖的美編 幫我加上這個加上前綴的id

建議
    建議不要直接把中文類別放進 SVG id，使用固定英文前綴 + 原始 id，之後程式比較好用 querySelector 或 CSS 控制顯示。

    命名格式
        {類別前綴}_{原始id}

    類別前綴
        station_：工作站
        branch_：支線、圳路、渠道節點
        group_：水利小組
        pond_：埤塘
        sensor_：水位流量計、流量感測器
        weir_：河水堰
        cctv_：CCTV
        info_：詳細統計資訊點擊點

    範例
        ISTD403009004 -> group_ISTD403009004
        ISTD003009027 -> pond_ISTD003009027
        ISTD003009005 -> sensor_ISTD003009005
        ISTD603009001 -> branch_ISTD603009001
        ISTD303009001 -> station_ISTD303009001

    如果同一個圖形需要門、點擊熱區、文字標籤等子元素，可以在最後再加用途後綴。

    子元素命名範例
        station_ISTD303009001_area：可點擊範圍
        station_ISTD303009001_label：文字標籤
        branch_ISTD603009001_door：進入下一層的門或熱區
        pond_ISTD003009027_icon：埤塘圖示
        sensor_ISTD003009005_icon：感測器圖示
        sensor_ISTD003009005_media：現地影片、照片
        

    後續 SVG 控制會比較方便：
        勾選「埤塘蓄水率」時，可以控制 pond_ 開頭的元素。
        勾選「水利小組」作物期別時，可以控制 group_ 開頭的元素。
        勾選「顯示渠道流量資料」時，可以控制 sensor_ 開頭的元素或流量文字標籤。
        勾選「顯示埤塘蓄水量資料」時，可以控制 pond_ 相關數值標籤。
    
