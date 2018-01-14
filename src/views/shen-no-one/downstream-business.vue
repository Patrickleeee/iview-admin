<template lang="html">
    <div class="self-tabs-style">
        <Tabs value="name1" :animated="false">
            <!-- <TabPane :label="label" name="总览">
                <risk-map></risk-map>
            </TabPane> -->
            <TabPane label="总览" name="name1" icon="ios-star">
                <div>
                    <risk-map></risk-map>
                </div>
            </TabPane>
            <TabPane label="订单" name="name2" icon="ios-list">
                <order-list></order-list>
            </TabPane>
            <TabPane label="销售" name="name3" icon="stats-bars">
            </TabPane>
        </Tabs>
    </div>
</template>
<script>
import riskMap from '../business-market/risk-map.vue';
import orderList from '../order/order-list.vue';
export default {
    data () {
        return {
            // label: (h) => {
            //     return h('div', [
            //         h('span', '总览'),
            //         h('Badge', {
            //             props: {
            //                 count: 3
            //             }
            //         })
            //     ]);
            // }
        };
    },
    components: {
        riskMap,
        orderList
    }
};
</script>

<<style scoped>
.self-tabs-style{
    background: #e3e8ee;
    padding: 0px;
    margin: 0px;
    width: 98.6%;
    height: 98.5%;
    position: absolute;
    text-align: center;
}
.self-tabs-style > .ivu-tabs{
    height:99%
}
.self-tabs-style > .ivu-tabs > .ivu-tabs-content{
    height:100%
}
.ivu-tabs > .ivu-tabs-content-animated{
    height:99%
}

</style> 

