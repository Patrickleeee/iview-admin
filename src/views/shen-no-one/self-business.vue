<template lang="html">
    <div class="self-tabs-style">
        <Tabs value="name1" :animated="false">
            <TabPane label="总览" name="name1" icon="ios-star">
                <div>
                    <home></home>
                </div>
            </TabPane>
            <TabPane label="订单" name="name2" icon="ios-list">
                <order-list></order-list>
            </TabPane>
            <TabPane label="贷后" name="name3" icon="stats-bars">
                <afterLoan></afterLoan>
            </TabPane>
            <TabPane label="背景" name="name4" icon="stats-bars">
                <background></background>
            </TabPane>
            <TabPane label="风险" name="name5" icon="stats-bars">
                <riskInfo></riskInfo>
            </TabPane>
            <TabPane label="经营" name="name6" icon="stats-bars">
                <manageInfo></manageInfo>
            </TabPane>
        </Tabs>
    </div>
</template>
<script>
import orderList from '../order/order-list.vue';
import home from '../home/home.vue';
import afterLoan from './data/after-loan.vue';
import background from './data/background.vue';
import riskInfo from './data/risk-info.vue';
import manageInfo from './data/manage-info.vue';
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
        orderList,
        home,
        afterLoan,
        background,
        riskInfo,
        manageInfo
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
    height:280%
}
.self-tabs-style > .ivu-tabs > .ivu-tabs-content{
    height:350%
}
.ivu-tabs > .ivu-tabs-content-animated{
    height:350%
}

</style> 

