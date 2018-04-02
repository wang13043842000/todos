; (function (window) {
	const todos = [
		{
			id: 1,
			title: '吃饭',
			done: true
		},
		{
			id: 2,
			title: '睡觉',
			done: false
		},
		{
			id: 3,
			title: '打豆豆',
			done: false
		},
		{
			id: 4,
			title: '写代码',
			done: true
		}
	]

	const app = new Vue({

		el: '#todoapp',
		data: {
			todos: todos,//数据
			inputText:'',//用来绑定获取添加任务文本框的内容
			current:null,//用来判定是否获得样式的标记
			titletwo:''//用于在编辑时候备份
		},
		methods: {
			// 拿到键盘事件对象
			addTodo:function(e){
				// 拿到文本框的内容
				// 非空效验
				// 添加到数组中
				// 清空文本框
				// 去除空格
				if(this.inputText.trim().length===0){
					// 如果没有内容 结束执行
					return
				}
				// 获取最后一项的id
				const lastid = this.todos[todos.length-1]
				// 判断一下有没有最后一个id 如果没有给一个1 否则会报错
				var  todosid = lastid ? lastid.id+1 : 1
				
				console.log(todosid)
				this.todos.push({
					id:todosid,
					title: this.inputText,
					done:false
				})
				this.inputText = ''
			},
			// 删除
			// 参数： 当前点击这调任务的索引
			deletes:function(index){
				// 当前所以开始删除一个--删除当前
				this.todos.splice(index,1)
			},
			// 双击进入编辑状态
			dbclick:function(item){
				// 将current赋值为当前双击的任务项
				this.current = item
				this.titletwo = item.title
			},
			// 保存编辑
			saveEdit:function(item,index){
				// console.log(this.current)
				// 判断当前双击的编辑项 是否为空
				// 如果为空 删除当前整个元素
				// 如果不为空 保存编辑 
				if(item.title.trim().length===0){
					// 为空删除
					this.todos.splice(index,1)
					return
				}else{
					this.current = null
				}
				// // 如果不为空 保存编辑
				// if(!this.current.title.trim().length===0){
				// 	this.current = null
				// }
			},
			// esc取消编辑
			// 因为取消编辑的时候 同时也触发了鼠标失去焦点的事件
			escEdit:function(){
				// 先拿到编辑之前的内容
					// this.titletwo = item.title
				// 让任务项的title回归原始数据
				this.current.title = this.titletwo
				// 去除编辑样式

				// 因为取消编辑去除样式 同时也触发了鼠标失去焦点的事件
				this.current = null
			}
		}
	})

})(window);
