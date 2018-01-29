<template>
    <div class="home-main">
        <Row :gutter="5" class="margin-top-10">
            <Col :md="24" :lg="9" :style="{marginBottom: '10px'}">
                <Card>
                    <p slot="title" class="card-title">
                        <Icon type="home"></Icon>
                        公司信息:深圳市森堡家俬有限公司
                    </p>
                    <Table :show-header=false :border=true :disabled-hover=true size="large" :data="tableData1" :columns="tableColumns1" stripe></Table>
                </Card>
            </Col>
            <Col :md="24" :lg="15" :style="{marginBottom: '10px'}">  
                <Card>
                <Table :show-header=false :border=true :columns="columnsInfo" :data="dataInfo"></Table>
                <Table :show-header=false :border=true :columns="columnsInfo1" :data="dataInfo1" size="middle" ></Table>
                </Card>
            </Col>
         </Row>
         <Row :gutter="5" class="margin-top-10">
             <Card>
                <p slot="title" class="card-title">
                    <Icon type="ios-pulse-strong"></Icon>
                    郭向阳-相关公司（法人:4家 股东:12家 高管:10家）
                </p>
                <Table :border=true :row-class-name="rowClassName" :columns="columnsCompany" :data="dataCompany"></Table>
            </Card>
         </Row>
    </div>
    
</template>
<script>
import pie from './base-pie.vue';
export default {
    components: {
        pie
    },
    data () {
        return {
            // 每行数据
            tableData1: this.mockTableData1(),
            // 列名
            tableColumns1: [
                {title: '法人信息',
                    key: 'lx',
                    width: '45%',
                    render: (h, params) => {
                        const color = 'green';
                        const text = '郭向阳(共12家公司)';
                        return h('div', [
                            h('img', {
                                props: {
                                    type: 'primary',
                                    size: 'big'
                                },
                                attrs: {
                                    src: 'https://img.tianyancha.com/logo/human2/6d3e7ce38f436da26f4f92bc3118ddda.png@!watermark01',
                                    style: 'width: 120px;height: 110px;border-radius: 5px;padding:5px;'
                                },
                                style: {
                                }
                            }),
                            h('Tag', {
                                props: {
                                    type: 'text',
                                    color: color
                                }
                            }, '本公司状态：'),
                            h('Tag', {
                                props: {
                                    type: 'text',
                                    color: 'red'
                                }
                            }, '存续(在营、开业、在册)'),
                            h('Tag', {
                                props: {
                                    type: 'text',
                                    color: color
                                }
                            }, text),
                            h('Tag', {
                                props: {
                                    type: 'text',
                                    color: 'red'
                                }
                            }, '广东 共11家'),
                            h('div', {
                                attrs: {

                                }
                            }, '深圳市森堡家俬有限公司等'),
                            h('Tag', {
                                props: {
                                    type: 'text',
                                    color: 'red'
                                }
                            }, '江西 共1家'),
                            h('div', {
                                attrs: {

                                }
                            }, '赣州市华阳家具有限公司等')
                        ]);
                    }},
                {title: '注册信息',
                    key: 'sy',
                    width: '55%',
                    render: (h, params) => {
                        return h(pie, {
                            props: {

                            }
                        });
                    }
                }
            ],
            columnsInfo: [
                {
                    title: 'k1',
                    key: 'k1',
                    className: 'demo-table-info-column'
                },
                {
                    title: 'v1',
                    key: 'v1'
                },
                {
                    title: 'k2',
                    key: 'k2',
                    className: 'demo-table-info-column'
                },
                {
                    title: 'v2',
                    key: 'v2'
                }
            ],
            dataInfo: [
                {
                    k1: '工商注册号',
                    v1: '440306102881398',
                    k2: '组织机构代码',
                    v2: '758611411'
                },
                {
                    k1: '统一信用代码',
                    v1: '914403007586114113',
                    k2: '公司类型',
                    v2: '有限责任公司'
                },
                {
                    k1: '纳税人识别号',
                    v1: '914403007586114113',
                    k2: '行业',
                    v2: '家具制造业'
                },
                {
                    k1: '营业期限',
                    v1: '2004-02-17至2054-02-17',
                    k2: '核准日期',
                    v2: '2016-01-26'
                },
                {
                    k1: '登记机关',
                    v1: '深圳市市场监督管理局',
                    k2: '英文名称',
                    v2: 'Shenzhen Sampo Furniture Co.,Ltd.'
                }
            ],
            columnsInfo1: [
                {
                    title: 'k1',
                    width: '20%',
                    key: 'k1',
                    className: 'demo-table-info-column'
                },
                {
                    title: 'v1',
                    key: 'v1'
                }
            ],
            dataInfo1: [
                {
                    k1: '注册地址',
                    v1: '深圳市宝安区公明楼村第二工业区第一排3栋'
                },
                {
                    k1: '经营范围',
                    v1: '兴办实业（具体项目另行申报）；国内商业及物资供销业（不含国家专营、专控、专卖商品）；进出口业务。；家俬生产、销售（不含国家限制项目）；普通货运。；'
                }
            ],
            columnsCompany: [
                {title: '序号', align: 'center', type: 'index', width: '5%'},
                {
                    title: '角色',
                    width: '10%',
                    key: 'role',
                    render: (h, params) => {
                        const row = params.row;
                        const color = row.role === '法人' ? 'red' : row.role === '股东' ? 'yellow' : 'green';

                        return h('Tag', {
                            props: {
                                type: 'dot',
                                color: color
                            }
                        }, row.role);
                    },
                    filters: [
                        {
                            label: '法人',
                            value: 1
                        },
                        {
                            label: '股东',
                            value: 2
                        },
                        {
                            label: '高管',
                            value: 3
                        }
                    ],
                    filterMultiple: false,
                    filterMethod (value, row) {
                        if (value === 1) {
                            return row.role === '法人';
                        } else if (value === 2) {
                            return row.role === '股东';
                        } else if (value === 3) {
                            return row.role === '高管';
                        }
                    }
                },
                {
                    title: '公司',
                    key: 'company'
                },
                {
                    title: '省份地区',
                    width: '10%',
                    key: 'province'
                },
                {
                    title: '开业日期',
                    width: '10%',
                    key: 'date'
                },
                {
                    title: '注册资本',
                    width: '15%',
                    key: 'assets'
                },
                {
                    title: '经营状态',
                    key: 'status',
                    render: (h, params) => {
                        const row = params.row;
                        const color = row.status === '存续（在营、开业、在册）' ? 'green' : row.status === '存续' ? 'yellow' : 'red';

                        return h('Tag', {
                            props: {
                                type: 'text',
                                color: color
                            }
                        }, row.status);
                    },
                    filters: [
                        {
                            label: '存续（在营、开业、在册）',
                            value: 1
                        },
                        {
                            label: '存续',
                            value: 2
                        },
                        {
                            label: '注销',
                            value: 3
                        }
                    ],
                    filterMultiple: false,
                    filterMethod (value, row) {
                        if (value === 1) {
                            return row.status === '存续（在营、开业、在册）';
                        } else if (value === 2) {
                            return row.status === '存续';
                        } else if (value === 3) {
                            return row.status === '注销';
                        }
                    }
                }
            ],
            dataCompany: [
                {
                    role: '法人',
                    company: '深圳市森堡家俬有限公司',
                    province: '广东',
                    date: '2004-02-17',
                    assets: '(人民币)5000万元',
                    status: '存续（在营、开业、在册）'
                },
                {
                    role: '法人',
                    company: '惠州市松堡王国儿童家具有限公司',
                    province: '广东',
                    date: '2014-08-13',
                    assets: '1000万元人民币',
                    status: '存续'
                },
                {
                    role: '法人',
                    company: '深圳市松堡王国家居有限公司',
                    province: '广东',
                    date: '2013-06-26',
                    assets: '(人民币)1000万元',
                    status: '存续（在营、开业、在册）'
                },
                {
                    role: '法人',
                    company: '惠州市森堡家具有限公司',
                    province: '广东',
                    date: '2012-04-28',
                    assets: '200万元人民币',
                    status: '注销'
                },
                {
                    role: '股东',
                    company: '广东互生建设有限公司',
                    province: '广东',
                    date: '2014-06-12',
                    assets: '1000万人民币',
                    status: '存续'
                },
                {
                    role: '股东',
                    company: '深圳市文华星光投资发展有限公司(投资比例：40.00%)',
                    province: '广东',
                    date: '2013-09-26',
                    assets: '(人民币)100万元',
                    status: '存续（在营、开业、在册）'
                },
                {
                    role: '股东',
                    company: '深圳市森堡家俬有限公司(投资比例：90.00%)',
                    province: '广东',
                    date: '2004-02-17',
                    assets: '(人民币)5000万元',
                    status: '存续（在营、开业、在册）'
                },
                {
                    role: '股东',
                    company: '深圳智慧互生投资发展有限公司(投资比例：1.22%)',
                    province: '广东',
                    date: '2013-12-31',
                    assets: '52.000000万人民币',
                    status: '注销'
                },
                {
                    role: '股东',
                    company: '深圳市东商投资发展有限公司(投资比例：10.00%)',
                    province: '广东',
                    date: '2013-11-19',
                    assets: '(人民币)100万元',
                    status: '存续（在营、开业、在册）'
                },
                {
                    role: '股东',
                    company: '深圳市优奇智文化传播有限公司(投资比例：13.00%)',
                    province: '广东',
                    date: '2013-11-19',
                    assets: '(人民币)1000万元',
                    status: '存续（在营、开业、在册）'
                },
                {
                    role: '股东',
                    company: '赣州市华阳家具有限公司(投资比例：95.00%)',
                    province: '江西',
                    date: '2016-06-24',
                    assets: '1000万元人民币',
                    status: '注销'
                },
                {
                    role: '股东',
                    company: '深圳市文华童星演艺文化传播有限公司(投资比例：31.00%)',
                    province: '广东',
                    date: '2013-10-09',
                    assets: '(人民币)200万元',
                    status: '注销'
                },
                {
                    role: '股东',
                    company: '惠州市松堡王国儿童家具有限公司(投资比例：95.00%)',
                    province: '广东',
                    date: '2014-08-13',
                    assets: '1000万元人民币',
                    status: '存续'
                },
                {
                    role: '股东',
                    company: '惠州市寝思床垫有限公司(投资比例：51.00%)',
                    province: '广东',
                    date: '2016-07-21',
                    assets: '100万元人民币',
                    status: '存续'
                },
                {
                    role: '股东',
                    company: '深圳市松堡王国家居有限公司(投资比例：90.00%)',
                    province: '广东',
                    date: '2013-06-26',
                    assets: '(人民币)1000万元',
                    status: '存续（在营、开业、在册）'
                },
                {
                    role: '股东',
                    company: '惠州市森堡家具有限公司(投资比例：100%)',
                    province: '广东',
                    date: '2012-04-28',
                    assets: '200万元人民币',
                    status: '注销'
                },
                {
                    role: '高管',
                    company: '广东互生建设有限公司(职位：监事)',
                    province: '广东',
                    date: '2014-06-12',
                    assets: '1000万人民币',
                    status: '存续'
                },
                {
                    role: '高管',
                    company: '深圳市森堡家俬有限公司(职位：执行董事)',
                    province: '广东',
                    date: '2004-02-17',
                    assets: '(人民币)5000万元',
                    status: '存续（在营、开业、在册）'
                },
                {
                    role: '高管',
                    company: '深圳智慧互生投资发展有限公司(职位：监事)',
                    province: '广东',
                    date: '2013-12-31',
                    assets: '52.000000万人民币',
                    status: '注销'
                },
                {
                    role: '高管',
                    company: '深圳市东商投资发展有限公司(职位：监事)',
                    province: '广东',
                    date: '2013-11-19',
                    assets: '(人民币)100万元',
                    status: '存续（在营、开业、在册）'
                },
                {
                    role: '高管',
                    company: '赣州市华阳家具有限公司(职位：监事)',
                    province: '江西',
                    date: '2016-06-24',
                    assets: '1000万元人民币',
                    status: '注销'
                },
                {
                    role: '高管',
                    company: '深圳市文华童星演艺文化传播有限公司(职位：监事)',
                    province: '广东',
                    date: '2013-10-09',
                    assets: '(人民币)200万元',
                    status: '注销'
                },
                {
                    role: '高管',
                    company: '惠州市松堡王国儿童家具有限公司(职位：监事)',
                    province: '广东',
                    date: '2014-08-13',
                    assets: '1000万元人民币',
                    statue: '存续'
                },
                {
                    role: '高管',
                    company: '惠州市寝思床垫有限公司(职位：监事)',
                    province: '广东',
                    date: '2016-07-21',
                    assets: '100万元人民币',
                    status: '存续'
                },
                {
                    role: '高管',
                    company: '深圳市松堡王国家居有限公司(职位：执行董事)',
                    province: '广东',
                    date: '2013-06-26',
                    assets: '(人民币)1000万元',
                    status: '存续（在营、开业、在册）'
                },
                {
                    role: '高管',
                    company: '惠州市森堡家具有限公司(职位：执行董事)',
                    province: '广东',
                    date: '2012-04-28',
                    assets: '200万元人民币',
                    status: '注销'
                }
            ]
        };
    },
    methods: {
        mockTableData1 () {
            let data = [];
            for (let i = 0; i < 1; i++) {
                data.push({
                    lx: 1,
                    sy: 2
                });
            }
            return data;
        },
        rowClassName (row, index) {
            // if (row.role === '法人') {
            //     return 'demo-table-info-row-red';
            // } else if (row.role === '股东') {
            //     return 'demo-table-info-row-yellow';
            // } else if (row.role === '高管') {
            //     return 'demo-table-info-row-green';
            // }
            return '';
        }
    },
    props: {
        styleObj: Object,
        height: String,
        width: String
    }
};
</script>
<style scoped>
</style>

