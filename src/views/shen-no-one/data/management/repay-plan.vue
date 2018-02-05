<template lang="html">
    <div>
         <Row :gutter="5" class="margin-top-10">
            <Table :border=true :columns="columns" :data="data"></Table>
         </Row>
    </div>
    
</template>
<script>
export default {
    data () {
        return {
            columns: [
                {title: '期数', key: 'qs'},
                {title: '本期应付利息', key: 'bqyflx'},
                {title: '付息日', key: 'fxr'},
                {title: '实际支付利息', key: 'sjzflx'},
                {title: '剩余本金', key: 'sybj'},
                {title: '是否逾期', key: 'sfyq'},
                {title: '逾期罚息', key: 'yqxf'}
            ],
            data: [
                { qs: '1', bqyflx: '', fxr: '', sjzflx: '', sybj: '', yqxf: '', sfyq: '' },
                { qs: '2', bqyflx: '', fxr: '', sjzflx: '', sybj: '', yqxf: '', sfyq: '' },
                { qs: '3', bqyflx: '', fxr: '', sjzflx: '', sybj: '', yqxf: '', sfyq: '' },
                { qs: '4', bqyflx: '', fxr: '', sjzflx: '', sybj: '', yqxf: '', sfyq: '' },
                { qs: '5', bqyflx: '', fxr: '', sjzflx: '', sybj: '', yqxf: '', sfyq: '' },
                { qs: '6', bqyflx: '', fxr: '', sjzflx: '', sybj: '', yqxf: '', sfyq: '' },
                { qs: '7', bqyflx: '', fxr: '', sjzflx: '', sybj: '', yqxf: '', sfyq: '' },
                { qs: '8', bqyflx: '', fxr: '', sjzflx: '', sybj: '', yqxf: '', sfyq: '' },
                { qs: '9', bqyflx: '', fxr: '', sjzflx: '', sybj: '', yqxf: '', sfyq: '' },
                { qs: '10', bqyflx: '', fxr: '', sjzflx: '', sybj: '', yqxf: '', sfyq: '' },
                { qs: '11', bqyflx: '', fxr: '', sjzflx: '', sybj: '', yqxf: '', sfyq: '' },
                { qs: '12', bqyflx: '', fxr: '', sjzflx: '', sybj: '', yqxf: '', sfyq: '' },
                { qs: '合计', bqyflx: '', fxr: '', sjzflx: '', sybj: '', yqxf: '', sfyq: '' }
            ]
        };
    }
};
</script>
<style scoped>
</style>

