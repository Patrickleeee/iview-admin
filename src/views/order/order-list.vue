<template>
    <div>
        <div style="margin: 5px;">
            <Form ref="formItem" :model="formItem" :label-width="100" :rules="ruleInline" inline>
                <FormItem prop="name" label="Name">
                    <Input v-model="formItem.name" placeholder="用户名"></Input>
                </FormItem>
                <FormItem prop="updateTime" label="UpdateTime">
                    <Row>
                        <Col span="12">
                            <DatePicker type="daterange" placement="bottom-end" placeholder="日期区间" style="width: 200px" v-model="formItem.updateTime"></DatePicker>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formItem')">查询</Button>
                    <Button type="ghost" @click="handleReset('formItem')" style="margin-left: 8px">重置</Button>
                </FormItem>
            </Form>
        </div>
        <Table :data="tableData1" :columns="tableColumns1" stripe></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="100" :current="1" @on-change="changePage"></Page>
            </div>
        </div>
    </div>
    
</template>
<script>
    export default {
        data () {
            return {
                // 查询form
                formItem: {
                    name: '',
                    updateTime: ''
                },
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
                tableData1: this.mockTableData1(),
                tableColumns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Status',
                        key: 'status',
                        render: (h, params) => {
                            const row = params.row;
                            const color = row.status === 1 ? 'blue' : row.status === 2 ? 'green' : 'red';
                            const text = row.status === 1 ? 'Working' : row.status === 2 ? 'Success' : 'Fail';

                            return h('Tag', {
                                props: {
                                    type: 'dot',
                                    color: color
                                }
                            }, text);
                        }
                    },
                    {
                        title: 'Portrayal',
                        key: 'portrayal',
                        render: (h, params) => {
                            return h('Poptip', {
                                props: {
                                    trigger: 'hover',
                                    title: params.row.portrayal.length + 'portrayals',
                                    placement: 'bottom'
                                }
                            }, [
                                h('Tag', params.row.portrayal.length),
                                h('div', {
                                    slot: 'content'
                                }, [
                                    h('ul', this.tableData1[params.index].portrayal.map(item => {
                                        return h('li', {
                                            style: {
                                                textAlign: 'center',
                                                padding: '4px'
                                            }
                                        }, item);
                                    }))
                                ])
                            ]);
                        }
                    },
                    {
                        title: 'People',
                        key: 'people',
                        render: (h, params) => {
                            return h('Poptip', {
                                props: {
                                    trigger: 'hover',
                                    title: params.row.people.length + 'customers',
                                    placement: 'bottom'
                                }
                            }, [
                                h('Tag', params.row.people.length),
                                h('div', {
                                    slot: 'content'
                                }, [
                                    h('ul', this.tableData1[params.index].people.map(item => {
                                        return h('li', {
                                            style: {
                                                textAlign: 'center',
                                                padding: '4px'
                                            }
                                        }, item.n + '：' + item.c + 'People');
                                    }))
                                ])
                            ]);
                        }
                    },
                    {
                        title: 'Sampling Time',
                        key: 'time',
                        render: (h, params) => {
                            return h('div', 'Almost' + params.row.time + 'days');
                        }
                    },
                    {
                        title: 'Updated Time',
                        key: 'update',
                        render: (h, params) => {
                            return h('div', this.formatDate(this.tableData1[params.index].update));
                        }
                    }
                ]
            };
        },
        methods: {
            mockTableData1 () {
                let data = [];
                for (let i = 0; i < 10; i++) {
                    data.push({
                        name: 'Business' + Math.floor(Math.random() * 100 + 1),
                        status: Math.floor(Math.random() * 3 + 1),
                        portrayal: ['City', 'People', 'Cost', 'Life', 'Entertainment'],
                        people: [
                            {
                                n: 'People' + Math.floor(Math.random() * 100 + 1),
                                c: Math.floor(Math.random() * 1000000 + 100000)
                            },
                            {
                                n: 'People' + Math.floor(Math.random() * 100 + 1),
                                c: Math.floor(Math.random() * 1000000 + 100000)
                            },
                            {
                                n: 'People' + Math.floor(Math.random() * 100 + 1),
                                c: Math.floor(Math.random() * 1000000 + 100000)
                            }
                        ],
                        time: Math.floor(Math.random() * 7 + 1),
                        update: new Date()
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
            changePage () {
                // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
                this.tableData1 = this.mockTableData1();
            },
            // 提交（发送后端请求）
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
        }
    };
</script>
