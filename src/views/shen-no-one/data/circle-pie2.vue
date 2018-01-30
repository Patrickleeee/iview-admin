<template lang="html">
  <div class="dashboard">        
    <div class="flex-container column">
        <div class="item one" id="circlePieContainer2" style="transform: translate(-25%,-12%) scale(0.85);"></div>
        <div class="item one" id="circlePieContainer5" style="transform: translate(-25%,80%) scale(0.85);"></div>
        <div class="item-table"style="transform: translate(80%,-5%) scale(0.9);">
            <Table :border=true :columns="columns4" :data="data15" size="default"></Table>
        </div>
    </div>
  </div>
</template>
        
<script>
import setCirclePie from '../../business-market/data/circle-pie';
export default {
    name: 'circlePie',
    data () {
        return {
            setCirclePie,
            data2: [
                {value: 3197.0, name: '固定资产'},
                {value: 1364.4, name: '累计折旧'},
                {value: 1832.6, name: '固定资产净值'},
                {value: 59.1, name: '无形资产'},
                {value: 222.9, name: '长摊待摊费用'}
            ],
            title2: ['非流动资产', '年初余额'],
            data5: [
                {value: 3197.0, name: '固定资产'},
                {value: 1364.4, name: '累计折旧'},
                {value: 1832.6, name: '固定资产净值'},
                {value: 59.1, name: '无形资产'},
                {value: 222.9, name: '长摊待摊费用'}
            ],
            title5: ['非流动资产', '期末余额'],
            columns4: [
                {
                    title: '条目',
                    key: 'item'
                },
                {
                    title: '年初余额（单位：元）',
                    key: 'startAmount'
                }, {
                    title: '期末余额（单位：元）',
                    key: 'endAmount'
                }
            ],
            data15: [
                {
                    item: '长期应收款',
                    startAmount: '--',
                    endAmount: '--'
                },
                {
                    item: '固定资产',
                    startAmount: '31970870.8',
                    endAmount: '42458142.59'
                },
                {
                    item: '减：累计折旧',
                    startAmount: '13644315.6800001',
                    endAmount: '18006056.64'
                },
                {
                    item: '固定资产净值',
                    startAmount: '18326555.1199999',
                    endAmount: '24452085.95'
                },
                {
                    item: '在建工程',
                    startAmount: '--',
                    endAmount: '--'
                },
                {
                    item: '固定资产清理',
                    startAmount: '--',
                    endAmount: '--'
                },
                {
                    item: '无形资产',
                    startAmount: '591181.04',
                    endAmount: '679462.61'
                },
                {
                    item: '长摊待摊费用',
                    startAmount: '2229585.44',
                    endAmount: '2684337.57'
                },
                {
                    item: '递延所得税资产',
                    startAmount: '--',
                    endAmount: '--'
                },
                {
                    item: '其他非流动资产',
                    startAmount: '--',
                    endAmount: '--'
                },
                {
                    item: '非流动资产合计',
                    startAmount: '21147321.5999999',
                    endAmount: '27815886.13'
                }
            ]
        };
    },
    methods: {
        drawBasePie2 (data, title) {
            var myPie2 = this.$echarts.init(document.getElementById('circlePieContainer2'));
            let circlePie2 = setCirclePie(data, title);
            myPie2.setOption(circlePie2);
        },
        drawBasePie5 (data, title) {
            var myPie5 = this.$echarts.init(document.getElementById('circlePieContainer5'));
            let circlePie5 = setCirclePie(data, title);
            myPie5.setOption(circlePie5);
        },
        _resize () {
            this.$root.charts.forEach(myChart => {
                myChart.resize();
            });
        }
    },
    mounted () {
        this.drawBasePie2(this.data2, this.title2);
        this.drawBasePie5(this.data5, this.title5);
    }
};
</script>
        
<style scoped>
.item {
  padding: 0px;
  margin: 0px;
  width: 75%;
  height: 300px;
  position: absolute;
  transform: scale(1);
  text-align: left;
  transition: all 0.8s;
  background: rgba(32, 32, 35, 0.5);
}
.item-table {
  padding: 0px;
  margin: 0px;
  width: 50%;
  height: 300px;
  position: absolute;
  transform: scale(1);
  text-align: left;
  transition: all 0.8s;
  background: rgba(32, 32, 35, 0.5);
}
</style>