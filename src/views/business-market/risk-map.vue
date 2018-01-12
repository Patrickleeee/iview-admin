<template lang="html">
  <div class="dashboard">          
    <div class="flex-container column">
        <div class="item one" @click="clickChart('1')" id="radarContainer" style="transform: translate(-33.4%,-33%) scale(0.33)">
        </div>
        <div class="item two" @click="clickChart('2')" id="pieContainer" style="transform: translate(-33.4%,1.5%) scale(0.33)">
        </div>
        <div class="item three" @click="clickChart('3')" id="lineContainer" style="transform: translate(-33.4%,36.1%) scale(0.33)">
        </div>
        <div class="item four active" @click="clickChart('4')" id="mapContainer" style="transform: translate(29.2%, 0%) scale(0.99)">
        </div>
    </div>
  </div>
</template>
        
<script>
import { getDealer, getMonthAmount, getCityData } from '@/api/request';
import setMapOption from './data/map';
import pie from './data/pie';
import bar from './data/bar';
import radar from './data/radar';
import setAmountOption from './data/line';
import setCityOption from './data/city';
import echarts from 'echarts/lib/echarts';
// Map of China
import chinaMap from './china.json';
// registering map data
echarts.registerMap('china', chinaMap);

export default {
    name: 'riskMap',
    data () {
        return {
            pie,
            bar,
            radar,
            items: [],
            dealerData: [],
            mapData: {}
        };
    },
    methods: {
        drawChinaMap (formatData) {
            this.items = document.querySelectorAll('.flex-container .item');
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].dataset.order = i + 1;
            }
            // map
            var myMap = this.$echarts.init(document.getElementById('mapContainer'));
            let thisMap = setMapOption(formatData);
            myMap.setOption(thisMap);

            // pie
            var myPie = this.$echarts.init(document.getElementById('pieContainer'));
            myPie.setOption(pie);
        },
        drawAmountLine (formatData) {
            var myLine = this.$echarts.init(document.getElementById('lineContainer'));
            let amountLine = setAmountOption(formatData);
            myLine.setOption(amountLine);
        },
        drawCity (cityData, seriesData) {
            var cityElement = this.$echarts.init(
                document.getElementById('radarContainer')
            );
            let cityOption = setCityOption(cityData, seriesData);
            cityElement.setOption(cityOption);
        },
        _resize () {
            this.$root.charts.forEach(myChart => {
                myChart.resize();
            });
        },
        clickChart (clickIndex) {
            const activeItem = document.querySelector('.flex-container .active');
            const activeIndex = activeItem.dataset.order;
            console.log('当前chart索引', activeIndex);
            const clickItem = this.items[clickIndex - 1];
            if (activeIndex === clickIndex) {
                return;
            }
            activeItem.classList.remove('active');
            clickItem.classList.add('active');
            this._setStyle(clickItem, activeItem);
        },
        _setStyle (el1, el2) {
            const transform1 = el1.style.transform;
            const transform2 = el2.style.transform;
            el1.style.transform = transform2;
            el2.style.transform = transform1;
        },
        /**
     * 地图数据格式化
     * @augments {} data
     * @augments {} map
     */
        formatMapData (data, map) {
            return data.map(item => {
                return {
                    name: item.name,
                    value: map[item.name] ? map[item.name].concat(item.value) : []
                };
            });
        },
        initData () {
            var that = this;
        }
    },
    created () {
        this.initData();
    },
    mounted () {
        new Promise((resolve, reject) => {
            getMonthAmount()
                .then(res => {
                    const formatData = res.data.data.map(item => {
                        return {
                            name: String(item.year),
                            type: 'line',
                            data: item.amount
                        };
                    });
                    this.drawAmountLine(formatData);
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });

        new Promise((resolve, reject) => {
            getCityData()
                .then(res => {
                    let seriesData = [
                        {
                            name: '门店数量',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight',
                                    fontSize: 14
                                }
                            },
                            barMinHeight: 20,
                            color: ['#DE5145'],
                            data: res.data.data.shopNum.slice(0, 10).reverse()
                        }, {
                            name: '红星门店数量',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight',
                                    fontSize: 14
                                }
                            },
                            barMinHeight: 20,
                            color: ['#91c7ae'],
                            data: res.data.data.redStar.slice(0, 10).reverse()
                        }
                    ];
                    this.drawCity(res.data.data.province.slice(0, 10).reverse(), seriesData);
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });

        new Promise((resolve, reject) => {
            getDealer()
                .then(response => {
                    this.dealerData = response.data.data.datas;
                    console.log('dealerData', this.dealerData);
                    this.mapData = response.data.data.map;
                    console.log('mapData', this.mapData);
                    var formatData = this.formatMapData(this.dealerData, this.mapData);
                    console.log('格式化数据', formatData);
                    this.drawChinaMap(formatData);
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
};
</script>
        
<style scoped>
.item {
  padding: 0px;
  margin: 0px;
  width: 66%;
  height: 95%;
  position: absolute;
  transform: scale(0.33);
  text-align: center;
  transition: all 0.8s;
  background: rgba(32, 32, 35, 0.5);
}
.active {
  width: 76%;
  height: 98%;
  margin-left: 10px;
  line-height: 300px;
}
</style>