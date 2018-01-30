<template lang="html">
  <div class="dashboard">        
    <div class="flex-container column">
        <div class="item one" id="circlePieContainer1" style="transform: translate(-10%,-12%) scale(0.85);"></div>
        <div class="item two" id="circlePieContainer2" style="transform: translate(83%,-12%) scale(0.85);"></div>
        <div class="item three" id="circlePieContainer3" style="transform: translate(175%,-12%) scale(0.85);"></div>
    </div>
    <div class="flex-container column">
        <div class="item one" id="circlePieContainer4" style="transform: translate(-10%,80%) scale(0.85);"></div>
        <div class="item two" id="circlePieContainer5" style="transform: translate(83%,80%) scale(0.85);"></div>
        <div class="item three" id="circlePieContainer6" style="transform: translate(175%,80%) scale(0.85);"></div>
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
            data2: [
                {value: 3197.0, name: '固定资产'},
                {value: 1364.4, name: '累计折旧'},
                {value: 1832.6, name: '固定资产净值'},
                {value: 59.1, name: '无形资产'},
                {value: 222.9, name: '长摊待摊费用'}
            ],
            title2: ['非流动资产', '年初余额'],
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
            title6: ['流动负债', '期末余额']
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
        this.drawBasePie2(this.data2, this.title2);
        this.drawBasePie3(this.data3, this.title3);
        this.drawBasePie4(this.data4, this.title4);
        this.drawBasePie5(this.data5, this.title5);
        this.drawBasePie6(this.data6, this.title6);
    }
};
</script>
        
<style scoped>
.item {
  padding: 0px;
  margin: 0px;
  width: 37%;
  height: 300px;
  position: absolute;
  transform: scale(1);
  text-align: left;
  transition: all 0.8s;
  background: rgba(32, 32, 35, 0.5);
}
</style>