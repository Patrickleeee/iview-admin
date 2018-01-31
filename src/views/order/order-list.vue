<template>
    <div>
        <div style="margin: 5px;">
            <Form ref="formItem" :model="formItem" :label-width="100" :rules="ruleInline" inline>
                <FormItem prop="ghdw" label="购货单位">
                    <Input v-model="formItem.ghdw" placeholder="购货单位"></Input>
                </FormItem>
                <FormItem prop="rq" label="日期">
                    <Row>
                        <Col span="12">
                            <DatePicker type="daterange" placement="bottom-end" placeholder="日期" style="width: 200px" v-model="formItem.rq"></DatePicker>
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
        <Table :data="tableData" :columns="tableColumns" stripe></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="total" :current="1" show-elevator @on-change="changePage"></Page>
            </div>
        </div>
    </div>
    
</template>
<script>
import {listProvinces, listOrders} from '@/api/request';
export default {
    data () {
        return {
            // 查询form
            formItem: {
                ghdw: '',
                rq: [],
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
            // 条件控制
            ruleInline: {
                ghdw: [
                    { type: 'string', min: 2, message: 'The name length cannot be less than 6 bits', trigger: 'blur' }
                ],
                rq: [
                    // { required: true, message: 'Please fill in the password.', trigger: 'change' },
                    { type: 'array', trigger: 'blur' }
                ]
            },
            total: 1000,
            current: 1,
            tableColumns: [
                {title: '单据编号', key: 'djbh'},
                {title: '购货单位', key: 'ghdw'},
                {title: '金额（单位：元）', key: 'je'},
                {title: '审核人', key: 'shr'},
                {title: '含税单价（单位：元）', key: 'hsdj'},
                {title: '物流方式1', key: 'wlfs1'},
                {title: '日期', key: 'rqString'}
            ],
            tableData: []
        };
    },
    methods: {
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
            this.getOrders(current, this.formItem);
        },
        // 提交查询（发送后端请求）
        handleSubmit (name) {
            console.log(this);
            this.$refs[name].validate((valid) => {
                console.log(this.formItem);
                if (valid) {
                    this.getOrders(this.current, this.formItem);
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            });
        },
        // 重置
        handleReset (name) {
            this.$refs[name].resetFields();
        },
        getOrders (MyCurrent, formData) {
            new Promise((resolve, reject) => {
                let myParmas = {
                    pageString: MyCurrent,
                    perPageString: 10
                };
                myParmas.ghdw = formData.ghdw;
                myParmas.rq = formData.rq;
                listOrders(myParmas).then(res => {
                    console.log('orders:', res.data);
                    if (res.data.state === '0001') {
                        let result = res.data.data;
                        this.current = result.currentPage;
                        this.total = result.total;
                        this.tableData = result.data;
                    }
                    resolve();
                }).catch(error => {
                    reject(error);
                });
            });
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
        this.getOrders(this.current, this.formItem);
    }
};
</script>
