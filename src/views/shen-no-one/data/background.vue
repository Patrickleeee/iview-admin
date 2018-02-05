<template>
    <div class="home-main">
    <Row :gutter="5" class="margin-top-10">
        <Col :md="24" :lg="24" :style="{marginBottom: '10px'}">
            <Card>
                <p slot="title" class="card-title">
                    <Icon type="information-circled"></Icon>
                    基本信息
                </p>
                <div class="data-source-row" style="height:30%">
                    <base-info-table :style-obj="{margin: '0px 0 0 0px'}"></base-info-table>
                </div>
            </Card>
        </Col>
    </Row>
    <Row :gutter="5" class="margin-top-10">
        <!-- <risk-table></risk-table> -->
        <risk-info></risk-info>
    </Row>
</div>
</template>

<script>

import riskTable from './risk-table.vue';
import loanWatch from './loan-watch.vue';
import baseInfoTable from './base-info.vue';
import riskInfo from './risk-info.vue';
export default {
    name: 'afterLoan',
    data () {
        return {
        };
    },
    components: {
        riskTable,
        loanWatch,
        baseInfoTable,
        riskInfo
    }
};
</script>

<style scoped>
.card-factory-info-name{
    font-size: 1.5em;
    color: #2d8cf0;
}
</style>


