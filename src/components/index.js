import Vue from 'vue'
import MessageBox from './MessageBox'

export var messageBox = (function () {
    // 默认值
    const defaults = {
        title: '',
        content: '',
        cancel: '',
        ok: '',
        handleCancel: null,
        handleOk: null
    }

    // Vue内置方法,将某个组件转化为类
    var MyComponent = Vue.extend(MessageBox)

    // 返回一个函数，这个函数，接受一个对象参数
    return function (opts) {

        // 遍历对象,将对象中的值付给defaults对象
        for (var attr in opts) {
            defaults[attr] = opts[attr]
        }

        var vm = new MyComponent({
            // el必须要设置
            el: document.createElement('div'),
            data: {
                title: defaults.title,
                content: defaults.content,
                cancel: defaults.cancel,
                ok: defaults.ok
            },
            methods: {
                handleCancel() {
                    // 1. 逻辑运算符的使用，&& 懒运算，前一表达为false时，后面不执行；为true时，才执行
                    // 2. 直接调用，会有this指向问题
                    defaults.handleCancel && defaults.handleCancel.call(this)
                    document.body.removeChild(vm.$el);
                },
                handleOk() {
                    defaults.handleOk && defaults.handleOk.call(this)
                    document.body.removeChild(vm.$el);
                }
            }
        })

        document.body.appendChild(vm.$el);
    }
})()

