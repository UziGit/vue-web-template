<template>
    <div class="home">
        <el-row :gutter="10">
            <el-col :xs="4" :sm="4" :md="2" :lg="3" :xl="1">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="16" :lg="16" :xl="20">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :xs="8" :sm="8" :md="6" :lg="5" :xl="3">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
        <p>home页</p>
        <el-button @click="test()">测试</el-button>
    </div>
</template>

<script>
import { getUserList } from '../api/user.js';
export default {
    name: 'Home',

    methods: {
        test () {
            getUserList('', 'post', {
                // todo
            }).then();
        }
    }
};
</script>
<style>
.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>
