export default {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['正常', '关注', '次级', '可疑', '损失']
    },
    series: [
        {
            name: '风控状态',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 2, name: '损失'},
                {value: 5, name: '可疑'},
                {value: 6, name: '次级'},
                {value: 8, name: '关注'},
                {value: 10, name: '正常'}
            ]
        }
    ]
};
