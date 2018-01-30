const setCirclePie = (echartData, titleData) => {
    var fontSize = 10;
    var rich = {
        yellow: {
            color: '#ffc72b',
            fontSize: fontSize * 2,
            padding: [5, 4],
            align: 'center'
        },
        total: {
            color: '#ffc72b',
            fontSize: fontSize * 4,
            align: 'center'
        },
        white: {
            color: '#fff',
            align: 'center',
            fontSize: fontSize * 1.4
        },
        blue: {
            color: '#49dff0',
            fontSize: fontSize * 1.4,
            align: 'center'
        },
        hr: {
            borderColor: '#0b5263',
            width: '100%',
            borderWidth: 1,
            height: 0
        }
    };
    return {
        backgroundColor: 'rgb(255, 255, 255)',
        title: {
            text: titleData[0],
            subtext: titleData[1],
            left: 'center',
            top: '47%',
            textStyle: {
                color: 'rgb(0,0,0)',
                fontSize: fontSize * 1.8,
                align: 'center'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} ({d}%)',
            textStyle: {
                fontSize: fontSize * 1.6
            }
        },
        series: [{
            name: 'pie',
            type: 'pie',
            radius: ['42%', '50%'],
            hoverAnimation: false,
            color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
            label: {
                normal: {
                    formatter: function (params, ticket, callback) {
                        var total = 0;
                        var percent = 0;
                        echartData.forEach(function (value, index, array) {
                            total += value.value;
                        });
                        percent = ((params.value / total) * 100).toFixed(1);
                        return '{red|' + params.name + '}\n{yellow|' + params.value + '万元' + '}{blue|' + percent + '%}';
                    },
                    rich: rich
                }
            },
            data: echartData
        }]
    };
};

export default setCirclePie;
