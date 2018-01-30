<template lang="html">
  <div class="dashboard">        
    <div class="flex-container column">
        <div class="item one" id="circlePieContainer7" style="transform: translate(-25%,-12%) scale(0.85);"></div>
        <div class="item one" id="circlePieContainer8" style="transform: translate(-25%,80%) scale(0.85);"></div>
        <div class="item-table"style="transform: translate(80%,20%) scale(0.9);">
            <Table :border=true :columns="columns4" :data="data18" size="default"></Table>
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
            data7: [
                {value: 5000.0, name: '实收资本（或股本）'},
                {value: 750.0, name: '资本公积 '},
                {value: 20749.8, name: '未分配利润'},
                {value: 26499.8, name: '所有者权益（或股东权益）合计'}
            ],
            title7: ['所有者权益', '年初余额'],
            data8: [
                {value: 5000.0, name: '实收资本（或股本）'},
                {value: 750.0, name: '资本公积 '},
                {value: 16515.2, name: '未分配利润'},
                {value: 22265.2, name: '所有者权益（或股东权益）合计'}
            ],
            title8: ['所有者权益', '期末余额'],
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
        drawBasePie7 (data, title) {
            // pie
            var myPie1 = this.$echarts.init(document.getElementById('circlePieContainer7'));
            let circlePie1 = setCirclePie(data, title);
            myPie1.setOption(circlePie1);
        },
        drawBasePie8 (data, title) {
            var myPie2 = this.$echarts.init(document.getElementById('circlePieContainer8'));
            let circlePie2 = setCirclePie(data, title);
            myPie2.setOption(circlePie2);
        },
        _resize () {
            this.$root.charts.forEach(myChart => {
                myChart.resize();
            });
        }
    },
    mounted () {
        this.drawBasePie7(this.data7, this.title8);
        this.drawBasePie8(this.data8, this.title8);
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