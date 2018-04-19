
var app6 = new Vue({
    el:"#app6",
    data:{
        rawHtml:"gzy"
    }
})

var app7 = new Vue({
    el:"#app7",
    data:{
        rawHtml:"<span style='color:red'>this should be red</span>"
    }
})
var app8 = new Vue({
    el:"#example",
    data:{
        message:"Hello"
    },
    computed:{
        reversedMessage:function(){
            return this.message.split("").reverse().join('')
        }
    }
})

var app9 = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'

    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
})
var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        // 如果 `question` 发生改变，这个函数就会运行
        question: function (newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            this.getAnswer()
        }
    },
    methods: {
        // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
        // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
        // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
        // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
        // 请参考：https://lodash.com/docs#debounce
        getAnswer: _.debounce(
            function () {
                if (this.question.indexOf('?') === -1) {
                    this.answer = 'Questions usually contain a question mark. ;-)'
                    return
                }
                this.answer = 'Thinking...'
                var vm = this
                axios.get('https://yesno.wtf/api')
                    .then(function (response) {
                        vm.answer = _.capitalize(response.data.answer)
                    })
                    .catch(function (error) {
                        vm.answer = 'Error! Could not reach the API. ' + error
                    })
            },
            // 这是我们为判定用户停止输入等待的毫秒数
            500
        )
    }
})
var app10 = new Vue({
    el:"#app10",
    data: {
        isActive: true,
        hasError: false
    }
})

var app11 = new Vue({
    el:"#app11",
    data:{
        activeColor:'red',
        fontSize:20
    }

})

var app12 = new Vue({
    el:"#app12",
    data:{
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    }

})

var app13 = new Vue({
    el:"#app13",
    data:{
        ok:false
    }
})

var app14 = new Vue({
    el:"#app14",
    data:{
        type:"A"
    }
})

var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})
var example2 = new Vue({
    el: '#example-2',
    data: {
        parentMessage: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})

var app17=new Vue({
    el: '#v-for-object',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
})

var app18=new Vue({
    el: '#app18',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
})