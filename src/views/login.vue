<style lang="less">
    @import './login.less';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                    <p class="login-tip">please enter account&&password</p>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
import {loginByUsername} from '@/api/request';
export default {
    data () {
        return {
            form: {
                userName: '',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        handleSubmit () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    Cookies.set('user', this.form.userName);
                    Cookies.set('password', this.form.password);
                    new Promise((resolve, reject) => {
                        loginByUsername(this.form.userName, this.form.password)
                            .then(response => {
                                console.log('result', response);
                                if (response.status === 200) {
                                    Cookies.set('Authorization', 'bearer '.concat(response.data.access_token));
                                    console.log('Authorization:', Cookies.get('Authorization'));
                                    this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
                                    if (this.form.userName === 'iview_admin') {
                                        Cookies.set('access', 0);
                                    } else {
                                        Cookies.set('access', 1);
                                    }
                                    this.$router.push({
                                        name: 'home_index'
                                    });
                                    resolve();
                                } else {
                                    this.$Notice.error({
                                        title: '错误提醒',
                                        desc: '请输入正确的用户名和密码！',
                                        duration: 3
                                    });
                                }
                            })
                            .catch(error => {
                                reject(error);
                            });
                    });
                    // if (this.form.userName === 'homefax' & this.form.password === 'homefax') {
                    //     this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
                    //     this.$router.push({
                    //         name: 'home_index'
                    //     });
                    // } else {
                    //     this.$Notice.error({
                    //         title: '错误提醒',
                    //         desc: '请输入正确的用户名和密码！',
                    //         duration: 3
                    //     });
                    // }
                }
            });
        }
    }
};
</script>

<style>

</style>
