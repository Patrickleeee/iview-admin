const setBarOption = () => {
    return {
        backgroundColor: '#ffffff',
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                color: '#fafafa'
            }

        },
        title: {
            text: '',
            subtext: ''
        },
        legend: {
            data: ['不合格', '合格']
        },
        // toolbox: {
        //     show: true,
        //     feature: {
        //         mark: {
        //             show: true
        //         },
        //         dataView: {
        //             show: true,
        //             readOnly: false
        //         },
        //         magicType: {
        //             show: true,
        //             type: ['stack', 'tiled']
        //         },
        //         restore: {
        //             show: true
        //         },
        //         saveAsImage: {
        //             show: true
        //         }
        //     }
        // },
        calculable: true,
        yAxis: [{
            type: 'category',
            data: ['其他风险', '法律风险', '财务风险', '经营风险']
        }],
        xAxis: [{
            name: '',
            type: 'value'
        }],

        series: [
            {
                name: '未触发',
                type: 'bar',
                stack: '总数',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'inside'
                        },
                        color: '#3CB371'
                    }
                },
                data: [0, 1, 7, 8]
            },
            {
                name: '触发',
                type: 'bar',
                stack: '总数',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'inside'
                        },
                        color: '#FF6347'
                    }
                },
                data: [1, 1, 2, 1]
            }

        ]
    };
};
export default setBarOption;
