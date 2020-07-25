$(function () {
	// 动态轮播图
	banner()
})
let banner = () => {
	// 1.获取轮播图数据
	// 2.根据数据动态渲染	根据当前设备		屏幕宽度判断
	// 2.1	准备数据
	// 2.2	把数据转换成html格式的字符串	（动态创建元素，
	// 字符串拼接，模板引擎【artTemplate】
	// 2.3	把字符渲染页面当中
	// 3.测试功能 页面尺寸发生改变重新渲染
	// 4.移动端手势切换	touch
	
	// ui框架：Bootstrap，妹子ui，jqueryUI，easyUI,
	// jqueryMobile,mui,framework7
	// 关于移动端的UI框架：bootstrap,jqueryMobile,mui,framework7
	// 模板引擎：artTemplate,handlebars,mustache,baiduTemplate,
	// velocity,underscore
	
	// 做数据缓存
	let getData = callback => {
		// 缓存了数据
		if(window.data){
			callback && callback(window.data);
		}else {
			// 1.获取轮播图数据
			$.ajax({
				type: 'get',
				url: 'js/data.json',
				// 强制转换后台返回的数据为json对象
				// 强制转换不成功程序报错，不会执行success，执行error回调
				dataType: 'json',
				data: '',
				success: data => {
					window.data = data;
					callback && callback(window.data)
				}
			});
		}
	}
	let render = () => {
		getData(data => {
			// 2.根据数据动态渲染 根据当前设备 屏幕宽度判断
			//console.log(isMobile);
			// 2.1 准备数据
			// 2.2 把数据转换成html格式的字符串
			// 使用模板引擎：那些html静态内容需要编程动态的
			// 发现：点容器	图片容器  新建模板
			// 开始使用
			/*<% console.log(list); %> 模版引擎内不可使用外部变量 */
			let pointHtml = template('pointTemplate',{list:data});
			//console.log(pointHtml);
			let imageHtml = template('imageTemplate',{list:data,isMobile:isMobile});
			//console.log(imageHtml);
			// 2.3 把字符渲染到页面中
			$('.carousel-indicators').html(pointHtml);
			$('.carousel-inner').html(imageHtml);
		});
	}
	
	
	
	
	
	
	
	
	
}