<template lang="html">
  <div class="dashboard">        
    <div class="flex-container column">
        <div class="item one" id="circlePieContainer1" style="transform: translate(-25%,-12%) scale(0.85);"></div>
        <div class="item one" id="circlePieContainer4" style="transform: translate(-25%,80%) scale(0.85);"></div>
        <div class="item-table"style="transform: translate(80%,-5%) scale(0.9);">
            <Table :border=true :columns="columns4" :data="data14" size="default"></Table>
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
            data1: [
                {value: 6584.4, name: '货币资金'},
                {value: 4492.0, name: '应收账款'},
                {value: 6569.7, name: '预付款项'},
                {value: 6881.8, name: '其他应收款'},
                {value: 18871.8, name: '存货'}
            ],
            title1: ['流动资产', '年初余额'],
            data4: [
                {value: 3071.2, name: '货币资金'},
                {value: 3188.1, name: '应收账款'},
                {value: 2723.7, name: '预付款项'},
                {value: 6900.0, name: '其他应收款'},
                {value: 14458.9, name: '存货'}
            ],
            title4: ['流动资产', '期末余额'],
            data5: [
                {value: 3197.0, name: '固定资产'},
                {value: 1364.4, name: '累计折旧'},
                {value: 1832.6, name: '固定资产净值'},
                {value: 59.1, name: '无形资产'},
                {value: 222.9, name: '长摊待摊费用'}
            ],
            title5: ['非流动资产', '期末余额'],
            data6: [
                {value: 3551.9, name: '短期借款'},
                {value: 2879.4, name: '应付票据'},
                {value: 3261.0, name: '应付账款 '},
                {value: 1518.5, name: '预收款项'},
                {value: 543.8, name: '应付职工薪酬'},
                {value: -1514.9, name: '应交税费'},
                {value: 618.6, name: ' 其他应付款'}
            ],
            title6: ['流动负债', '期末余额'],
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
            data14: [
                {
                    item: '货币资金',
                    startAmount: '65844945.87',
                    endAmount: '30712638.38'
                },
                {
                    item: '交易性金融资产',
                    startAmount: '--',
                    endAmount: '--'
                },
                {
                    item: '应收票据',
                    startAmount: '--',
                    endAmount: '--'
                },
                {
                    item: '应收账款',
                    startAmount: '44920879.89',
                    endAmount: '69000233.35'
                },
                {
                    item: '预付款项',
                    startAmount: '65697334.65',
                    endAmount: '27237497.67'
                },
                {
                    item: '应收利息',
                    startAmount: '--',
                    endAmount: '--'
                },
                {
                    item: '其他应收款',
                    startAmount: '68818861.86',
                    endAmount: '69000233.35'
                },
                {
                    item: '存货',
                    startAmount: '188718629.15',
                    endAmount: '144589746.46'
                },
                {
                    item: '一年内到期的非流动资产',
                    startAmount: '--',
                    endAmount: '--'
                },
                {
                    item: '其他流动资产',
                    startAmount: '--',
                    endAmount: '--'
                },
                {
                    item: '流动资产合计',
                    startAmount: '434000651.44',
                    endAmount: '303421933.80'
                }
            ],
            data17: [
                {item: '长期借款', startAmount: '--', endAmount: '--'},
                {item: '长期应付款', startAmount: '--', endAmount: '--'},
                {item: '递延所得税负债', startAmount: '--', endAmount: '--'},
                {item: '其他非流动负债', startAmount: '--', endAmount: '--'},
                {item: '非流动负债合计', startAmount: '--', endAmount: '--'}
            ],
            data18: [
                {item: '实收资本（或股本）', startAmount: '50,000,000.00', endAmount: '50,000,000.00'},
                {item: '资本公积', startAmount: '7,500,000.00', endAmount: '7,500,000.00'},
                {item: '盈余公积', startAmount: '--', endAmount: '--'},
                {item: '未分配利润', startAmount: '207,498,786.10', endAmount: '165,152,327.73'},
                {item: '所有者权益（或股东权益）合计', startAmount: '264,998,786.10', endAmount: '222,652,327.73'}
            ]
        };
    },
    methods: {
        drawBasePie1 (data, title) {
            // pie
            var myPie1 = this.$echarts.init(document.getElementById('circlePieContainer1'));
            let circlePie1 = setCirclePie(data, title);
            myPie1.setOption(circlePie1);
        },
        drawBasePie2 (data, title) {
            var myPie2 = this.$echarts.init(document.getElementById('circlePieContainer2'));
            let circlePie2 = setCirclePie(data, title);
            myPie2.setOption(circlePie2);
        },
        drawBasePie3 (data, title) {
            var myPie3 = this.$echarts.init(document.getElementById('circlePieContainer3'));
            let circlePie3 = setCirclePie(data, title);
            myPie3.setOption(circlePie3);
        },
        drawBasePie4 (data, title) {
            var myPie4 = this.$echarts.init(document.getElementById('circlePieContainer4'));
            let circlePie4 = setCirclePie(data, title);
            myPie4.setOption(circlePie4);
        },
        drawBasePie5 (data, title) {
            var myPie5 = this.$echarts.init(document.getElementById('circlePieContainer5'));
            let circlePie5 = setCirclePie(data, title);
            myPie5.setOption(circlePie5);
        },
        drawBasePie6 (data, title) {
            var myPie6 = this.$echarts.init(document.getElementById('circlePieContainer6'));
            let circlePie6 = setCirclePie(data, title);
            myPie6.setOption(circlePie6);
        },
        _resize () {
            this.$root.charts.forEach(myChart => {
                myChart.resize();
            });
        }
    },
    mounted () {
        this.drawBasePie1(this.data1, this.title1);
        // this.drawBasePie2(this.data2, this.title2);
        // this.drawBasePie3(this.data3, this.title3);
        this.drawBasePie4(this.data4, this.title4);
        // this.drawBasePie5(this.data5, this.title5);
        // this.drawBasePie6(this.data6, this.title6);
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