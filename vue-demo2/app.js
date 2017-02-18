// import bar from './bar';
import Vue from 'vue';
import AV from 'leancloud-storage'

var APP_ID ='cN0azf8XTK8hx0Mq8BV4Q7FS-gzGzoHsz';
var APP_KEY = '1IPVQS1iutEBrH5yYK2kyYv5';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
// 验证
// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })

var app=new Vue({
	el: '#app',
	data:{
		actionType: 'signup',
		// 作为input的值
		newTodo: '',
		todoList: [],//所有待办事项的容器
		currentUser: null,
		formData:{
			username:'',
			password:''
		}
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
		},
		signup:function(){
			let user=new AV.User();
			user.setUsername(this.formData.username);
			user.setPassword(this.formData.password);
			user.signUp().then((loginedUser)=>{
				this.currentUser = this.getCurrentUser();
			},function(error){
				alert('注册失败！');

			});
		},
		login:function(){
			AV.User.logIn(this.formData.username,this.formData.password).then((loginedUser)=>{
				this.currentUser = this.getCurrentUser();
			},function(error){
				alert('登录失败！');
			});
		},
		logout:function(){
			AV.User.logOut();
			this.currentUser = AV.User.current();
			window.location.reload();
		},
		getCurrentUser:function(){
			let {id,createdAt,attributes:{username}}= AV.User.current();
			return {id,username,createdAt};
		}
	}
})