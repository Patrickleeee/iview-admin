<style lang="less">
    @import '../own-space/own-space.less';
</style>

<template>
    <div>
        <Card>
            <p slot="title">
                <Icon type="person"></Icon>
                新建账户
            </p>
            <div>
                <Form ref="userForm" :model="userForm" :label-width="100" label-position="right" :rules="inforValidate">
                    <Row :gutter="5" class="margin-top-10">
                        <Col :md="24" :lg="12" :style="{marginBottom: '10px'}">
                            <FormItem label="账户名称" prop="userName">
                                <div style="display:inline-block;width:300px;">
                                    <Input v-model="userForm.userName" placeholder="请输入账户名称" ></Input>
                                </div>
                            </FormItem>
                        </Col>
                        <Col :md="24" :lg="12" :style="{marginBottom: '10px'}">
                            <FormItem label="手机号" prop="mobile" >
                                <div style="display:inline-block;width:300px;">
                                    <Input v-model="userForm.mobile" placeholder="请输入手机号" ></Input>
                                </div>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="5" class="margin-top-1">
                        <Col :md="24" :lg="12" :style="{marginBottom: '10px'}">
                            <FormItem label="姓名" prop="realName" >
                                <div style="display:inline-block;width:300px;">
                                    <Input v-model="userForm.realName" placeholder="请输入姓名" ></Input>
                                </div>
                            </FormItem>
                        </Col>
                        <Col :md="24" :lg="12" :style="{marginBottom: '10px'}">
                            <FormItem label="部门" prop="department" >
                                <div style="display:inline-block;width:300px;">
                                    <Input v-model="userForm.department" placeholder="请输入部门" ></Input>
                                </div>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="5" class="margin-top-1">
                        <Col :md="24" :lg="12" :style="{marginBottom: '10px'}">
                            <FormItem label="职位" prop="title" >
                                <div style="display:inline-block;width:300px;">
                                    <Input v-model="userForm.title" placeholder="请输入职位" ></Input>
                                </div>
                            </FormItem>
                        </Col>
                        <Col :md="24" :lg="12" :style="{marginBottom: '10px'}">
                            <FormItem label="邮箱" prop="email" >
                                <div style="display:inline-block;width:300px;">
                                    <Input v-model="userForm.email" placeholder="请输入邮箱" ></Input>
                                </div>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="5" class="margin-top-1">
                        <Col :md="24" :lg="12" :style="{marginBottom: '10px'}">
                            <FormItem label="角色" prop="role" >
                                <div style="display:inline-block;width:300px;">
                                    <Select v-model="userForm.role" clearable filterable style="width:200px">
                                        <Option v-for="item in roleList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>
                                </div>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="5" class="margin-top-11">
                        <Col :md="24" :lg="12" :style="{marginBottom: '10px'}">
                            <FormItem label="登录密码" prop="password" >
                                <div style="display:inline-block;width:300px;">
                                    <Input v-model="userForm.password" placeholder="请输入登录密码" ></Input>
                                </div>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="5" class="margin-top-1">
                        <Col :md="24" :lg="12" :style="{marginBottom: '10px'}">
                            <FormItem label="确认登录密码" prop="repassword" >
                                <div style="display:inline-block;width:300px;">
                                    <Input v-model="userForm.repassword" placeholder="请再输入一遍密码" ></Input>
                                </div>
                            </FormItem>
                        </Col>
                    </Row>
                    <div>
                        <Button type="text" style="width: 100px;" @click="cancelEditUserInfor">取消</Button>
                        <Button type="primary" style="width: 100px;" :loading="save_loading" @click="saveEdit">保存</Button>
                    </div>
                </Form>
            </div>
        </Card>
    </div>
</template>

<script>
import {userAdd, userAddOfRole} from '@/api/request';
export default {
    name: 'new-account',
    data () {
        const validePhone = (rule, value, callback) => {
            var re = /^1[0-9]{10}$/;
            if (!re.test(value)) {
                callback(new Error('请输入正确格式的手机号'));
            } else {
                callback();
            }
        };
        const valideRePassword = (rule, value, callback) => {
            if (value !== this.userForm.password) {
                callback(new Error('两次输入密码不一致'));
            } else {
                callback();
            }
        };
        return {
            userForm: {
                userName: '',
                mobile: '',
                realName: '',
                department: '',
                title: '',
                email: '',
                role: '',
                password: '',
                repassword: ''
            },
            roleList: [],
            save_loading: false,
            // 账户信息，校验规则
            inforValidate: {
                userName: [
                    { required: true, message: '请输入账户名称', trigger: 'blur' }
                ],
                mobile: [
                    { required: false, trigger: 'blur'},
                    { validator: validePhone }
                ],
                role: [
                    { required: true, message: '请选择角色' }
                ],
                password: [
                    { required: true, message: '请输入新密码', trigger: 'blur' },
                    { min: 6, message: '请至少输入6个字符', trigger: 'blur' },
                    { max: 32, message: '最多输入32个字符', trigger: 'blur' }
                ],
                repassword: [
                    { required: true, message: '请再次输入新密码', trigger: 'blur' },
                    { validator: valideRePassword, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        // 取消按钮，关闭tag
        cancelEditUserInfor () {
            this.$store.commit('removeTag', 'new-account');
            localStorage.pageOpenedList = JSON.stringify(this.$store.state.app.pageOpenedList);
            let lastPageName = '';
            if (this.$store.state.app.pageOpenedList.length > 1) {
                lastPageName = this.$store.state.app.pageOpenedList[1].name;
            } else {
                lastPageName = this.$store.state.app.pageOpenedList[0].name;
            }
            this.$router.push({
                name: lastPageName
            });
        },
        // 保存按钮，调用接口
        saveEdit () {
            this.$refs['userForm'].validate((valid) => {
                if (valid) {
                    // 调用保存接口
                    this.save_loading = true;
                    // 入参处理
                    let params = this.userForm;
                    delete params.repassword;
                    console.log('params:', this.userForm)
                    new Promise((resolve, reject) => {
                        userAdd(this.userForm).then(res => {
                            if(res.data.code === '200'){
                                this.$Message.success(res.data.message);
                                this.save_loading = false;
                                // 关闭新增页面
                                this.cancelEditUserInfor();
                                return;
                            }
                            this.$Message.error(res.data.message);
                            return;
                            resolve();
                        }).catch(error => {
                            reject(error);
                        });
                    });
                }
            });
        },
        // 编辑时，初始化值
        init () {
            this.userForm.userName = 'witium';
            this.userForm.mobile = '18888888888';
            this.userForm.realName = 'test';
            this.userForm.department = 'ta';
            this.userForm.title = '平台部';
            this.userForm.email = 'patrickleee@foxmail.com';
            this.userForm.role = '1';
            this.userForm.password = '';
            this.userForm.repassword = '';
        }
    },
    mounted () {
        // 初始化角色select
        new Promise((resolve, reject) => {
            userAddOfRole().then(res => {
                let roles = res.data;
                // 非标准json数据，预先处理
                for(var i in roles){
                    this.roleList.push({value: i, label: roles[i]})
                }
                console.log('roleList:', this.roleList)
                resolve();
            }).catch(error => {
                reject(error);
            });
        });
        // 根据add或update来初始化值
        this.init();
    }
};
</script>
