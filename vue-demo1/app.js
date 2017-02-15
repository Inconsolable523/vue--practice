// import bar from './bar';
import Vue from 'vue';
var app=new Vue({
	el: '#app',
	data:{
		// 作为input的值
		newTodo: '',
		todoList: []//所有待办事项的容器
	},
	created: function(){
    // onbeforeunload文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onbeforeunload
    window.onbeforeunload = ()=>{
      let dataString = JSON.stringify(this.todoList) // JSON 文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON
      window.localStorage.setItem('myTodos', dataString) // 看文档https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage
    }

    let oldDataString = window.localStorage.getItem('myTodos')
    let oldData = JSON.parse(oldDataString)
    this.todoList = oldData || []

  },
	methods:{
		addTodo: function(){
			this.todoList.push({
				title:this.newTodo,
				createdAt: new Date,
				done:false
			})
			this.newTodo='';
			console.log(this.todoList)
		},
		removeTodo:function(todo){
			let index=this.todoList.indexOf(todo);
			console.log(this.todoList);
			this.todoList.splice(index,1);
		}
	}
})