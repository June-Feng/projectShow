var Main = {
    data() {
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                username: '',
                password: '',
                repasword: '',
                phone: '',
                email: ''
            },
            rules: {
                username: [{
                    required: true,
                    message: '请输入用户名',
                    trigger: 'blur'
                }, {
                    min: 3,
                    max: 12,
                    message: '请输入3-12字的用户名',
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                }, {
                    min: 6,
                    max: 18,
                    message: '请输入6-18位的密码',
                    trigger: 'blur'
                }],
                repassword: [{
                    validator: validatePass2,
                    trigger: 'blur'
                }],
                phone: [{
                    required: true,
                    message: '请输入手机号',
                    trigger: 'blur'
                }, {
                    pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
                    message: '请输入正确的手机号',
                    trigger: 'blur'
                }],
                email: [{
                    required: true,
                    message: '请输入电子邮箱地址',
                    trigger: 'blur'
                }, {
                    pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                    message: '请输入正确的邮箱地址',
                    trigger: 'blur'
                }]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')