<template>
    <div id="poster">
        <el-form 
        class="login-container" 
        label-position="left" 
        label-width="0px"
        :rules="rules" 
        :model="loginData" 
        ref="loginData">
        
            <h3 class="login_title">用户登录</h3>
            <el-form-item>
                <el-input
                    v-model="loginData.mobile"
                    auto-complete="off"
                    placeholder="请输入手机号"
                    maxlength="13"
                ></el-input>
            </el-form-item>

            <el-form-item>
                <el-input
                    type="password"
                    v-model="loginData.password"
                    auto-complete="off"
                    placeholder="请输入密码"
                ></el-input>
            </el-form-item>

            <el-form-item style="width: 100%">
                <el-button
                    type="primary"
                    style="width: 100%; background: #505458; border: none"
                    @click="submitForm('loginData')"
                >登录</el-button>       
            </el-form-item>

            <el-footer>
                &copy; 2020 QF - HTML5
            </el-footer>
        </el-form>

    </div>
</template>

<script>
import {loginList} from '@/api/api'
export default {
    data() {
        return {
            loginData: {
            mobile: "",
            password: "",
            },
            rules:{
                mobile:[
                    {
                        require:true,
                        message:'请输入手机号',
                        trigger:'blur',
                    },{
                        pattern: /^1[3-9]\d{9}$/,
                        message: "手机号格式不正确！",
                        trigger: "blur",
                    },
                ],
                password: [
                    {
                        required: true,
                        message: "请输入密码",
                        trigger: "blur",
                    },
                    {
                        min: 6,
                        max: 20,
                        message: "长度在 6 到 20 个字符",
                        trigger: "blur",
                    },
                ],
            }, 
            // responseResult: [],
        };
    },
    created() {
        this.eventBus.$emit("footernav", false);
    },
    // 出来的时候显示底部导航
    beforeDestroy() {
        this.eventBus.$emit("footernav", true);
    },
    methods: {
        submitForm: function(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    // 获取用户名和密码进行提交（API）
                    let ret = await loginList(this.loginData);
                    // console.log(ret)

                    if(ret.data.code == 1000){
                        this.$store.commit('updateToken' ,ret.data.data._token)
                        this.$router.push({path:'/Center'})
                    }else{
                        alert(ret.data.info)
                    }
                }
            });
            console.log('1')
        },
    },

};
</script>

<style lang="scss" scoped>
#poster {
    background-image: url('../../assets/a2.jpg');
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
    
}
body {
    margin: 0px;
    padding: 0;
}

.login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    /* width: 350px; */
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    opacity: 0.8;
}

.login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
}
.el-container {
        width: 80%;
        margin-left: 40px;
        .el-header {
            font-size: 23px;
        }
    }
</style>


