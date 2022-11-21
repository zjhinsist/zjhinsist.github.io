// 返回顶部 显示网页阅读进度
window.onscroll = percent; // 执行函数
// 页面百分比
function percent() {
  let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
    b =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
    result = Math.round((a / b) * 100), // 计算百分比
    btn = document.querySelector('#percent'); // 获取图标

  result <= 99 || (result = 99);

  r = window.scrollY + document.documentElement.clientHeight;
  p = document.getElementById('post-comment') || document.getElementById('footer');

  p.offsetTop + p.offsetHeight / 2 < r || 90 < result
    ? (document.querySelector('#nav-totop').classList.add('long'), (btn.innerHTML = '返回顶部'))
    : (document.querySelector('#nav-totop').classList.remove('long'), (btn.innerHTML = result));

  document.getElementById("page-name").innerText = document.title.split(" | Nuyoah")[0];
}

if (document.querySelector('#bber-talk')) {
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true,
    autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true
  },
  });
}

searchSize();
window.addEventListener('resize', searchSize)
// 搜索窗口自适应
function searchSize() {
    // 只需要适应手机端
    if (document.body.clientWidth > 768) return
    let div = document.querySelector('#algolia-hits')
    // 监听插入，如果有插入则根据可视高度动态设置最大高度
    div.addEventListener('DOMNodeInserted', () => {
        div.children[0].style.maxHeight = (document.documentElement.clientHeight - 210) + 'px'
    })
}