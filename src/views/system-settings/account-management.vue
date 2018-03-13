<template>
    <div>
        <div style="margin: 5px;">
            <Form ref="formItem" :model="formItem" :label-width="100" :rules="ruleInline" inline>
                <FormItem prop="username" label="账户名">
                    <Input v-model="formItem.username" placeholder="账户名"></Input>
                </FormItem>
                <FormItem prop="realName" label="姓名">
                    <Input v-model="formItem.realName" placeholder="姓名"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formItem')">查询</Button>
                    <Button type="ghost" @click="handleReset('formItem')" style="margin-left: 8px">重置</Button>
                </FormItem>
            </Form>
        </div>
        <Table :data="tableData" :columns="tableColumns" :loading="loading" ref="table" stripe></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="total" :current="current" show-elevator @on-change="changePage"></Page>
            </div>
        </div>
    </div>
    
</template>
<script>
import {userFind} from '@/api/request';
export default {
    data () {
        return {
            // 查询form
            formItem: {
                username: '',
                realName: ''
            },
            // 条件控制
            ruleInline: {
                username: [
                    { type: 'string', min: 2, message: 'The name length cannot be less than 6 bits', trigger: 'blur' }
                ],
                realName: [
                    { type: 'string', min: 2, message: 'The name length cannot be less than 6 bits', trigger: 'blur' }
                ]
            },
            total: 0,
            current: 1,
            tableColumns: [
                {title: '账户名', key: 'userName'},
                {title: '姓名', key: 'realName'},
                {title: '手机', key: 'mobile'},
                {title: '职位', key: 'title'},
                {title: '角色', key: 'roleName'},
                {title: '创建时间', key: 'createTime'},
                {title: '更新时间', key: 'updateTime'}
            ],
            tableData: [],
            loading: true
        };
    },
    methods: {
        // 分页
        changePage (current) {
            this.getOrders(current, this.formItem);
        },
        // 提交查询（发送后端请求）
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                console.log(this.formItem);
                if (valid) {
                    // 条件查询时，将页码重置为1
                    this.current = 1;
                    this.getOrders(this.current, this.formItem);
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
            this.loading = true;
            new Promise((resolve, reject) => {
                let myParmas = {
                    page: MyCurrent,
                    perPage: 10
                };
                myParmas.username = formData.username;
                myParmas.realName = formData.realName;
                userFind(myParmas).then(res => {
                    if (res.data.state === '200') {
                        let result = res.data.data;
                        this.current = result.currentPage;
                        this.total = result.totalPage;
                        this.tableData = result;
                    }
                    resolve();
                }).catch(error => {
                    reject(error);
                });
            });
        }
    },
    mounted () {
        this.getOrders(this.current, this.formItem);
    },
    watch: {
        // 监控列表数据，发生变化时启动“加载”
        tableData: function () {
            this.$nextTick(function () {
                this.loading = false;
            });
        }
    }
};
</script>
