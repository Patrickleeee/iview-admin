<template>
    <div style="width:100%;height:100%;" id="user_flow"></div>
</template>

<script>
import echarts from 'echarts';

const option = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}万¥'
    },
    series: [
        {
            name: '可放款',
            type: 'gauge',
            min: 0,
            max: 1000,
            detail: {
                formatter: '{value}万¥',
                fontSize: 18,
                offsetCenter: [0, '50px']
            },
            data: [{value: 50, name: '当月可放款'}],
            center: ['25%', '50%'],
            radius: '80%',
            title: {
                offsetCenter: [0, '80px']
            },
            axisLine: {
                lineStyle: {
                    // color: [],
                    width: 20
                }
            },
            splitLine: {
                length: 20
            }
        },
        {
            name: '待回款',
            type: 'gauge',
            min: 0,
            max: 1000,
            detail: {
                formatter: '{value}万¥',
                fontSize: 18,
                offsetCenter: [0, '50px']
            },
            data: [{value: 50, name: '当月待回款'}],
            center: ['75%', '50%'],
            radius: '80%',
            title: {
                offsetCenter: [0, '80px']
            },
            axisLine: {
                lineStyle: {
                    // color: [],
                    width: 20
                }
            },
            splitLine: {
                length: 20
            }
        }
    ]
};

export default {
    name: 'userFlow',
    mounted () {
        let userFlow = echarts.init(document.getElementById('user_flow'));
        option.series[0].data[0].value = (Math.random() * 1000).toFixed(2) - 0;
        option.series[1].data[0].value = (Math.random() * 1000).toFixed(2) - 0;
        userFlow.setOption(option);

        window.addEventListener('resize', function () {
            userFlow.resize();
        });
    }
};
</script>
