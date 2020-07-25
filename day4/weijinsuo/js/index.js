$(function () {
	// 动态轮播图
	banner()
})
let banner = function() {
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
			let isMobile = $(window).width() < 768 ? true : false;
			//console.log(isMobile);
			// 2.1 准备数据
			// 2.2 把数据转换成html格式的字符串
			// 使用模板引擎：那些html静态内容需要编程动态的
			// 发现：点容器	图片容器  新建模板
			// 开始使用
			/*<% console.log(list); %> 模版引擎内不可使用外部变量 */
			let pointHtml = template('pointTemplate',{list:data});
			//console.log(pointHtml);
			let imageHtml = template('imageTemplate',{list:data,isMobile: isMobile});
			//console.log(imageHtml);
			// 2.3 把字符渲染到页面中
			$('.carousel-indicators').html(pointHtml);
			$('.carousel-inner').html(imageHtml);
		});
	}
	// 3.测试功能 页面尺寸发生改变事件
	$(window).on('resize',() => {
		render();
		// 通过js主动触发某个事件
	}).trigger('resize');
	// 4.移动端手势切换
	let startX = 0
	let distanceX = 0
	let isMove = false
	// originalEvent 代表js原生事件
	$('.wjs_banner').on('touchstart',e => {
		startX = e.originalEvent.touches[0].clientX
	}).on('touchmove',e => {
		let moveX = e.originalEvent.touches[0].clientX
		distanceX = moveX - startX
		isMove = true
	}).on('touchend',e => {
		// 距离足够 50px 一定要滑动过
		if(isMove && Math.abs(distanceX) > 50) {
			// 手势
			// 左滑手势
			if(distanceX < 0) {
				// console.log('next');
				$('.carousel').carousel('next');
			}
			// 右滑手势
			else {
				// console.log('prev');
				$('.carousel').carousel('prev');
			}
		}
		startX = 0
		distanceX = 0
		isMove = false
	});
	
}
