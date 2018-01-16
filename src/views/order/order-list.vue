<template>
    <div>
        <div style="margin: 5px;">
            <Form ref="formItem" :model="formItem" :label-width="100" :rules="ruleInline" inline>
                <FormItem prop="name" label="订单号">
                    <Input v-model="formItem.name" placeholder="订单号"></Input>
                </FormItem>
                <FormItem prop="updateTime" label="要货日期">
                    <Row>
                        <Col span="12">
                            <DatePicker type="daterange" placement="bottom-end" placeholder="要货日期" style="width: 200px" v-model="formItem.updateTime"></DatePicker>
                        </Col>
                    </Row>
                </FormItem>
                <!-- <FormItem prop="province" label="Province">
                    <Select v-model="formItem.province" clearable filterable style="width:200px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                </FormItem> -->
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formItem')">查询</Button>
                    <Button type="ghost" @click="handleReset('formItem')" style="margin-left: 8px">重置</Button>
                </FormItem>
            </Form>
        </div>
        <Table :data="tableData1" :columns="tableColumns1" stripe></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="total" :current="1" @on-change="changePage"></Page>
            </div>
        </div>
    </div>
    
</template>
<script>
import {listProvinces} from '@/api/request';
export default {
    data () {
        return {
            // 查询form
            formItem: {
                name: '',
                updateTime: '',
                province: ''
            },
            cityList: [
                {value: '110000', label: '北京市'},
                {value: '120000', label: '天津市'},
                {value: '130000', label: '河北省'},
                {value: '140000', label: '山西省'},
                {value: '150000', label: '内蒙古自治区'},
                {value: '210000', label: '辽宁省'},
                {value: '220000', label: '吉林省'},
                {value: '230000', label: '黑龙江省'},
                {value: '310000', label: '上海市'},
                {value: '320000', label: '江苏省'},
                {value: '330000', label: '浙江省'},
                {value: '340000', label: '安徽省'},
                {value: '350000', label: '福建省'},
                {value: '360000', label: '江西省'},
                {value: '370000', label: '山东省'},
                {value: '410000', label: '河南省'},
                {value: '420000', label: '湖北省'},
                {value: '430000', label: '湖南省'},
                {value: '440000', label: '广东省'},
                {value: '450000', label: '广西壮族自治区'},
                {value: '460000', label: '海南省'},
                {value: '500000', label: '重庆市'},
                {value: '510000', label: '四川省'},
                {value: '520000', label: '贵州省'},
                {value: '530000', label: '云南省'},
                {value: '540000', label: '西藏自治区'},
                {value: '610000', label: '陕西省'},
                {value: '620000', label: '甘肃省'},
                {value: '630000', label: '青海省'},
                {value: '640000', label: '宁夏回族自治区'},
                {value: '650000', label: '新疆维吾尔自治区'},
                {value: '710000', label: '台湾省'},
                {value: '810000', label: '香港特别行政区'},
                {value: '820000', label: '澳门特别行政区'}
            ],
            model1: '',
            // 条件控制
            ruleInline: {
                name: [
                    { type: 'string', min: 2, message: 'The name length cannot be less than 6 bits', trigger: 'blur' }
                ],
                updateTime: [
                    // { required: true, message: 'Please fill in the password.', trigger: 'change' },
                    { type: 'array', trigger: 'blur' }
                ]
            },
            // 每行数据
            tableData1: this.mockTableData1(),
            // 列名
            tableColumns1: [
                {title: '订单号', key: 'ddh'},
                {title: '订单来源', key: 'ddly'},
                {title: '客户',
                    key: 'kh',
                    render: (h, params) => {
                        const row = params.row;
                        const text = row.kh === 1 ? '齐国庆' : row.kh === 2 ? '张和平' : '刘大军';
                        return text;
                    }},
                {title: '要货日期',
                    key: 'yhrq',
                    render: (h, params) => {
                        return h('div', this.formatDate(this.tableData1[params.index].yhrq));
                    }},
                {title: '预交日期',
                    key: 'yjrq',
                    render: (h, params) => {
                        return h('div', this.formatDate(this.tableData1[params.index].yjrq));
                    }},
                {title: '建立人',
                    key: 'jlr',
                    render: (h, params) => {
                        const row = params.row;
                        const text = row.jlr === 1 ? '祝幸福' : row.jlr === 2 ? '刘铁山' : '鑫樱';
                        return text;
                    }},
                {title: '建立日期',
                    key: 'jlrq',
                    render: (h, params) => {
                        return h('div', this.formatDate(this.tableData1[params.index].jlrq));
                    }},
                {title: '分店代号', key: 'fddh'},
                {title: '核准否',
                    key: 'hzf',
                    render: (h, params) => {
                        const row = params.row;
                        const color = row.hzf === 1 ? 'green' : 'red';
                        const text = row.hzf === 1 ? '是' : '否';

                        return h('Tag', {
                            props: {
                                type: 'dot',
                                color: color
                            }
                        }, text);
                    }},
                {title: '核准人',
                    key: 'hzr',
                    render: (h, params) => {
                        const row = params.row;
                        const text = row.hzr === 1 ? '李晓丽' : row.hzr === 2 ? '杨丹丹' : '王莉莉';
                        return text;
                    }},
                {title: '核准日期',
                    key: 'hzrq',
                    render: (h, params) => {
                        return h('div', this.formatDate(this.tableData1[params.index].hzrq));
                    }},
                {title: '结案状态',
                    key: 'jazt',
                    render: (h, params) => {
                        const row = params.row;
                        const color = row.jazt === 1 ? 'green' : 'red';
                        const text = row.jazt === 1 ? '是' : '否';

                        return h('Tag', {
                            props: {
                                type: 'dot',
                                color: color
                            }
                        }, text);
                    }},
                {title: '订单类型', key: 'ddlx'}
            ],
            total: 1000,
            current: 1
        };
    },
    methods: {
        mockTableData1 () {
            let data = [];
            for (let i = 0; i < 10; i++) {
                data.push({
                    ddh: 'Y9' + Math.floor(Math.random(5) * 2 + 1) + '.034' + Math.floor(Math.random() * 3 + 1),
                    ddly: '要货转入',
                    kh: Math.floor(Math.random() * 3 + 1),
                    yhrq: new Date(),
                    yjrq: new Date(),
                    jlr: Math.floor(Math.random() * 3 + 1),
                    jlrq: new Date(),
                    fddh: Math.floor(Math.random() * 3 + 1),
                    hzf: Math.floor(Math.random() * 3 + 1),
                    hzr: Math.floor(Math.random() * 3 + 1),
                    hzrq: new Date(),
                    jazt: Math.floor(Math.random() * 3 + 1),
                    ddlx: '出货订单'
                    // name: 'Business' + Math.floor(Math.random() * 100 + 1),
                    // status: Math.floor(Math.random() * 3 + 1),
                    // portrayal: ['City', 'People', 'Cost', 'Life', 'Entertainment'],
                    // people: [
                    //     {
                    //         n: 'People' + Math.floor(Math.random() * 100 + 1),
                    //         c: Math.floor(Math.random() * 1000000 + 100000)
                    //     },
                    //     {
                    //         n: 'People' + Math.floor(Math.random() * 100 + 1),
                    //         c: Math.floor(Math.random() * 1000000 + 100000)
                    //     },
                    //     {
                    //         n: 'People' + Math.floor(Math.random() * 100 + 1),
                    //         c: Math.floor(Math.random() * 1000000 + 100000)
                    //     }
                    // ],
                    // time: Math.floor(Math.random() * 7 + 1),
                    // update: new Date()
                });
            }
            return data;
        },
        formatDate (date) {
            const y = date.getFullYear();
            let m = date.getMonth() + 1;
            m = m < 10 ? '0' + m : m;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            return y + '-' + m + '-' + d;
        },
        // 分页
        changePage (current) {
            // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
            this.tableData1 = this.mockTableData1();
        },
        // 提交查询（发送后端请求）
        handleSubmit (name) {
            console.log(this);
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            });
        },
        // 重置
        handleReset (name) {
            this.$refs[name].resetFields();
        }
    },
    mounted () {
        // new Promise((resolve, reject) => {
        //     listProvinces().then(res => {
        //         console.log('provincelist:', res);
        //         resolve();
        //     }).catch(error => {
        //         reject(error);
        //     });
        // });
    }
};
</script>
