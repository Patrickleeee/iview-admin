<template lang="html">
  <div class="dashboard">        
    <div class="flex-container column">
        <div class="item one" id="circlePieContainer3" style="transform: translate(-25%,-12%) scale(0.85);"></div>
        <div class="item one" id="circlePieContainer6" style="transform: translate(-25%,80%) scale(0.85);"></div>
        <div class="item-table"style="transform: translate(80%,4%) scale(0.9);">
            <Table :border=true :columns="columns4" :data="data16" size="small"></Table>
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
            data3: [
                {value: 8635.3, name: '短期借款'},
                {value: 5319.8, name: '应付票据'},
                {value: 3309.6, name: '应付账款 '},
                {value: 1858.6, name: '预收款项'},
                {value: 472.6, name: '应付职工薪酬'},
                {value: -1397.8, name: '应交税费'},
                {value: 816.5, name: ' 其他应付款'}
            ],
            title3: ['流动负债', '年初余额'],
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
            data16: [
                {item: '短期借款', startAmount: '86,353,271.95', endAmount: '35,519,304.18'},
                {item: '应付票据', startAmount: '53,198,225.02', endAmount: '28,794,363.91'},
                {item: '应付账款', startAmount: '33,096,782.54', endAmount: '32,610,996.70'},
                {item: '预收款项', startAmount: '18,586,948.70', endAmount: '15,185,823.05'},
                {item: '应付职工薪酬', startAmount: '4,726,614.44', endAmount: '5,438,321.92'},
                {item: '应交税费', startAmount: '-13,978,469.96', endAmount: '-15,149,483.27'},
                {item: '应付利息', startAmount: '--', endAmount: '--'},
                {item: '应付股利', startAmount: '--', endAmount: ''},
                {item: ' 其他应付款', startAmount: '8,165,814.25', endAmount: '6,186,165.72'},
                {item: '一年内到期的非流动负债', startAmount: '--', endAmount: '--'},
                {item: '其他流动负债', startAmount: '--', endAmount: '--'},
                {item: '流动负债合计', startAmount: '190,149,186.94', endAmount: '108,585,492.21'}
            ]
        };
    },
    methods: {
        drawBasePie3 (data, title) {
            var myPie3 = this.$echarts.init(document.getElementById('circlePieContainer3'));
            let circlePie3 = setCirclePie(data, title);
            myPie3.setOption(circlePie3);
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
        this.drawBasePie3(this.data3, this.title3);
        this.drawBasePie6(this.data6, this.title6);
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