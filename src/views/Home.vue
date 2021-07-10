<template>
    <div class="home">
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
                // tofo
            }).then()
        }
    }
};
</script>
