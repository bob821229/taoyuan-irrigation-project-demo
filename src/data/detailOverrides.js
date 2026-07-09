export const detailOverrides = {
    main: {
        "03009001": {
            name: "光復圳",
            availableTabs: ["irrigation", "waterSource", "crop"],
            irrigation: {
                groupCount: 51,
                benefitArea: 3446,
                mainLineDirectArea: 0,
                branchLineDirectArea: 0,
                lateralLineDirectArea: 0,
                groups: [
                    {
                        name: "光復圳1-1號池小組",
                        benefitArea: 78.86,
                        mainLineDirectArea: 0,
                        branchLineDirectArea: 0,
                        lateralLineDirectArea: 0,
                    },
                    {
                        name: "...",
                        benefitArea: 0,
                        mainLineDirectArea: 0,
                        branchLineDirectArea: 0,
                        lateralLineDirectArea: 0,
                    },
                    {
                        name: "光復圳13-2號池小組",
                        benefitArea: 37.4,
                        mainLineDirectArea: 0,
                        branchLineDirectArea: 0,
                        lateralLineDirectArea: 0,
                    },
                ],
            },
            pondCount: 65,
            maxStorage: 911,
            effectiveStorage: 236,
            storageRate: 26,
            ponds: [
                {
                    name: "光復圳1-1號池",
                    maxStorage: 6.67,
                    time: "115/05/15 16時",
                    effectiveStorage: 3.78,
                    storageRate: 57,
                },
                {
                    name: "光復圳1-2號池",
                    maxStorage: 9.67,
                    time: "115/05/15 16時",
                    effectiveStorage: 2.56,
                    storageRate: 26,
                },
                {
                    name: "光復圳1-3號池",
                    maxStorage: 10.56,
                    time: "115/05/15 16時",
                    effectiveStorage: 3.53,
                    storageRate: 33,
                },
                {
                    name: "光復圳1-4號池",
                    maxStorage: 11.1,
                    time: "115/05/15 16時",
                    effectiveStorage: 4.22,
                    storageRate: 38,
                },
                {
                    name: "...",
                    maxStorage: "...",
                    time: "115/05/15 10時",
                    effectiveStorage: "...",
                    storageRate: "...",
                },
                {
                    name: "...",
                    maxStorage: "...",
                    time: "115/05/15 08時",
                    effectiveStorage: "...",
                    storageRate: "...",
                },
            ],
            waterSource: {
                intakeChannel: {
                    row: [
                        { type: "渠道", name: "光復圳" },
                        { type: "渠道", name: "光復圳7支線" },
                        { type: "渠道", name: "光復圳11支線" },
                        {
                            type: "河水堰",
                            name: "社子溪02號河水堰",
                        },
                        {
                            type: "河水堰",
                            name: "...",
                        },
                        {
                            type: "河水堰",
                            name: "動力抽汲地下水新豐03號井",
                        },
                    ],
                },
                pondSummary: {
                    row: [
                        {
                            name: "光復圳1-1號池",
                            time: "115/05/15 16時",
                            maxStorage: 6.67,
                            effectiveStorage: 3.78,
                            storageRate: 57,
                        },
                        {
                            name: "...",
                            time: "115/05/15 16時",
                            maxStorage: 11.52,
                            effectiveStorage: 5.78,
                            storageRate: 50,
                        },
                        {
                            name: "紅毛圳新豐2號池",
                            time: "115/05/15 16時",
                            maxStorage: 11.52,
                            effectiveStorage: 5.78,
                            storageRate: 50,
                        },
                    ],
                },
            },
            crop: {
                groupCount: 51,
                floodedAreaDate: "115/3/5",
                recentFloodedArea: 287,
                researchAverage: { firstSeason: 137, secondSeason: 102 },
                agencyAverage: { firstSeason: 105, secondSeason: 1372},
                years: ["111", "112", "113", "114", "115", "平均"],
                rows: [
                    {
                        name: "光復圳1-1號池小組",
                        floodedArea: 20,
                        researchFirstSeason: [
                            15.6, 14.1, 16.8, 13.9, 12.7, 15.0,
                        ],
                        researchSecondSeason: [4.9, 4.5, 5.8, 3.8, 5.9, 5.0],
                        agencyFirstSeason: [13.1, 15.6, 12.7, 12.5, 16.5, 15.0],
                        agencySecondSeason: [4.9, 13.7, 16.8, 14.2, 15.4, 5.0],
                    },
                    {
                        name: "光復圳1-2號池小組",
                        floodedArea: 18,
                        researchFirstSeason: [
                            15.6, 14.1, 16.8, 13.9, 12.7, 15.0,
                        ],
                        researchSecondSeason: [4.9, 4.5, 5.8, 3.8, 5.9, 5.0],
                        agencyFirstSeason: [13.1, 15.6, 12.7, 12.5, 16.5, 15.0],
                        agencySecondSeason: [4.9, 13.7, 16.8, 14.2, 15.4, 5.0],
                    },
                    {
                        name: "光復圳1-3號池小組",
                        floodedArea: 15,
                        researchFirstSeason: [
                            15.6, 14.1, 16.8, 13.9, 12.7, 15.0,
                        ],
                        researchSecondSeason: [4.9, 4.5, 5.8, 3.8, 5.9, 5.0],
                        agencyFirstSeason: [13.1, 15.6, 12.7, 12.5, 16.5, 15.0],
                        agencySecondSeason: [4.9, 13.7, 16.8, 14.2, 15.4, 5.0],
                    },
                    {
                        name: "光復圳1-4號池小組",
                        floodedArea: 33,
                        researchFirstSeason: [
                            15.6, 14.1, 16.8, 13.9, 12.7, 15.0,
                        ],
                        researchSecondSeason: [4.9, 4.5, 5.8, 3.8, 5.9, 5.0],
                        agencyFirstSeason: [13.1, 15.6, 12.7, 12.5, 16.5, 15.0],
                        agencySecondSeason: [4.9, 13.7, 16.8, 14.2, 15.4, 5.0],
                    },
                    {
                        name: "...",
                        floodedArea: "...",
                        researchFirstSeason: [
                            15.6, 14.1, 16.8, 13.9, 12.7, 15.0,
                        ],
                        researchSecondSeason: [4.9, 4.5, 5.8, 3.8, 5.9, 5.0],
                        agencyFirstSeason: [13.1, 15.6, 12.7, 12.5, 16.5, 15.0],
                        agencySecondSeason: [4.9, 13.7, 16.8, 14.2, 15.4, 5.0],
                    },
                    {
                        name: "光復圳13-2號池小組",
                        floodedArea: "...",
                        researchFirstSeason: [
                            15.6, 14.1, 16.8, 13.9, 12.7, 15.0,
                        ],
                        researchSecondSeason: [4.9, 4.5, 5.8, 3.8, 5.9, 5.0],
                        agencyFirstSeason: [13.1, 15.6, 12.7, 12.5, 16.5, 15.0],
                        agencySecondSeason: [4.9, 13.7, 16.8, 14.2, 15.4, 5.0],
                    },
                ],
            },
            location: {
                name: "湖口站",
                address: "桃園管理處湖口工作站灌區",
                wgs84: { x: 121.110114, y: 24.94375 },
                tm97: { x: 261120, y: 2759552 },
            },
        },
    },
    stn: {
        "03009001": {
            name: "湖口站",
            availableTabs: ["irrigation", "waterSource", "crop"],
            irrigation: {
                groupCount: 53,
                benefitArea: 3621,
                mainLineDirectArea: 0,
                branchLineDirectArea: 0,
                lateralLineDirectArea: 0,
                groups: [
                    {
                        name: "光復圳1-1號池小組",
                        benefitArea: 78.86,
                        mainLineDirectArea: 0,
                        branchLineDirectArea: 78.86,
                        lateralLineDirectArea: 0,
                    },
                    {
                        name: "光復圳1-2號池小組",
                        benefitArea: 33.31,
                        mainLineDirectArea: 0,
                        branchLineDirectArea: 33.31,
                        lateralLineDirectArea: 0,
                    },
                    {
                        name: "光復圳1-3號池小組",
                        benefitArea: 35.05,
                        mainLineDirectArea: 0,
                        branchLineDirectArea: 35.05,
                        lateralLineDirectArea: 0,
                    },
                    {
                        name: "光復圳1-4號池小組",
                        benefitArea: 53.41,
                        mainLineDirectArea: 0,
                        branchLineDirectArea: 53.41,
                        lateralLineDirectArea: 0,
                    },
                    {
                        name: "...",
                        benefitArea: "...",
                        mainLineDirectArea: 0,
                        branchLineDirectArea: "...",
                        lateralLineDirectArea: 0,
                    },
                    {
                        name: "紅毛圳新豐2號池小組",
                        benefitArea: 57.44,
                        mainLineDirectArea: 0,
                        branchLineDirectArea: 57.44,
                        lateralLineDirectArea: 0,
                    },
                ],
            },
            pondCount: 65,
            maxStorage: 911,
            effectiveStorage: 236,
            storageRate: 26,
            ponds: [
                {
                    name: "光復圳1-1號池",
                    maxStorage: 6.67,
                    time: "115/05/15 16時",
                    effectiveStorage: 3.78,
                    storageRate: 57,
                },
                {
                    name: "光復圳1-2號池",
                    maxStorage: 9.67,
                    time: "115/05/15 16時",
                    effectiveStorage: 2.56,
                    storageRate: 26,
                },
                {
                    name: "光復圳1-3號池",
                    maxStorage: 10.56,
                    time: "115/05/15 16時",
                    effectiveStorage: 3.53,
                    storageRate: 33,
                },
                {
                    name: "光復圳1-4號池",
                    maxStorage: 11.1,
                    time: "115/05/15 16時",
                    effectiveStorage: 4.22,
                    storageRate: 38,
                },
                {
                    name: "...",
                    maxStorage: "...",
                    time: "115/05/15 10時",
                    effectiveStorage: "...",
                    storageRate: "...",
                },
                {
                    name: "...",
                    maxStorage: "...",
                    time: "115/05/15 08時",
                    effectiveStorage: "...",
                    storageRate: "...",
                },
            ],
            waterSource: {
                intakeChannel: {
                    row: [
                        { type: "渠道", name: "光復圳" },
                        { type: "渠道", name: "光復圳1支線" },
                        {
                            type: "河水堰",
                            name: "...",
                        },
                        {
                            type: "河水堰",
                            name: "牛圳溪新10號河水堰",
                        },
                    ],
                },
                pondSummary: {
                    row: [
                        {
                            name: "光復圳1-1號池",
                            time: "115/05/15 16時",
                            maxStorage: 6.67,
                            effectiveStorage: 3.78,
                            storageRate: 57,
                        },
                        {
                            name: "...",
                            time: "115/05/15 16時",
                            maxStorage: 11.52,
                            effectiveStorage: 5.78,
                            storageRate: 50,
                        },
                        {
                            name: "光復圳13-2號池",
                            time: "115/05/15 16時",
                            maxStorage: 11.52,
                            effectiveStorage: 5.78,
                            storageRate: 50,
                        },
                    ],
                },
            },
            crop: {
                groupCount: 53,
                floodedAreaDate: "115/3/5",
                recentFloodedArea: 2878,
                researchAverage: { firstSeason: 1372, secondSeason: 1027 },
                agencyAverage: { firstSeason: 1054, secondSeason: 1372 },
                years: ["111", "112", "113", "114", "115", "平均"],
                rows: [
                    {
                        name: "光復圳1-1號池小組",
                        floodedArea: 20,
                        researchFirstSeason: [
                            15.6, 14.1, 16.8, 13.9, 12.7, 15.0,
                        ],
                        researchSecondSeason: [4.9, 4.5, 5.8, 3.8, 5.9, 5.0],
                        agencyFirstSeason: [13.1, 15.6, 12.7, 12.5, 16.5, 15.0],
                        agencySecondSeason: [4.9, 13.7, 16.8, 14.2, 15.4, 5.0],
                    },
                    {
                        name: "光復圳1-2號池小組",
                        floodedArea: 18,
                        researchFirstSeason: [
                            15.6, 14.1, 16.8, 13.9, 12.7, 15.0,
                        ],
                        researchSecondSeason: [4.9, 4.5, 5.8, 3.8, 5.9, 5.0],
                        agencyFirstSeason: [13.1, 15.6, 12.7, 12.5, 16.5, 15.0],
                        agencySecondSeason: [4.9, 13.7, 16.8, 14.2, 15.4, 5.0],
                    },
                    {
                        name: "光復圳1-3號池小組",
                        floodedArea: 15,
                        researchFirstSeason: [
                            15.6, 14.1, 16.8, 13.9, 12.7, 15.0,
                        ],
                        researchSecondSeason: [4.9, 4.5, 5.8, 3.8, 5.9, 5.0],
                        agencyFirstSeason: [13.1, 15.6, 12.7, 12.5, 16.5, 15.0],
                        agencySecondSeason: [4.9, 13.7, 16.8, 14.2, 15.4, 5.0],
                    },
                    {
                        name: "光復圳1-4號池小組",
                        floodedArea: 33,
                        researchFirstSeason: [
                            15.6, 14.1, 16.8, 13.9, 12.7, 15.0,
                        ],
                        researchSecondSeason: [4.9, 4.5, 5.8, 3.8, 5.9, 5.0],
                        agencyFirstSeason: [13.1, 15.6, 12.7, 12.5, 16.5, 15.0],
                        agencySecondSeason: [4.9, 13.7, 16.8, 14.2, 15.4, 5.0],
                    },
                    {
                        name: "...",
                        floodedArea: "...",
                        researchFirstSeason: [
                            15.6, 14.1, 16.8, 13.9, 12.7, 15.0,
                        ],
                        researchSecondSeason: [4.9, 4.5, 5.8, 3.8, 5.9, 5.0],
                        agencyFirstSeason: [13.1, 15.6, 12.7, 12.5, 16.5, 15.0],
                        agencySecondSeason: [4.9, 13.7, 16.8, 14.2, 15.4, 5.0],
                    },
                    {
                        name: "紅毛圳新豐2號池小組",
                        floodedArea: "...",
                        researchFirstSeason: [
                            15.6, 14.1, 16.8, 13.9, 12.7, 15.0,
                        ],
                        researchSecondSeason: [4.9, 4.5, 5.8, 3.8, 5.9, 5.0],
                        agencyFirstSeason: [13.1, 15.6, 12.7, 12.5, 16.5, 15.0],
                        agencySecondSeason: [4.9, 13.7, 16.8, 14.2, 15.4, 5.0],
                    },
                ],
            },
            location: {
                name: "湖口站",
                address: "桃園管理處湖口工作站灌區",
                wgs84: { x: 121.110114, y: 24.94375 },
                tm97: { x: 261120, y: 2759552 },
            },
        },
    },
    branch: {
        "03009001": {
            rawId: "branch_03009001",
            name: "1支線",
            availableTabs: ["irrigation", "waterSource", "crop"],
            irrigation: {
                groupCount: 3,
                benefitArea: 125,
                mainLineDirectArea: 0,
                branchLineDirectArea: 0,
                lateralLineDirectArea: 0,
                groups: [
                    {
                        name: "光復圳1-2號池小組",
                        benefitArea: 33.31,
                        mainLineDirectArea: 0,
                        branchLineDirectArea: 0,
                        lateralLineDirectArea: 0,
                    },
                    {
                        name: "光復圳1-3號池小組",
                        benefitArea: 35.05,
                        mainLineDirectArea: 0,
                        branchLineDirectArea: 0,
                        lateralLineDirectArea: 0,
                    },
                    {
                        name: "光復圳1-4號池小組",
                        benefitArea: 56.53,
                        mainLineDirectArea: 0,
                        branchLineDirectArea: 0,
                        lateralLineDirectArea: 0,
                    },
                ],
            },
            pondCount: 4,
            maxStorage: 38,
            effectiveStorage: 14.09,
            storageRate: 37,
            ponds: [
                {
                    name: "光復圳1-1號池",
                    maxStorage: 6.67,
                    time: "115/05/15 16時",
                    effectiveStorage: 3.78,
                    storageRate: 57,
                },
                {
                    name: "光復圳1-2號池",
                    maxStorage: 9.67,
                    time: "115/05/15 16時",
                    effectiveStorage: 2.56,
                    storageRate: 26,
                },
                {
                    name: "光復圳1-3號池",
                    maxStorage: 10.56,
                    time: "115/05/15 16時",
                    effectiveStorage: 3.53,
                    storageRate: 33,
                },
                {
                    name: "光復圳1-4號池",
                    maxStorage: 11.1,
                    time: "115/05/15 16時",
                    effectiveStorage: 4.22,
                    storageRate: 38,
                },
            ],
            waterSource: {
                intakeChannel: {
                    row: [
                        {
                            type: "渠道",
                            name: "光復圳",
                        },
                        {
                            type: "渠道",
                            name: "光復圳1支線",
                        },
                        {
                            type: "河水堰",
                            name: "社子溪02號河水堰",
                        },
                        {
                            type: "河水堰",
                            name: "社子溪03號河水堰",
                        },
                        {
                            type: "河水堰",
                            name: "社子溪04號河水堰",
                        },
                    ],
                },
                pondSummary: {
                    row: [
                        {
                            name: "光復圳1-1號池",
                            time: "115/05/15 16時",
                            maxStorage: 6.67,
                            effectiveStorage: 3.78,
                            storageRate: 57,
                        },
                        {
                            name: "...",
                            time: "115/05/15 16時",
                            maxStorage: 9.67,
                            effectiveStorage: 2.56,
                            storageRate: 26,
                        },
                        {
                            name: "光復圳1-4號池",
                            time: "115/05/15 16時",
                            maxStorage: 11.1,
                            effectiveStorage: 4.22,
                            storageRate: 38,
                        },
                    ],
                },
            },
            crop: {
                groupCount: 3,
                floodedAreaDate: "115/3/5",
                recentFloodedArea: 182,
                researchAverage: { firstSeason: 135, secondSeason: 144 },
                agencyAverage: { firstSeason: 122, secondSeason: 157 },
                years: ["111", "112", "113", "114", "115", "平均"],
                rows: [
                    {
                        name: "光復圳1-1號池小組",
                        floodedArea: 20,
                        researchFirstSeason: [
                            15.6, 14.1, 16.8, 13.9, 12.7, 15.0,
                        ],
                        researchSecondSeason: [4.9, 4.5, 5.8, 3.8, 5.9, 5.0],
                        agencyFirstSeason: [13.1, 15.6, 12.7, 12.5, 16.5, 15.0],
                        agencySecondSeason: [4.9, 13.7, 16.8, 14.2, 15.4, 5.0],
                    },
                    {
                        name: "光復圳1-2號池小組",
                        floodedArea: 18,
                        researchFirstSeason: [
                            15.6, 14.1, 16.8, 13.9, 12.7, 15.0,
                        ],
                        researchSecondSeason: [4.9, 4.5, 5.8, 3.8, 5.9, 5.0],
                        agencyFirstSeason: [13.1, 15.6, 12.7, 12.5, 16.5, 15.0],
                        agencySecondSeason: [4.9, 13.7, 16.8, 14.2, 15.4, 5.0],
                    },
                    {
                        name: "光復圳1-3號池小組",
                        floodedArea: 15,
                        researchFirstSeason: [
                            15.6, 14.1, 16.8, 13.9, 12.7, 15.0,
                        ],
                        researchSecondSeason: [4.9, 4.5, 5.8, 3.8, 5.9, 5.0],
                        agencyFirstSeason: [13.1, 15.6, 12.7, 12.5, 16.5, 15.0],
                        agencySecondSeason: [4.9, 13.7, 16.8, 14.2, 15.4, 5.0],
                    },
                    {
                        name: "光復圳1-4號池小組",
                        floodedArea: 33,
                        researchFirstSeason: [
                            15.6, 14.1, 16.8, 13.9, 12.7, 15.0,
                        ],
                        researchSecondSeason: [4.9, 4.5, 5.8, 3.8, 5.9, 5.0],
                        agencyFirstSeason: [13.1, 15.6, 12.7, 12.5, 16.5, 15.0],
                        agencySecondSeason: [4.9, 13.7, 16.8, 14.2, 15.4, 5.0],
                    },
                ],
            },
            location: {
                name: "光復圳1支線",
                address: "桃園管理處湖口工作站灌區",
                wgs84: { x: 121.110114, y: 24.94375 },
                tm97: { x: 261120, y: 2759552 },
            },
        },
    },
    grp: {
        "03009001": {
            name: "光復圳1-1號池小組",
            availableTabs: ["irrigation", "waterSource", "crop"],
            irrigation: {
                groupCount: 1,
                benefitArea: 79,
                mainLineDirectArea: 0,
                branchLineDirectArea: 0,
                lateralLineDirectArea: 0,
                groups: [],
            },
            pondCount: 1,
            maxStorage: 6.67,
            effectiveStorage: 3.78,
            storageRate: 57,
            ponds: [
                {
                    name: "光復圳1-1號池",
                    maxStorage: 6.67,
                    time: "115/05/15 16時",
                    effectiveStorage: 3.78,
                    storageRate: 57,
                },
            ],
            waterSource: {
                intakeChannel: { row: [{ type: "渠道", name: "光復圳" }] },
                pondSummary: {
                    row: [
                        {
                            name: "光復圳1-1號池",
                            time: "115/05/15 16時",
                            maxStorage: 6.67,
                            effectiveStorage: 3.78,
                            storageRate: 57,
                        },
                    ],
                },
            },
            crop: {
                groupCount: 1,
                floodedAreaDate: "115/3/5",
                recentFloodedArea: 20,
                researchAverage: { firstSeason: 15, secondSeason: 5 },
                agencyAverage: { firstSeason: 15, secondSeason: 5 },
                years: ["111", "112", "113", "114", "115", "平均"],
                rows: [
                    {
                        name: "光復圳1-1號池小組",
                        floodedArea: 20,
                        researchFirstSeason: [
                            15.6, 14.1, 16.8, 13.9, 12.7, 15.0,
                        ],
                        researchSecondSeason: [4.9, 4.5, 5.8, 3.8, 5.9, 5.0],
                        agencyFirstSeason: [13.1, 15.6, 12.7, 12.5, 16.5, 15.0],
                        agencySecondSeason: [4.9, 13.7, 16.8, 14.2, 15.4, 5.0],
                    },
                ],
            },
            location: {
                name: "光復圳1-1號池小組",
                address: "桃園管理處湖口工作站灌區",
                wgs84: { x: 121.110114, y: 24.94375 },
                tm97: { x: 261120, y: 2759552 },
            },
        },
        "03009002": {
            name: "光復圳1-2號池小組",
            availableTabs: ["irrigation", "waterSource", "crop"],
            irrigation: {
                groupCount: 1,
                benefitArea: 33,
                mainLineDirectArea: 0,
                branchLineDirectArea: 0,
                lateralLineDirectArea: 0,
                groups: [],
            },
            pondCount: 1,
            maxStorage: 9.67,
            effectiveStorage: 2.56,
            storageRate: 26,
            ponds: [
                {
                    name: "光復圳1-2號池",
                    maxStorage: 9.67,
                    time: "115/05/15 16時",
                    effectiveStorage: 2.56,
                    storageRate: 26,
                },
            ],
            waterSource: {
                intakeChannel: {
                    row: [
                        {
                            type: "河水堰",
                            name: "社子溪02號河水堰",
                        },
                    ],
                },
                pondSummary: {
                    row: [
                        {
                            name: "光復圳1-2號池",
                            time: "115/05/15 16時",
                            maxStorage: 9.67,
                            effectiveStorage: 2.56,
                            storageRate: 26,
                        },
                    ],
                },
            },
            crop: {
                groupCount: 1,
                floodedAreaDate: "115/3/5",
                recentFloodedArea: 18,
                researchAverage: { firstSeason: 9, secondSeason: 9 },
                agencyAverage: { firstSeason: 9, secondSeason: 9 },
                years: ["111", "112", "113", "114", "115", "平均"],
                rows: [
                    {
                        name: "光復圳1-2號池小組",
                        floodedArea: 20,
                        researchFirstSeason: [
                            15.6, 14.1, 16.8, 13.9, 12.7, 15.0,
                        ],
                        researchSecondSeason: [4.9, 4.5, 5.8, 3.8, 5.9, 5.0],
                        agencyFirstSeason: [13.1, 15.6, 12.7, 12.5, 16.5, 15.0],
                        agencySecondSeason: [4.9, 13.7, 16.8, 14.2, 15.4, 5.0],
                    },
                ],
            },
            location: {
                name: "光復圳1-2號池小組",
                address: "桃園管理處湖口工作站灌區",
                wgs84: { x: 121.1112, y: 24.9441 },
                tm97: { x: 261230, y: 2759591 },
            },
        },
        "03009003": {
            name: "光復圳1-3號池小組",
            availableTabs: ["irrigation", "waterSource", "crop"],
            irrigation: {
                groupCount: 1,
                benefitArea: 35,
                mainLineDirectArea: 0,
                branchLineDirectArea: 0,
                lateralLineDirectArea: 0,
                groups: [],
            },
            pondCount: 1,
            maxStorage: 10.56,
            effectiveStorage: 3.53,
            storageRate: 33,
            ponds: [
                {
                    name: "光復圳1-3號池",
                    maxStorage: 10.56,
                    time: "115/05/15 16時",
                    effectiveStorage: 3.53,
                    storageRate: 33,
                },
            ],
            waterSource: {
                intakeChannel: {
                    row: [
                        {
                            type: "河水堰",
                            name: "社子溪03號河水堰",
                        },
                    ],
                },
                pondSummary: {
                    row: [
                        {
                            name: "光復圳1-3號池",
                            time: "115/05/15 16時",
                            maxStorage: 10.56,
                            effectiveStorage: 3.53,
                            storageRate: 33,
                        },
                    ],
                },
            },
            crop: {
                groupCount: 1,
                floodedAreaDate: "115/3/5",
                recentFloodedArea: 35.05,
                researchAverage: { firstSeason: 15.05, secondSeason: 20 },
                agencyAverage: { firstSeason: 15.05, secondSeason: 20 },
                years: ["111", "112", "113", "114", "115", "平均"],
                rows: [
                    {
                        name: "光復圳1-3號池小組",
                        floodedArea: 20,
                        researchFirstSeason: [
                            15.6, 14.1, 16.8, 13.9, 12.7, 15.0,
                        ],
                        researchSecondSeason: [4.9, 4.5, 5.8, 3.8, 5.9, 5.0],
                        agencyFirstSeason: [13.1, 15.6, 12.7, 12.5, 16.5, 15.0],
                        agencySecondSeason: [4.9, 13.7, 16.8, 14.2, 15.4, 5.0],
                    },
                ],
            },
            location: {
                name: "光復圳1-3號池小組",
                address: "桃園管理處湖口工作站灌區",
                wgs84: { x: 121.112, y: 24.9446 },
                tm97: { x: 261310, y: 2759646 },
            },
        },
        "03009004": {
            name: "光復圳1-4號池小組",
            availableTabs: ["irrigation", "waterSource", "crop"],
            irrigation: {
                groupCount: 1,
                benefitArea: 53,
                mainLineDirectArea: 0,
                branchLineDirectArea: 0,
                lateralLineDirectArea: 0,
                groups: [],
            },
            pondCount: 1,
            maxStorage: 11.1,
            effectiveStorage: 4.22,
            storageRate: 38,
            ponds: [
                {
                    name: "光復圳1-4號池",
                    maxStorage: 11.1,
                    time: "115/05/15 16時",
                    effectiveStorage: 4.22,
                    storageRate: 38,
                },
            ],
            waterSource: {
                intakeChannel: {
                    row: [
                        {
                            type: "河水堰",
                            name: "社子溪04號河水堰",
                        },
                    ],
                },
                pondSummary: {
                    row: [
                        {
                            name: "光復圳1-4號池",
                            time: "115/05/15 16時",
                            maxStorage: 11.1,
                            effectiveStorage: 4.22,
                            storageRate: 38,
                        },
                    ],
                },
            },
            crop: {
                groupCount: 1,
                floodedAreaDate: "115/3/5",
                recentFloodedArea: 53.41,
                researchAverage: { firstSeason: 23, secondSeason: 30.41 },
                agencyAverage: { firstSeason: 23, secondSeason: 30.41 },
                years: ["111", "112", "113", "114", "115", "平均"],
                rows: [
                    {
                        name: "光復圳1-4號池小組",
                        floodedArea: 53.41,
                        researchFirstSeason: [
                            15.6, 14.1, 16.8, 13.9, 12.7, 15.0,
                        ],
                        researchSecondSeason: [4.9, 4.5, 5.8, 3.8, 5.9, 5.0],
                        agencyFirstSeason: [13.1, 15.6, 12.7, 12.5, 16.5, 15.0],
                        agencySecondSeason: [4.9, 13.7, 16.8, 14.2, 15.4, 5.0],
                    },
                ],
            },
            location: {
                name: "光復圳1-4號池小組",
                address: "桃園管理處湖口工作站灌區",
                wgs84: { x: 121.1128, y: 24.945 },
                tm97: { x: 261391, y: 2759690 },
            },
        },
    },
    pound: {
        "03009001": {
            name: "光復圳1-1號池",
            availableTabs: [
                "pond",
                "irrigationSupply",
                "waterSource",
                "sensor",
                "location",
            ],
            irrigationSupply: {
                group: {
                    row: [
                        {
                            name: "光復圳1-1號池小組",
                        },
                    ],
                },
                pond: {
                    row: [],
                },
            },
            pond: {
                updatedAt: "115/05/15 16時",
                maxStorage: 6.67,
                effectiveStorage: 3.78,
                storageRate: 57,
            },
            waterSource: {
                intakeChannel: {
                    row: [{ type: "渠道", name: "光復圳1支線" }],
                },
                pondSummary: {
                    row: [],
                },
            },
            sensor: {
                name: "光復圳1-1號池",
                time: "115/05/15 16時",
                maxStorage: 6.67,
                effectiveStorage: 3.78,
                storageRate: 57,
            },
            location: {
                name: "光復圳1-1號池",
                address: "桃園管理處湖口工作站灌區",
                wgs84: { x: 121.0985, y: 24.94764 },
                tm97: { x: 259945, y: 2759982 },
            },
        },
        "03009002": {
            name: "光復圳1-2號池",
            availableTabs: [
                "pond",
                "irrigationSupply",
                "waterSource",
                "sensor",
                "location",
            ],
            irrigationSupply: {
                group: {
                    row: [
                        {
                            name: "光復圳1-2號池小組",
                        },
                    ],
                },
                pond: {
                    row: [],
                },
            },
            pond: {
                updatedAt: "115/05/15 16時",
                maxStorage: 9.67,
                effectiveStorage: 2.56,
                storageRate: 26,
            },
            waterSource: {
                intakeChannel: {
                    row: [
                        { type: "渠道", name: "光復圳1支線" },
                        {
                            type: "河水堰",
                            name: "社子溪02號河水堰",
                        },
                    ],
                },
                pondSummary: {
                    row: [],
                },
            },
            sensor: {
                name: "光復圳1-2號池",
                time: "115/05/15 16時",
                maxStorage: 9.67,
                effectiveStorage: 2.56,
                storageRate: 26,
            },
            location: {
                name: "光復圳1-2號池",
                address: "桃園管理處湖口工作站灌區",
                wgs84: { x: 121.0898, y: 24.955 },
                tm97: { x: 259072, y: 2760793 },
            },
        },
        "03009003": {
            name: "光復圳1-3號池",
            availableTabs: [
                "pond",
                "irrigationSupply",
                "waterSource",
                "sensor",
                "location",
            ],
            irrigationSupply: {
                group: {
                    row: [
                        {
                            name: "光復圳1-3號池小組",
                        },
                    ],
                },
                pond: {
                    row: [],
                },
            },
            pond: {
                updatedAt: "115/05/15 16時",
                maxStorage: 10.56,
                effectiveStorage: 3.53,
                storageRate: 33,
            },
            waterSource: {
                intakeChannel: {
                    row: [
                        { type: "渠道", name: "光復圳1支線" },
                        {
                            type: "河水堰",
                            name: "社子溪02號河水堰",
                        },
                    ],
                },
                pondSummary: {
                    row: [],
                },
            },
            sensor: {
                name: "光復圳1-3號池",
                time: "115/05/15 16時",
                maxStorage: 10.56,
                effectiveStorage: 3.53,
                storageRate: 33,
            },
            location: {
                name: "光復圳1-3號池",
                address: "桃園管理處湖口工作站灌區",
                wgs84: { x: 121.0855, y: 24.9617 },
                tm97: { x: 258629, y: 2761536 },
            },
        },
        "03009004": {
            name: "光復圳1-4號池",
            availableTabs: [
                "pond",
                "irrigationSupply",
                "waterSource",
                "sensor",
                "location",
            ],
            irrigationSupply: {
                group: {
                    row: [
                        {
                            name: "光復圳1-4號池小組",
                        },
                    ],
                },
                pond: {
                    row: [],
                },
            },
            pond: {
                updatedAt: "115/05/15 16時",
                maxStorage: 11.1,
                effectiveStorage: 4.22,
                storageRate: 38,
            },
            waterSource: {
                intakeChannel: {
                    row: [
                        { type: "渠道", name: "光復圳1支線" },
                        {
                            type: "河水堰",
                            name: "社子溪02號河水堰",
                        },
                    ],
                },
                pondSummary: {
                    row: [],
                },
            },
            sensor: {
                name: "光復圳1-4號池",
                time: "115/05/15 16時",
                maxStorage: 11.1,
                effectiveStorage: 4.22,
                storageRate: 38,
            },
            location: {
                name: "光復圳1-4號池",
                address: "桃園管理處湖口工作站灌區",
                wgs84: { x: 121.0804, y: 24.9638 },
                tm97: { x: 258120, y: 2761767 },
            },
        },
    },
    sensor: {
        "03009001": {
            name: "光復圳前",
            availableTabs: ["sensor", "media", "location"],
            sensor: {
                name: "光復圳前",
                time: "115/05/15 16時",
                waterLevel: 0.8,
                flow: 0.5,
                waterLevelAlertThreshold: 1.5,
            },
            media: {
                images: [
                    {
                        title: "sensor_03009001_1",
                        url: "/images/sensor_03009001/1.png",
                        description: null,
                    },
                ],
            },
            location: {
                name: "光復圳前",
                address: "桃園管理處湖口工作站灌區",
                wgs84: { x: 121.1153, y: 24.94391 },
                tm97: { x: 261644, y: 2759570 },
            },
        },
        "03009002": {
            name: "光復圳圓井退水門",
            availableTabs: ["sensor", "media", "location"],
            sensor: {
                name: "光復圳圓井退水門",
                time: "115/05/15 16時",
                waterLevel: 0.8,
                flow: 2,
                waterLevelAlertThreshold: 1.5,
            },
            media: {
                images: [
                    {
                        title: "sensor_03009002_1",
                        url: "/images/sensor_03009002/1.png",
                        description: null,
                    },
                ],
            },
            location: {
                name: "光復圳圓井退水門",
                address: "桃園管理處湖口工作站灌區",
                wgs84: { x: 121.1092, y: 24.94401 },
                tm97: { x: 261028, y: 2759580 },
            },
        },
        "03009003": {
            name: "光復圳1支線取水",
            availableTabs: ["sensor", "media", "location"],
            sensor: {
                name: "光復圳1支線取水",
                time: "115/05/15 16時",
                waterLevel: 0.8,
                flow: 0.5,
                waterLevelAlertThreshold: 1.5,
            },
            media: {
                images: [
                    {
                        title: "sensor_03009005_1",
                        url: "/images/sensor_03009005/1.png",
                        description: null,
                    },
                ],
            },
            location: {
                name: "光復圳1支線取水",
                address: "桃園管理處湖口工作站灌區",
                wgs84: { x: 121.1032, y: 24.94704 },
                tm97: { x: 260421, y: 2759916 },
            },
        },
        "03009004": {
            name: "光復圳1支線取水後",
            availableTabs: ["sensor", "media", "location"],
            sensor: {
                name: "光復圳1支線取水後",
                time: "115/05/15 16時",
                waterLevel: 0.8,
                flow: 0.5,
                waterLevelAlertThreshold: 1.5,
            },
            media: {
                images: [
                    {
                        title: "sensor_03009006_1",
                        url: "/images/sensor_03009006/1.png",
                        description: null,
                    },
                ],
            },
            location: {
                name: "光復圳1支線取水後",
                address: "桃園管理處湖口工作站灌區",
                wgs84: { x: 121.1032, y: 24.94657 },
                tm97: { x: 260422, y: 2759864 },
            },
        },
    },
    weir: {
        "03009001": {
            name: "社子溪01號河水堰",
            availableTabs: ["weir", "irrigationSupply", "media", "location"],
            weir: {
                intakeDirection: "左岸",
                riverSystem: "社子溪",
                branchLine: null,
                waterSource: "社子溪",
                waterRightStatus: "有效水權",
                waterRightNumber: "H0110136",
                applicationDate: "2023-11-08",
                waterRightOwner: "農業部農田水利署桃園管理處",
                approvedWaterRightStartDate: "2024-01-01",
                approvedWaterRightEndDate: "2028-12-31",
                waterUsePurpose: "農業用水",
                referencedWaterSource: "社子溪水系社子溪支流",
                waterUseArea: "楊梅區下陰影窩段688地號等3088筆土地",
                waterUseMethod: "自然流方式引水",
                intakeLocation: "桃園市楊梅區民豐段0065-0000地號",
                returnWaterLocation: null,
                monthlyWaterUse: [
                    {
                        month: "一月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "二月",
                        monthlyIntakeDays: 28,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "三月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "四月",
                        monthlyIntakeDays: 30,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "五月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "六月",
                        monthlyIntakeDays: 30,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "七月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "八月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "九月",
                        monthlyIntakeDays: 30,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "十月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "十一月",
                        monthlyIntakeDays: 30,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "十二月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                ],
                hydraulicHeadHeight: null,
                groundwaterWellDepth: null,
                registrationAuthority: "桃園市政府",
            },
            irrigationSupply: {
                group: {
                    row: [],
                },
                pond: {
                    row: [],
                },
            },
            media: {
                images: [
                    {
                        title: "weir_03009001_1",
                        url: "/images/weir_03009001/1.png",
                        description: "社子溪01號河水堰",
                    },
                ],
            },
            location: {
                name: "社子溪01號河水堰",
                address: "桃園管理處湖口工作站灌區",
                wgs84: { x: 121.1147, y: 24.941 },
                tm97: { x: 261588, y: 2759244 },
            },
        },
        "03009002": {
            name: "社子溪02號河水堰",
            availableTabs: ["weir", "irrigationSupply", "media", "location"],
            weir: {
                intakeDirection: "左岸",
                riverSystem: "社子溪",
                branchLine: null,
                waterSource: "社子溪",
                waterRightStatus: "有效水權",
                waterRightNumber: "H0112043",
                applicationDate: "2024-06-20",
                waterRightOwner: "農業部農田水利署桃園管理處",
                approvedWaterRightStartDate: "2024-09-01",
                approvedWaterRightEndDate: "2029-08-31",
                waterUsePurpose: "農業用水",
                referencedWaterSource: "社子溪水系社子溪支流",
                waterUseArea:
                    "桃園市新屋區社子段304地號等100筆土地，灌溉面積7.540033公頃",
                waterUseMethod: "自然流方式引水",
                intakeLocation:
                    "桃園市楊梅區民有段0173-0000地號旁未登錄地-0000地號",
                returnWaterLocation: null,
                monthlyWaterUse: [
                    {
                        month: "一月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "二月",
                        monthlyIntakeDays: 28,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "三月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "四月",
                        monthlyIntakeDays: 30,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "五月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "六月",
                        monthlyIntakeDays: 30,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "七月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "八月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "九月",
                        monthlyIntakeDays: 30,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "十月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "十一月",
                        monthlyIntakeDays: 30,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "十二月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                ],
                hydraulicHeadHeight: null,
                groundwaterWellDepth: null,
                registrationAuthority: "桃園市政府",
            },
            irrigationSupply: {
                group: {
                    row: [
                        {
                            name: "光復圳1-1號池小組",
                        },
                        {
                            name: "光復圳1-2號池小組",
                        },
                    ],
                },
                pond: {
                    row: [
                        {
                            name: "光復圳1-2號池",
                            time: "115/05/15 16時",
                            maxStorage: 9.67,
                            effectiveStorage: 2.56,
                            storageRate: 26,
                        },
                        {
                            name: "光復圳1-3號池",
                            time: "115/05/15 16時",
                            maxStorage: 10.56,
                            effectiveStorage: 3.53,
                            storageRate: 33,
                        },
                        {
                            name: "光復圳1-4號池",
                            time: "115/05/15 16時",
                            maxStorage: 11.1,
                            effectiveStorage: 4.22,
                            storageRate: 38,
                        },
                    ],
                },
            },
            media: {
                images: [
                    {
                        title: "weir_03009002_1",
                        url: "/images/weir_03009002/1.png",
                        description: null,
                    },
                ],
            },
            location: {
                name: "光復圳1-社子溪02號河水堰",
                address: "桃園管理處湖口工作站灌區",
                wgs84: { x: 121.1052, y: 24.9478 },
                tm97: { x: 260624, y: 2759995 },
            },
        },
        "03009003": {
            name: "社子溪03號河水堰",
            availableTabs: ["weir", "irrigationSupply", "media", "location"],
            weir: {
                intakeDirection: "左岸",
                riverSystem: "社子溪",
                branchLine: null,
                waterSource: "社子溪",
                waterRightStatus: "有效水權",
                waterRightNumber: "H0110125",
                applicationDate: "2023-11-08",
                waterRightOwner: "農業部農田水利署桃園管理處",
                approvedWaterRightStartDate: "2024-01-01",
                approvedWaterRightEndDate: "2028-12-31",
                waterUsePurpose: "農業用水",
                referencedWaterSource: "社子溪水系社子溪社子溪(3號河水堰)",
                waterUseArea:
                    "灌溉用途桃園市新屋區社子等段，共19筆土地，灌溉面積0.92283公頃",
                waterUseMethod: "自然流方式引水",
                intakeLocation: "桃園市新屋區社子段0001-0005地號旁未登錄地",
                returnWaterLocation: null,
                monthlyWaterUse: [
                    {
                        month: "一月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "二月",
                        monthlyIntakeDays: 28,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "三月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "四月",
                        monthlyIntakeDays: 30,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "五月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "六月",
                        monthlyIntakeDays: 30,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "七月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "八月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "九月",
                        monthlyIntakeDays: 30,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "十月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "十一月",
                        monthlyIntakeDays: 30,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                    {
                        month: "十二月",
                        monthlyIntakeDays: 31,
                        waterVolumePerSecond: 0.016,
                        dailyWaterUseHours: 24,
                    },
                ],
                hydraulicHeadHeight: null,
                groundwaterWellDepth: null,
                registrationAuthority: "桃園市政府",
            },
            irrigationSupply: {
                group: {
                    row: [
                        {
                            name: "光復圳1-3號池小組",
                        },
                    ],
                },
                pond: {
                    row: [],
                },
            },
            media: {
                images: [
                    {
                        title: "weir_03009003_1",
                        url: "/images/weir_03009003/1.png",
                        description: null,
                    },
                    {
                        title: "weir_03009003_2",
                        url: "/images/weir_03009003/2.png",
                        description: null,
                    },
                ],
            },
            location: {
                name: "社子溪03號河水堰",
                address: "桃園管理處湖口工作站灌區",
                wgs84: { x: 121.0941, y: 24.9606 },
                tm97: { x: 258702, y: 2762031 },
            },
        },
        "03009004": {
            name: "社子溪04號河水堰",
            availableTabs: ["weir", "irrigationSupply", "media", "location"],
            weir: {
                intakeDirection: "左岸",
                riverSystem: "社子溪",
                branchLine: null,
                waterSource: "社子溪",
                waterRightStatus: null,
                waterRightNumber: null,
                applicationDate: null,
                waterRightOwner: null,
                approvedWaterRightStartDate: null,
                approvedWaterRightEndDate: null,
                waterUsePurpose: null,
                referencedWaterSource: null,
                waterUseArea: null,
                waterUseMethod: null,
                intakeLocation: null,
                returnWaterLocation: null,
                monthlyWaterUse: [],
                hydraulicHeadHeight: null,
                groundwaterWellDepth: null,
                registrationAuthority: null,
            },
            irrigationSupply: {
                group: {
                    row: [
                        {
                            name: "光復圳1-4號池小組",
                        },
                    ],
                },
                pond: {
                    row: [],
                },
            },
            media: {
                images: [
                    {
                        title: "weir_03009004_1",
                        url: "/images/weir_03009004/1.png",
                        description: null,
                    },
                    {
                        title: "weir_03009004_2",
                        url: "/images/weir_03009004/2.png",
                        description: null,
                    },
                ],
            },
            location: {
                name: "社子溪04號河水堰",
                address: "桃園管理處湖口工作站灌區",
                wgs84: { x: 121.0862, y: 24.96615 },
                tm97: { x: 258703, y: 2762031 },
            },
        },
    },
    divwork: {
        "03009001": {
            name: "分水工03009001",
            availableTabs: ["media", "location", "monitor"],
            monitor: {
                imageUrl: "https://ai.iatyu.nat.gov.tw/video/Image/03020202",
            },
            media: {
                images: [
                    {
                        title: "divwork_03009001_1",
                        url: "/images/divwork_03009001/1.png",
                        description: null,
                    },
                    {
                        title: "divwork_03009001_2",
                        url: "/images/divwork_03009001/2.jpg",
                        description: null,
                    },
                    {
                        title: "divwork_03009001_3",
                        url: "/images/divwork_03009001/3.jpg",
                        description: null,
                    },
                ],
            },
            location: {
                name: "分水工03009001",
                address: "桃園管理處湖口工作站灌區",
                wgs84: { x: 121.110114, y: 24.94375 },
                tm97: { x: 261120, y: 2759552 },
            },
        },
    },
};

const hasValue = (value) =>
    value !== null && value !== undefined && value !== "";

const hasAnyValue = (source, keys) => {
    return keys.some((key) => hasValue(source?.[key]));
};

const normalizeBlankValue = (value) => {
    if (value === "-") {
        return null;
    }

    return value ?? null;
};

const normalizeIrrigationGroups = (groups = []) =>
    groups.map((group) => ({
        ...group,
        benefitArea: group.benefitArea ?? group.irrigationArea ?? null,
        mainLineDirectArea: group.mainLineDirectArea ?? 0,
        branchLineDirectArea:
            group.branchLineDirectArea ??
            group.directArea ??
            group.irrigationArea ??
            group.benefitArea ??
            0,
        lateralLineDirectArea: group.lateralLineDirectArea ?? 0,
    }));

const normalizeIrrigation = (record) => {
    const irrigation = {
        ...(record.irrigation ?? {}),
    };

    if (
        hasAnyValue(record, [
            "irrigationGroupCount",
            "irrigationArea",
            "benefitArea",
            "directIrrigationGroupCount",
            "directIrrigationArea",
            "mainLineDirectArea",
            "branchLineDirectArea",
            "lateralLineDirectArea",
        ]) ||
        record.groups
    ) {
        irrigation.groupCount =
            record.irrigationGroupCount ?? irrigation.groupCount;
        irrigation.benefitArea =
            record.benefitArea ??
            record.irrigationArea ??
            irrigation.benefitArea;
        irrigation.directGroupCount =
            record.directIrrigationGroupCount ?? irrigation.directGroupCount;
        irrigation.mainLineDirectArea =
            record.mainLineDirectArea ?? irrigation.mainLineDirectArea ?? 0;
        irrigation.branchLineDirectArea =
            record.branchLineDirectArea ??
            irrigation.branchLineDirectArea ??
            record.directIrrigationArea ??
            0;
        irrigation.lateralLineDirectArea =
            record.lateralLineDirectArea ??
            irrigation.lateralLineDirectArea ??
            0;
        irrigation.groups = record.groups ?? irrigation.groups ?? [];
    }

    if (
        hasAnyValue(irrigation, [
            "benefitArea",
            "area",
            "mainLineDirectArea",
            "branchLineDirectArea",
            "lateralLineDirectArea",
            "directArea",
            "directGroupCount",
        ]) ||
        irrigation.groups
    ) {
        irrigation.benefitArea = irrigation.benefitArea ?? irrigation.area;
        irrigation.mainLineDirectArea = irrigation.mainLineDirectArea ?? 0;
        irrigation.branchLineDirectArea =
            irrigation.branchLineDirectArea ?? irrigation.directArea ?? 0;
        irrigation.lateralLineDirectArea =
            irrigation.lateralLineDirectArea ?? 0;
        irrigation.groups = normalizeIrrigationGroups(irrigation.groups ?? []);
    }

    return Object.keys(irrigation).length ? irrigation : undefined;
};

const normalizePond = (record) => {
    const pond = {
        ...(record.pond ?? {}),
    };

    if (
        hasAnyValue(record, [
            "pondCount",
            "maxStorage",
            "effectiveStorage",
            "storageRate",
        ]) ||
        record.ponds
    ) {
        pond.count = record.pondCount;
        pond.maxStorage = record.maxStorage;
        pond.effectiveStorage = record.effectiveStorage;
        pond.storageRate = record.storageRate;
        pond.rows = record.ponds ?? [];
    }

    return Object.keys(pond).length ? pond : undefined;
};

const normalizeWaterSource = (record) => {
    const waterSource = {
        ...(record.waterSource ?? {}),
    };

    if (waterSource.intakeChannel) {
        waterSource.intakeChannel = {
            ...waterSource.intakeChannel,
            row: (
                waterSource.intakeChannel.row ??
                waterSource.intakeChannel.rows ??
                []
            ).map((row) => ({
                type: normalizeBlankValue(row.type),
                name: normalizeBlankValue(row.name),
            })),
        };
    }

    if (waterSource.pondSummary) {
        waterSource.pondSummary = {
            ...waterSource.pondSummary,
            row: (waterSource.pondSummary.row ?? []).map((row) => ({
                name: normalizeBlankValue(row.name),
                time: normalizeBlankValue(row.time ?? row.updatedAt),
                maxStorage: normalizeBlankValue(row.maxStorage),
                effectiveStorage: normalizeBlankValue(row.effectiveStorage),
                storageRate: normalizeBlankValue(row.storageRate),
            })),
        };
    }

    return Object.keys(waterSource).length ? waterSource : undefined;
};

const normalizeIrrigationSupply = (record) => {
    if (!record.irrigationSupply) {
        return undefined;
    }

    const group = record.irrigationSupply.group
        ? {
              ...record.irrigationSupply.group,
              row: (
                  record.irrigationSupply.group.row ??
                  record.irrigationSupply.group.rows ??
                  []
              ).map((group) => ({
                  name: group.name ?? null,
              })),
          }
        : undefined;

    return {
        group,
        pond: record.irrigationSupply.pond,
    };
};

const normalizeWeir = (record) => {
    if (!record.weir) {
        return undefined;
    }

    const weir = {
        ...record.weir,
    };

    if (hasValue(weir.waterRightNumber)) {
        weir.waterRightStatus = weir.waterRightStatus ?? "有效水權";
    } else {
        weir.waterRightStatus = weir.waterRightStatus ?? "無水權，申請中";
    }

    return weir;
};

const normalizeCrop = (record) => {
    if (!record.crop) {
        return undefined;
    }

    return {
        agencyAverageNote: "備註:不包含未申報公糧之面積",
        ...record.crop,
    };
};

const normalizeLocation = (record) => {
    if (!record.location) {
        return undefined;
    }

    const location = {
        ...record.location,
    };

    location.wgs84 = {
        x: location.wgs84?.x ?? null,
        y: location.wgs84?.y ?? null,
    };
    location.tm97 = {
        x: location.tm97?.x ?? location.tm97X ?? location.tm97Easting ?? null,
        y: location.tm97?.y ?? location.tm97Y ?? location.tm97Northing ?? null,
    };

    return location;
};

const normalizeMedia = (record) => {
    if (!record.media) {
        return undefined;
    }

    return {
        ...record.media,
        images: (record.media.images ?? []).map((image) => ({
            ...image,
            description: image.description ?? null,
        })),
    };
};

const normalizeDetailRecord = ({ type, id, record }) => {
    const irrigation = normalizeIrrigation(record);
    const pond = normalizePond(record);
    const waterSource = normalizeWaterSource(record);
    const irrigationSupply = normalizeIrrigationSupply(record);
    const weir = normalizeWeir(record);
    const crop = normalizeCrop(record);
    const location = normalizeLocation(record);
    const media = normalizeMedia(record);

    return {
        name: record.name,
        availableTabs: record.availableTabs,
        ...(irrigation ? { irrigation } : {}),
        ...(pond ? { pond } : {}),
        ...(weir ? { weir } : {}),
        ...(irrigationSupply ? { irrigationSupply } : {}),
        ...(waterSource ? { waterSource } : {}),
        ...(crop ? { crop } : {}),
        ...(record.sensor ? { sensor: record.sensor } : {}),
        ...(media ? { media } : {}),
        ...(location ? { location } : {}),
        ...(record.monitor ? { monitor: record.monitor } : {}),
        rawId: record.rawId ?? `${type}_${id}`,
        type,
        id,
        detailKey: `${type}_${id}`,
    };
};

export const detailMockRecords = Object.entries(detailOverrides).flatMap(
    ([type, recordsById]) => {
        return Object.entries(recordsById).map(([id, record]) => {
            return normalizeDetailRecord({ type, id, record });
        });
    },
);
