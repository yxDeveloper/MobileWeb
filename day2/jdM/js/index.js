window.onload = function () {
    let jdShop = new JdShop();
    // 1.顶部搜索
    jdShop.search();
    // 2.轮播图
    jdShop.banner();
    // 3.倒计时
    jdShop.downTime();
}
class JdShop {
    search () {
        // 1.默认固定顶部透明背景
        let searchBox = document.querySelector('.jd_search_box');
        let banner = document.querySelector('.jd_banner');
        let height = banner.offsetHeight;
        // 监听页面滚动事件
        window.onscroll = function () {
            // console.log(document.body.scrollTop);
            // console.log(document.documentElement.scrollTop);
            // console.log(window.pageYOffset);
            let scrollTop = document.body.scrollTop;
            // console.log(scrollTop);
            // 默认的透明度
            let opacity = 0;
            if (scrollTop < height) {
                // 2.当页面滚动的时候---随着页面卷曲的高度大
                // 透明度变大
                opacity = scrollTop / height * 0.85;
            } else {
                // 3.当页面滚动的时候---超过某一个高度的时候透明度
                // 固定不变
                opacity = 0.85;
            }
            searchBox.style.background = `rgba(201,21,35,${opacity})`;
        }
    }
    banner () {
        // 1.自动轮播图且无缝   定时器，过渡
        // 2.点要随着图片的轮播改变 根据索引切换
        // 3.滑动效果   利用touch事件完成
        // 4.滑动结束的时候     如果滑动的距离不超过屏幕的1/3
        // 吸附回去    过渡
        // 5.滑动结束的时候     如果滑动的距离超过屏幕的1/3 切换
        // （上一张，下一张）根据滑动的方向，过渡
        
    }
    downTime () {

    }

}


