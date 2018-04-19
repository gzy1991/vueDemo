
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


var app19=new Vue({
    el: '#app19',
    data: {
        numbers: [ 1, 2, 3, 4, 5 ]
    },
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    },
    methods: {
        even: function (numbers) {
            return numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    }
})


var app20=new Vue({
    el:"#app20",
    data:{
        items:[
            {msg:"qeqw"},
            {msg:"sss"}
        ]
    }
})

Vue.component('todo-item', {
    template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
    props: ['title']
})

new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'Do the dishes',
            },
            {
                id: 2,
                title: 'Take out the trash',
            },
            {
                id: 3,
                title: 'Mow the lawn'
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
})

var example11 = new Vue({
    el: '#example-11',
    data: {
        counter: 0
    }
})

var example22 = new Vue({
    el: '#example-22',
    data: {
        name: 'Vue.js'
    },
    // 在 `methods` 对象中定义方法
    methods: {
        greet: function (event) {
            // `this` 在方法里指向当前 Vue 实例
            alert('Hello ' + this.name + '!')
            // `event` 是原生 DOM 事件
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
})
// 也可以用 JavaScript 直接调用方法
//example22.greet() // => 'Hello Vue.js!'
new Vue({
    el: '#example-3',
    methods: {
        say: function (message) {
            alert(message)
        },
        warn: function (message, event) {
            // 现在我们可以访问原生事件对象
            if (event) event.preventDefault()
            alert(message)
        }
    }
})
new Vue({
    el: '#app21',
    data:{
        message:"",
        message2:"",
        checked:false
    }
})

new Vue({
    el: '#example-33',
    data: {
        checkedNames: []
    }
})

new Vue({
    el: '#example-4',
    data: {
        picked: ''
    }
})
new Vue({
    el: '#example-5',
    data: {
        selected: ''
    }
})
new Vue({
    el: '#example-6',
    data: {
        selected: []
    }
})
new Vue({
    el: '#app23',
    data: {
        selected: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ]
    }
})


new Vue({
    el: '#app24',
    data: {
        picked: 'A',
        toggle: 'A',
        selected: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ]
    }
})
