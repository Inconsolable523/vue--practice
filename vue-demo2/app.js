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
	// 因为刷新页面会跳转到其他页面，那当前页面的请求就没有意义了，所以浏览器就直接取消了这个请求，所以
	// beforeunload事件里面的所有请求都发不出去，所以无法保存数据
	// created: function(){
 //    // onbeforeunload文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onbeforeunload
 //    window.onbeforeunload = ()=>{
 //    	// 保存数据
 //      let dataString = JSON.stringify(this.todoList) ;// JSON 文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON
 //      var todos=AV.Object.extend('todos');
 //      var toDos=new todos();
 //      toDos.set('content',dataString);
 //      toDos.save().then(function(todo){
 //      	console.log('保存成功');
 //      },function(error){
 //      	console.error('保存失败');
 //      })
 //      debugger;
      
 //    }
 //  },
    created:function(){
    	// 读取
    	this.currentUser = this.getCurrentUser();
    	this.getTodos();
 },
	methods:{
		getTodos:function(){
		if(this.currentUser){
    		var query = new AV.Query('todos');
    		query.find().then((todo)=>{
    			let getTodo = todo[0];
    			let id = getTodo.id;
    			this.todoList = JSON.parse(getTodo.attributes.content);
    			this.todoList.id=id;
    			console.log(todo);
    		},function(error){
    			console.error(error);
    		})
    	}
		},
		updateTodos:function(){
			let dataString=JSON.stringify(this.todoList);
			let todo = AV.Object.createWithoutData('todos',this.todoList.id);
			todo.set('content',dataString);
			todo.save().then(()=>{
				console.log('更新成功');
			})
		},
		saveTodos:function(){
	      let dataString = JSON.stringify(this.todoList);
	      var todos=AV.Object.extend('todos');
	      var toDos=new todos();
	      var acl=new AV.ACL();
	      acl.setReadAccess(AV.User.current(),true);//只有这个用户可读
	      acl.setWriteAccess(AV.User.current(),true);//只有这个用户可写
	      toDos.set('content',dataString);
	      toDos.setACL(acl);//设置访问权限 
	      toDos.save().then((todo) =>{
	      	this.todoList.id = todo.id;
	      	console.log('保存成功');
	      },function(error){
	      	console.error('保存失败');
	      })
		},
		addTodo: function(){
			this.todoList.push({
				title:this.newTodo,
				createdAt: new Date,
				done:false
			})
			this.newTodo='';
			// this.saveTodos();//新增的时候保存请求
			this.change();
		},
		removeTodo:function(todo){
			let index=this.todoList.indexOf(todo);
			console.log(this.todoList);
			this.todoList.splice(index,1);
			// this.saveTodos();//删除的时候保存请求
			this.change();
		},
		signup:function(){
			let user=new AV.User();
			user.setUsername(this.formData.username);
			user.setPassword(this.formData.password);
			user.signUp().then((loginedUser)=>{
				this.currentUser = this.getCurrentUser();
			},function(error){
				console.log('注册失败！');

			});
		},
		login:function(){
			AV.User.logIn(this.formData.username,this.formData.password).then((loginedUser)=>{
				this.currentUser = this.getCurrentUser();
				this.getTodos();
			},function(error){
				console.log('登录失败！');
			});
		},
		logout:function(){
			AV.User.logOut();
			this.currentUser = AV.User.current();
			window.location.reload();
		},
		getCurrentUser:function(){
			let current = AV.User.current();
			if(current){
			let {id,createdAt,attributes:{username}}= AV.User.current();
			return {id,username,createdAt};
		}else{
			return null;
		}
		},
		change:function(){
			if(this.todoList.id){
				this.updateTodos();
			}else{
				this.saveTodos();
			}
		}
	}
})