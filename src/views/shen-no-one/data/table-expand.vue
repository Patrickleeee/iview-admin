<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
<template>
    <div>
        <Row class="expand-row">
            <Col span="6">
                <span class="expand-key">企业名称: </span>
                <span class="expand-value">{{ row.company }}</span>
            </Col>
            <Col span="6">
                <span class="expand-key">证书编号: </span>
                <span class="expand-value">{{ row.no }}</span>
            </Col>
            <Col span="6">
                <span class="expand-key">省市名称: </span>
                <span class="expand-value">{{ row.province }}</span>
            </Col>
            <Col span="6">
                <span class="expand-key">产品种类: </span>
                <span class="expand-value">{{ row.class }}</span>
            </Col>
        </Row>
        <Row>
            <Col span="6">
                <span class="expand-key">批准时间: </span>
                <span class="expand-value">《{{ row.startDate }}》</span>
            </Col>
            <Col span="6">
                <span class="expand-key">有效期限: </span>
                <span class="expand-value">{{ row.endDate }}</span>
            </Col>
            <Col span="6">
                <span class="expand-key">证书状态: </span>
                <span class="expand-value">{{ row.status }}</span>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        props: {
            row: Object
        }
    };
</script>