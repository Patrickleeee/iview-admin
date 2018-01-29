<template lang="html">
    <div>
         <Row :gutter="5" class="margin-top-10">
             <Table :show-header=false :border=true :columns="columnsName1" :data="dataName1"></Table>
             <Table :border=true :columns="columns1" :data="dataList1"></Table>
              <div style="float: right;">
                <Page :total="count1" :current="page1" :page-size="pageSize1" show-total @on-change="changePage1"></Page>
            </div>
             <p style="padding:10px"></p>
         </Row>
         <Row :gutter="5" class="margin-top-10">
             <Table :show-header=false :border=true :columns="columnsName2" :data="dataName2"></Table>
             <Table :border=true :columns="columns2" :data="dataList2"></Table>
              <div style="float: right;">
                <Page :total="count2" :current="page2" :page-size="pageSize2" show-total @on-change="changePage2"></Page>
            </div>
             <p style="padding:10px"></p>
         </Row>
         <Row :gutter="5" class="margin-top-10">
             <Table :show-header=false :border=true :columns="columnsName3" :data="dataName3"></Table>
             <Table :border=true :columns="columns3" :data="dataList3"></Table>
              <div style="float: right;">
                <Page :total="count3" :current="page3" :page-size="pageSize3" show-total @on-change="changePage3"></Page>
            </div>
             <p style="padding:10px"></p>
         </Row>
    </div>
    
</template>
<script>
import expandRow from './table-expand.vue';
import creditDetail from './credit-detail.vue';
export default {
    components: {
        expandRow,
        creditDetail
    },
    data () {
        return {
            columnsName1: [
                {
                    title: 'k',
                    key: 'k',
                    render: (h, params) => {
                        return h('div', [
                            h('div', {
                                style: 'font-size:small;color:green'
                            }, '税务评级'),
                            h('Tag', {
                                props: {
                                    type: 'text',
                                    color: 'red'
                                }
                            }, '2')
                        ]);
                    }
                }
            ],
            dataName1: [
                {
                    k: '税务评级'
                }
            ],
            columns1: [
                {
                    title: '年份',
                    width: '10%',
                    key: 'year'
                },
                {
                    title: '纳税评级',
                    key: 'grade'
                }, {
                    title: '类型',
                    key: 'type'
                }, {
                    title: '纳税人识别号',
                    key: 'no'
                }, {
                    title: '评价单位',
                    key: 'org'
                }
            ],
            dataList1: [],
            data1: [
                {
                    year: '2016',
                    grade: 'A',
                    type: '国税',
                    no: '914403007586114113(440306758611411)',
                    org: '国家税务总局'
                },
                {
                    year: '2015',
                    grade: 'A',
                    type: '国税',
                    no: '440306758611411',
                    org: '国家税务总局'
                }
            ],
            count1: Number,
            page1: Number,
            pageSize1: Number,
            columnsName2: [
                {
                    title: 'k',
                    key: 'k',
                    render: (h, params) => {
                        return h('div', [
                            h('div', {
                                style: 'font-size:small;color:green'
                            }, '进出口信用'),
                            h('Tag', {
                                props: {
                                    type: 'text',
                                    color: 'red'
                                }
                            }, '1')
                        ]);
                    }
                }
            ],
            dataName2: [
                {
                    k: '进出口信用'
                }
            ],
            columns2: [
                {
                    title: '注册海关',
                    width: '10%',
                    key: 'customs'
                },
                {
                    title: '海关编码',
                    key: 'no'
                }, {
                    title: '经营类别',
                    key: 'type'
                }, {
                    title: '操作',
                    key: 'opt',
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
                }
            ],
            dataList2: [],
            data2: [
                {
                    customs: '深圳海关', no: '4403960490', type: '进出口收发货人', opt: '详情 >>>'
                }
            ],
            count2: Number,
            page2: Number,
            pageSize2: Number,
            columnsName3: [
                {
                    title: 'k',
                    key: 'k',
                    render: (h, params) => {
                        return h('div', [
                            h('div', {
                                style: 'font-size:small;color:green'
                            }, '资质证书'),
                            h('Tag', {
                                props: {
                                    type: 'text',
                                    color: 'red'
                                }
                            }, '3')
                        ]);
                    }
                }
            ],
            dataName3: [
                {
                    k: '资质证书'
                }
            ],
            columns3: [
                {
                    title: '详情',
                    type: 'expand',
                    width: '5%',
                    render: (h, params) => {
                        return h(expandRow, {
                            props: {
                                row: params.row
                            },
                            attrs: {
                                style: 'color:green'
                            }
                        });
                    }
                },
                {
                    title: '证书类型',
                    width: '10%',
                    key: 'type'
                },
                {
                    title: '证书编号',
                    key: 'no'
                }, {
                    title: '发证日期',
                    key: 'startDate'
                }, {
                    title: '截止日期',
                    key: 'endDate'
                }
            ],
            dataList3: [],
            data3: [
                {type: '环保部_环境标志', no: 'CEC04275861141-1', startDate: '2015-05-22', endDate: '2018-05-21', company: '深圳市森堡家俬有限公司', province: '广东省', status: '有效', class: '家具'},
                {type: '环保部_环境标志', no: 'CEC04275861141-1', startDate: '2013-07-12', endDate: '2015-03-31', company: '深圳市森堡家俬有限公司', province: '广东省', status: '失效', class: '家具'},
                {type: '环保部_环境标志', no: '05512P1042380R0M', startDate: '2012-04-01', endDate: '2015-03-31', company: '深圳市森堡家俬有限公司', province: '广东省', status: '失效', class: '家具'}
            ],
            count3: Number,
            page3: Number,
            pageSize3: Number
        };
    },
    methods: {
        getData1 (start, end) {
            return this.data1.slice(start, end);
        },
        changePage1 (current) {
            this.page1 = current;
            this.dataList1 = this.getData1((current - 1) * 5 + 0, (current * 5));
        },
        getData2 (start, end) {
            return this.data2.slice(start, end);
        },
        changePage2 (current) {
            this.page2 = current;
            this.dataList2 = this.getData2((current - 1) * 5 + 0, (current * 5));
        },
        getData3 (start, end) {
            return this.data3.slice(start, end);
        },
        changePage3 (current) {
            this.page3 = current;
            this.dataList3 = this.getData3((current - 1) * 5 + 0, (current * 5));
        },
        show (index) {
            this.$Modal.info({
                title: '进出口信用详情',
                closable: true,
                width: '50%',
                render: (h) => {
                    return h(creditDetail, {
                        props: {
                        }
                    });
                }
            });
        }
    },
    mounted () {
        // 税务评级
        this.dataList1 = this.getData1(0, 5);
        this.count1 = 2;
        this.page1 = 1;
        this.pageSize1 = 5;
        // 进出口信用
        this.dataList2 = this.getData2(0, 5);
        this.count2 = 1;
        this.page2 = 1;
        this.pageSize2 = 5;
        // 资质证书
        this.dataList3 = this.getData3(0, 5);
        this.count3 = 3;
        this.page3 = 1;
        this.pageSize3 = 5;
    }
};
</script>
<style scoped>
</style>

