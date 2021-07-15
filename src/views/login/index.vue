<template>
    <div class="blog-login__warp">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="blog-login__tab">
            <el-tab-pane label="用户登录" name="first">
                <el-form
                    ref="loginForm"
                    :model="loginInfo"
                    label-width="80px"
                    class="blog-login__form"
                >
                    <el-form-item label="用户名：">
                        <el-input v-model="loginInfo.username"></el-input>
                    </el-form-item>

                    <el-form-item label="密 码：">
                        <el-input placeholder="请输入密码" v-model="loginInfo.password" show-password></el-input>
                    </el-form-item>

                    <el-form-item label-width="0px">
                        <el-button type="primary" @click="Login()" class="blog-login__btn">立即登录</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="用户注册" name="second">
                <el-form
                    ref="registryForm"
                    :model="registryInfo"
                    label-width="80px"
                    class="blog-login__form"
                >
                    <el-form-item label="活动名称">
                        <el-input v-model="registryInfo.username"></el-input>
                    </el-form-item>

                    <el-form-item label-width="0px">
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    name: 'Login',

    data () {
        return {
            activeName: 'first',

            loginInfo: {
                username: '',
                password: ''
            },

            registryInfo: {
                username: ''
            }
        };
    },

    methods: {
        Login () {
            this.$api.userApi.login(this.loginInfo).then(res => {
                localStorage.setItem('access_token', res.data.token);
                this.$router.push(this.$route.query.redirect);
            });
        },

        onSubmit () {
            // todo
        },

        handleClick () {
            console.log(111);
        }
    }
};
</script>
<style >
.blog-login__warp {
    width: 100%;
    min-height: 720px;
    position: relative;
    background: url('../../assets/login_bg3.jpg') center center no-repeat;
    background-size: cover;
}
.blog-login__tab {
    width: 500px;
    height: 300px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    opacity: 0.8;
    border-radius: 10px;
}
.blog-login__form {
    width: 400px;
    margin: 30px auto;
}

.el-tabs__nav {
    float: none;
}
.el-tabs__active-bar {
    left: 174px;
}
.el-form-item__label {
    color: #000;
}
</style>
