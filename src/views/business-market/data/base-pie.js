var data = [
    {
        value: 4500,
        name: '郭向阳'
    },
    {
        value: 250,
        name: '郭向伟'
    },
    {
        value: 250,
        name: '郭向亮'
    }
];
export default {
    backgroundColor: '#fff',
    title: {
        text: '注册资金',
        subtext: '2004-02-17',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16
        }
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: '{b}: {c}万元 ({d}%)'
    },
    series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['25%', '58%'],
        color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],

        label: {
            normal: {
                position: 'inner',
                formatter: '{d}%',

                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data
    }, {
        type: 'pie',
        radius: ['58%', '83%'],
        itemStyle: {
            normal: {
                color: '#F2F2F2'
            },
            emphasis: {
                // color: '#ADADAD'
                color: '#f02d57'
            }
        },
        label: {
            normal: {
                position: 'inner',
                formatter: '{b}:{c}万元',
                textStyle: {
                    color: '#777777',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
        },
        data: data
    }]
};
