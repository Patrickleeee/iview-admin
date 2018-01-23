<template>
    <div class="home-main">
    <Row :gutter="5" class="margin-top-10">
        <Col :md="24" :lg="15" :style="{marginBottom: '10px'}">
            <Card>
                <p slot="title" class="card-title">
                    <Icon type="information-circled"></Icon>
                    基本信息
                </p>
                <div class="data-source-row">
                    <b class="card-user-infor-name">深一号工厂</b>
                    <div class="line-gray"></div>
                        <upstream-table :style-obj="{margin: '5px 0 0 0px'}"></upstream-table>
                </div>
            </Card>
        </Col>
        <Col :md="24" :lg="9" :style="{marginBottom: '10px'}">
            <Card>
                <p slot="title" class="card-title">
                    <Icon type="ios-pulse-strong"></Icon>
                    风险评分
                </p>
                <div class="data-source-row">
                    <loan-watch></loan-watch>
                </div>
            </Card>
        </Col>
    </Row>
    <Row :gutter="9" class="margin-top-10">
        <risk-table></risk-table>
    </Row>
</div>
</template>

<script>

import riskTable from './risk-table.vue';
import loanWatch from './loan-watch.vue';
import upstreamTable from './upstream-table.vue';
import upstreamCard from '../../test-component/card.vue';
export default {
    name: 'afterLoan',
    data () {
        return {
        };
    },
    components: {
        riskTable,
        loanWatch,
        upstreamCard,
        upstreamTable
    }
};
</script>
