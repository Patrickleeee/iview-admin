const labelTop = {
    normal: {
        label: {
            show: true,
            position: 'center',
            formatter: '{b}',
            textStyle: {
                baseline: 'bottom'
            }
        },
        labelLine: {
            show: false
        }
    }
};
var labelFromatter = {
    normal: {
        label: {
            formatter: function (params) {
                return 100 - params.value + '%';
            },
            textStyle: {
                baseline: 'top'
            }
        }
    }
};
var labelBottom = {
    normal: {
        color: '#ccc',
        label: {
            show: true,
            position: 'center'
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(28,28,26,0)'
    }
};
var radius = [45, 70];

export default{
    legend: {
        x: 'center',
        y: 'center',
        data: [
            '小于12小时', '12到24小时', '24到36小时', '36到48小时', '48到60小时', '60到72小时', '72到84小时', '大于84小时'
        ]
    },
    title: {
        text: '上游原料采购统计',
        subtext: '',
        x: 'center'
    },
    backgroundColor: 'rgba(32, 32, 35, 0.1)',
    toolbox: {
        show: true,
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        width: '20%',
                        height: '30%',
                        itemStyle: {
                            normal: {
                                label: {
                                    formatter: function (params) {
                                        return 'other\n' + params.value + '%\n';
                                    },
                                    textStyle: {
                                        baseline: 'middle'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [
        {
            type: 'pie',
            center: ['20%', '30%'],
            radius: radius,
            x: '0%', // for funnel
            itemStyle: labelFromatter,
            data: [
                {name: 'other', value: 77, itemStyle: labelBottom},
                {name: '小于12小时', value: 23, itemStyle: labelTop}
            ]
        },
        {
            type: 'pie',
            center: ['40%', '30%'],
            radius: radius,
            x: '20%', // for funnel
            itemStyle: labelFromatter,
            data: [
                {name: 'other', value: 80, itemStyle: labelBottom},
                {name: '12到24小时', value: 20, itemStyle: labelTop}
            ]
        },
        {
            type: 'pie',
            center: ['60%', '30%'],
            radius: radius,
            x: '40%', // for funnel
            itemStyle: labelFromatter,
            data: [
                {name: 'other', value: 96, itemStyle: labelBottom},
                {name: '24到36小时', value: 4, itemStyle: labelTop}
            ]
        },
        {
            type: 'pie',
            center: ['80%', '30%'],
            radius: radius,
            x: '60%', // for funnel
            itemStyle: labelFromatter,
            data: [
                {name: 'other', value: 64, itemStyle: labelBottom},
                {name: '36到48小时', value: 36, itemStyle: labelTop}
            ]
        },
        {
            type: 'pie',
            center: ['20%', '70%'],
            radius: radius,
            x: '0%', // for funnel
            itemStyle: labelFromatter,
            data: [
                {name: 'other', value: 91, itemStyle: labelBottom},
                {name: '48到60小时', value: 9, itemStyle: labelTop}
            ]
        },
        {
            type: 'pie',
            center: ['40%', '70%'],
            radius: radius,
            y: '55%', // for funnel
            x: '20%', // for funnel
            itemStyle: labelFromatter,
            data: [
                {name: 'other', value: 95, itemStyle: labelBottom},
                {name: '60到72小时', value: 5, itemStyle: labelTop}
            ]
        },
        {
            type: 'pie',
            center: ['60%', '70%'],
            radius: radius,
            y: '55%', // for funnel
            x: '40%', // for funnel
            itemStyle: labelFromatter,
            data: [
                {name: 'other', value: 100, itemStyle: labelBottom},
                {name: '72到84小时', value: 0, itemStyle: labelTop}
            ]
        },
        {
            type: 'pie',
            center: ['80%', '70%'],
            radius: radius,
            y: '55%', // for funnel
            x: '60%', // for funnel
            itemStyle: labelFromatter,
            data: [
                {name: 'other', value: 98, itemStyle: labelBottom},
                {name: '大于84小时', value: 2, itemStyle: labelTop}
            ]
        }
    ]
};
