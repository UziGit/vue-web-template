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
                    <el-form-item label="用户名">
                        <el-input v-model="loginInfo.username"></el-input>
                    </el-form-item>

                    <el-form-item label="密码">
                        <el-input v-model="loginInfo.password"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit" class="blog-login__btn">立即登录</el-button>
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

                    <el-form-item>
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
                username: ''
            },

            registryInfo: {
                username: ''
            }
        };
    },

    methods: {
        handleClick () {
            console.log(111);
        },

        onSubmit () {
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
    background: url('../../assets/login_bg.jpg') center center no-repeat;
}
.blog-login__tab {
    width: 500px;
    height: 350px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    opacity: 0.5;
    border-radius: 10px;
}

.el-tabs__nav {
    float: none;
}
.el-tabs__active-bar {
    left: 174px;
}
</style>
