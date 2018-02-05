<template lang="html">
    <div>
         <Row :gutter="5" class="margin-top-10">
            <Table :border=true :columns="columns" :data="dataList"></Table>
            <div style="float: right;">
                <Page :total="count1" :current="page" :page-size="pageSize" show-total @on-change="changePage"></Page>
            </div>
            <p style="padding:10px"></p>
         </Row>
    </div>
    
</template>
<script>
import repayPlan from './repay-plan.vue';
export default {
    components: {
        repayPlan
    },
    data () {
        return {
            columns: [
                {
                    title: '客户简称',
                    width: '10%',
                    key: 'khjc'
                },
                {
                    title: '客户编号',
                    key: 'khbh'
                }, {
                    title: '贷款金额',
                    key: 'dkje'
                },
                {
                    title: '币种',
                    key: 'bz'
                },
                {
                    title: '起始日',
                    key: 'qsr'
                },
                {
                    title: '到期日',
                    key: 'dqr'
                },
                {
                    title: '年利率',
                    key: 'nll'
                },
                {
                    title: '还款方式',
                    key: 'hkfs'
                },
                {
                    title: '每期还款日',
                    key: 'mqhkr'
                },
                {
                    title: '还款计划',
                    key: 'hkjh',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginLeft: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index);
                                    }
                                }
                            }, '详情 >>>')
                        ]);
                    }
                },
                {
                    title: '逾期记录',
                    key: 'yqjl',
                    render: (h, params) => {
                        const row = params.row;
                        if (row.yqjl === '有') {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginLeft: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index);
                                        }
                                    }
                                }, '详情 >>>')
                            ]);
                        } else {
                            return h('div', '无');
                        }
                    }
                }
            ],
            dataList: [],
            data: [
                {
                    khjc: '森堡家俬', khbh: 'JJS-SBJS20171101', dkje: '25,000,000.00', bz: '人民币', qsr: '2018/2/1', dqr: '2019/2/1', nll: '11.88%', hkfs: '按月付息', mqhkr: '20号', hkjh: '详情 >>>', yqjl: '无'
                }
            ],
            count: 1,
            page: 1,
            pageSize: 5
        };
    },
    methods: {
        getData (start, end) {
            return this.data.slice(start, end);
        },
        changePage (current) {
            this.page = current;
            this.dataList = this.getData1((current - 1) * 5 + 0, (current * 5));
        },
        show (index) {
            this.$Modal.info({
                title: '还款计划',
                closable: true,
                width: '50%',
                render: (h) => {
                    return h(repayPlan, {
                        props: {
                        }
                    });
                }
            });
        }
    },
    mounted () {
        this.dataList = this.getData(0, 5);
        this.count = 1;
        this.page = 1;
        this.pageSize = 5;
    }
};
</script>
<style scoped>
</style>

