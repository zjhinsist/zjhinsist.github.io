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

  p.offsetTop + p.offsetHeight / 2 < r || 99 < result
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

// 存数据
// name：命名 data：数据
function saveData(name, data) {
  localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
  let d = JSON.parse(localStorage.getItem(name));
  // 过期或有错误返回 0 否则返回数据
  if (d) {
      let t = Date.now() - d.time
      if (t < (time * 60 * 1000) && t > -1) return d.data;
  }
  return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
  let data = loadData('blogbg', 1440)
  if (data) changeBg(data, 1)
  else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
  let bg = document.getElementById('web_bg')
  if (s.charAt(0) == '#') {
      bg.style.backgroundColor = s
      bg.style.backgroundImage = 'none'
  } else bg.style.backgroundImage = s
  if (!flag) { saveData('blogbg', s) }
}

"use strict";
var nuyoah = {
    // 防抖
    debounce: (fn, delay = 200) => {
        let timeout = null;
        return function(...args) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            timeout = setTimeout(() => {
                fn.apply(this, args)
            }, delay);
        }
    },
    // 存数据
    saveData: (name, data) => {
        localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
    },
    // 取数据
    loadData: (name, time) => {
        let d = JSON.parse(localStorage.getItem(name));
        // 过期或有错误返回 0 否则返回数据
        if (d) {
            let t = Date.now() - d.time
            if (t < (time * 60 * 1000) && t > -1) return d.data;
        }
        return 0;
    },
    // 切换模式
    switchDarkMode: () => {
        "light" == ("dark" === document.documentElement.getAttribute("data-theme") ? "dark" : "light") ? (activateDarkMode(),
            saveToLocal.set("theme", "dark", 2),
            void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)) : (activateLightMode(),
            saveToLocal.set("theme", "light", 2),
            void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),
        "function" == typeof utterancesTheme && utterancesTheme(),
            "object" === ("undefined" == typeof FB ? "undefined" : _typeof(FB)) && window.loadFBComment(),
            window.DISQUS && document.getElementById("disqus_thread").children.length && setTimeout(function() {
                return window.disqusReset()
            }, 200)
    },
    // 切换统计颜色
    switchPostChart: () => {
        // 这里为了统一颜色选取的是“明暗模式”下的两种字体颜色，也可以自己定义
        let color = document.documentElement.getAttribute('data-theme') === 'light' ? '#4c4948' : 'rgba(255,255,255,0.7)'
        if (document.getElementById('posts-chart') && postsOption) {
            try {
                let postsOptionNew = postsOption
                postsOptionNew.title.textStyle.color = color
                postsOptionNew.yAxis.nameTextStyle.color = color
                postsOptionNew.xAxis.axisLabel.color = color
                postsOptionNew.yAxis.axisLabel.color = color
                postsOptionNew.xAxis.axisLine.lineStyle.color = color
                postsOptionNew.yAxis.axisLine.lineStyle.color = color
                postsOptionNew.series[0].markLine.data[0].label.color = color
                postsChart.setOption(postsOptionNew)
            } catch (error) {
                console.log(error)
            }
        }
        if (document.getElementById('tags-chart') && tagsOption) {
            try {
                let tagsOptionNew = tagsOption
                tagsOptionNew.title.textStyle.color = color
                tagsOptionNew.yAxis.nameTextStyle.color = color
                tagsOptionNew.xAxis.axisLabel.color = color
                tagsOptionNew.yAxis.axisLabel.color = color
                tagsOptionNew.xAxis.axisLine.lineStyle.color = color
                tagsOptionNew.yAxis.axisLine.lineStyle.color = color
                tagsOptionNew.series[0].markLine.data[0].label.color = color
                tagsChart.setOption(tagsOptionNew)
            } catch (error) {
                console.log(error)
            }
        }
        if (document.getElementById('categories-chart') && categoriesOption) {
            try {
                let categoriesOptionNew = categoriesOption
                categoriesOptionNew.title.textStyle.color = color
                categoriesOptionNew.legend.textStyle.color = color
                categoriesOptionNew.legend.pageTextStyle.color = color
                categoriesOptionNew.series[0].label.color = color
                categoriesChart.setOption(categoriesOptionNew)
            } catch (error) {
                console.log(error)
            }
        }
    },
  
    // 分享链接
    share: () => {
        let url = window.location.origin + window.location.pathname
        new ClipboardJS(".share", { text: function() { return '标题：' + document.title + '\n链接：' + url } });
        btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")
    },
    // 加载壁纸
    loadBG: () => {
        try {
            let data = nuyoah.loadData('blogbg', 1440)
            if (data) nuyoah.changeBg(data, 1)
            else localStorage.removeItem('blogbg');
        } catch (error) { localStorage.removeItem('blogbg'); }
    },
    // 切换背景,flag为1不弹窗
    changeBg: (s, flag) => {
        let bg = document.getElementById('web_bg')
        if (s.charAt(0) == '#') {
            bg.style.backgroundColor = s
            bg.style.backgroundImage = 'none'
        } else bg.style.backgroundImage = s
        document.querySelector('#nav').style.background = 'var(--card-bg)';
        if (!flag) {
            btf.snackbarShow("壁纸切换成功，将于一天后到期~");
            nuyoah.saveData('blogbg', s)
        }
    },
    // 随即壁纸
    randomBg: (s) => {
        let api
        if (s == 'fj') api='https://tu.ltyuanfang.cn/api/fengjing.php'
        else if (s == 'mv') api += 'meinv'
        else api += 'https://api.ixiaowai.cn/api/api.php'
        fetch(api).then(res => res.text()).then((data) => { nuyoah.changeBg("url('" + data + "')") }).catch()
    },
  
    // 创建窗口
    winbox: '',
    createWinbox: () => {
        let div = document.createElement('div')
        document.body.appendChild(div)
        nuyoah.winbox = WinBox({
            id: 'changeBgBox',
            index: 999,
            title: "切换背景",
            x: "center",
            y: "center",
            minwidth: '300px',
            height: "60%",
            background: 'var(--nuyoah-blue)',
            onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}.winbox{border-radius:0}</style>` },
            onrestore: () => { div.innerHTML = '' }
        });
        nuyoah.winResize();
        window.addEventListener('resize', nuyoah.winResize)
        nuyoah.winbox.body.innerHTML = `
    <style>
        #changeBgBox .note {
            font-size: 14px;
            margin: 0 0 10px;
            padding: 9px 0 9px 2.3rem;
        }
        #changeBgBox .note:not(.no-icon)::before,
        #changeBgBox .note>.note-icon {
            left: 0.5em;
        }
        #changeBgBox button {
            padding:12px 0 !important;
        }
        #changeBgBox a.imgbox {
            text-decoration: none !important;
        }
        #changeBgBox .toggle>.toggle-content {
            margin: 0;
        }
    </style>
    <div id="article-container" style="padding:10px;"><div class="note info flat"><p>点击对应样式即可切换背景。<br>相册图片也可以当作壁纸哦~ <a href="/wallpaper/">前往相册</a></p>
    </div>
    <div class="note pink icon-padding flat"><i class="note-icon fa-solid fa-image"></i><p>有效期为一天，到期切回默认壁纸。</p>
    </div>

    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
    
    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>
    <details class="toggle"><summary class="toggle-button" style="">查看电脑壁纸</summary>
        <div class="toggle-content">
            <div class="bgbox">
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/19/v4brSR2Dn3BjXpt.jpg)" class="imgbox" onclick="nuyoah.changeBg('url(https\://s2.loli.net/2022/11/19/v4brSR2Dn3BjXpt.jpg)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s3.bmp.ovh/imgs/2022/10/05/3258df1e072f1220.jpg)" class="imgbox" onclick="nuyoah.changeBg('url(https\://s3.bmp.ovh/imgs/2022/10/05/3258df1e072f1220.jpg)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s3.bmp.ovh/imgs/2022/07/27/f60f636122c787e1.jpg)" class="imgbox" onclick="nuyoah.changeBg('url(https\://s3.bmp.ovh/imgs/2022/07/27/f60f636122c787e1.jpg)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/19/vJMKhVAUYNXRQuE.jpg)" class="imgbox" onclick="nuyoah.changeBg('url(https\://s2.loli.net/2022/11/19/vJMKhVAUYNXRQuE.jpg')"></a>
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/19/5yBnV3OzjDICrEb.jpg)" class="imgbox" onclick="nuyoah.changeBg('url(https\://s2.loli.net/2022/11/19/5yBnV3OzjDICrEb.jpg)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/19/c1KxnECr4VL3qN5.jpg)" class="imgbox" onclick="nuyoah.changeBg('url(https\://s2.loli.net/2022/11/19/c1KxnECr4VL3qN5.jpg)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/19/B89gcloHOqx2z1E.png)" class="imgbox" onclick="nuyoah.changeBg('url(https\://s2.loli.net/2022/11/19/B89gcloHOqx2z1E.png)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/19/j5yB7kgfqsJA2cz.png)" class="imgbox" onclick="nuyoah.changeBg('url(https\://s2.loli.net/2022/11/19/j5yB7kgfqsJA2cz.png)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/19/MkDHwvYu5p8XLBy.jpg)" class="imgbox" onclick="nuyoah.changeBg('url(https\://s2.loli.net/2022/11/19/MkDHwvYu5p8XLBy.jpg)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" class="imgbox" style="display:flex;justify-content: center;align-items: center; background:#ff4b1f;color:white;" onclick="nuyoah.randomBg('fj')">随机风景背景</a>
            <a href="javascript:;" rel="noopener external nofollow" class="imgbox" style="display:flex;justify-content: center;align-items: center; background:#16bffd;color:white;" onclick="nuyoah.randomBg('mv')">随机美女背景</a>
            <a href="javascript:;" rel="noopener external nofollow" class="imgbox" style="display:flex;justify-content: center;align-items: center; background:#ef5350;color:white;" onclick="nuyoah.randomBg('dm')">随机动漫背景</a>
            </div>
        </div>
    </details>

    <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h2>
    <details class="toggle"><summary class="toggle-button" style="">查看手机壁纸</summary>
        <div class="toggle-content">
            <div class="bgbox">
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/12/2021122715170589.jpeg)" class="pimgbox" onclick="nuyoah.changeBg('url(https\://img.vm.laomishuo.com/image/2021/12/2021122715170589.jpeg)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/05/2021053107390019.jpeg)" class="pimgbox" onclick="nuyoah.changeBg('url(https\://img.vm.laomishuo.com/image/2021/05/2021053107390019.jpeg')"></a>
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/08/2021082418471438.jpeg)" class="pimgbox" onclick="nuyoah.changeBg('url(https\://img.vm.laomishuo.com/image/2021/08/2021082418471438.jpeg)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/05/2021053111333664.jpeg)" class="pimgbox" onclick="nuyoah.changeBg('url(https\://img.vm.laomishuo.com/image/2021/05/2021053111333664.jpeg)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/05/2021052509214162.jpeg)" class="pimgbox" onclick="nuyoah.changeBg('url(https\://img.vm.laomishuo.com/image/2021/05/2021052509214162.jpeg)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/10/2021101113150626.jpeg)" class="pimgbox" onclick="nuyoah.changeBg('url(https\://img.vm.laomishuo.com/image/2021/10/2021101113150626.jpeg)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/12/2021121119294157.jpeg)" class="pimgbox" onclick="nuyoah.changeBg('url(https\://img.vm.laomishuo.com/image/2021/12/2021121119294157.jpeg)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2022/05/2022050211365433.jpg)" class="pimgbox" onclick="nuyoah.changeBg('url(https\://img.vm.laomishuo.com/image/2022/05/2022050211365433.jpg)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/01/2021011114540487.jpeg)" class="pimgbox" onclick="nuyoah.changeBg('url(https\://img.vm.laomishuo.com/image/2021/01/2021011114540487.jpeg)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/10/2021101112481925.jpeg)" class="pimgbox" onclick="nuyoah.changeBg('url(https\://img.vm.laomishuo.com/image/2021/10/2021101112481925.jpeg)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2020/12/2020120109592351.jpeg)" class="pimgbox" onclick="nuyoah.changeBg('url(https\://img.vm.laomishuo.com/image/2020/12/2020120109592351.jpeg)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/08/2021081519313621.jpeg)" class="pimgbox" onclick="nuyoah.changeBg('url(https\://img.vm.laomishuo.com/image/2021/08/2021081519313621.jpeg)')"></a>
            </div>
        </div>
    </details>

    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
    <details class="toggle"><summary class="toggle-button" style="">查看渐变背景</summary>
        <div class="toggle-content">
            <div class="bgbox">
            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="nuyoah.changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(255, 110, 127), rgb(191, 233, 255))" onclick="nuyoah.changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #ff4b1f, #1fddff)" onclick="nuyoah.changeBg('linear-gradient(to right, #ff4b1f, #1fddff)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(251, 215, 134), rgb(247, 121, 125))" onclick="nuyoah.changeBg('linear-gradient(to right, rgb(251, 215, 134), rgb(247, 121, 125))')"></a>
            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #16bffd, #cb3066)" onclick="nuyoah.changeBg('linear-gradient(to right, #16bffd, #cb3066)')"></a>
            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(192, 192, 170), rgb(28, 239, 255))" onclick="nuyoah.changeBg('linear-gradient(to right, rgb(192, 192, 170), rgb(28, 239, 255))')"></a>
            </div>
        </div>
    </details>

    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <details class="toggle"><summary class="toggle-button" style="">查看纯色背景</summary>
        <div class="toggle-content">
            <div class="bgbox">
            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #F4E2D8" onclick="nuyoah.changeBg('#F4E2D8')"></a>
            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="nuyoah.changeBg('#7D9D9C')"></a>
            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #F2D7D9" onclick="nuyoah.changeBg('#F2D7D9')"></a>
            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #76BA99" onclick="nuyoah.changeBg('#76BA99')"></a>
            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #9FC088" onclick="nuyoah.changeBg('#9FC088')"></a>
            <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #CEAB93" onclick="nuyoah.changeBg('#CEAB93')"></a>
            </div>
        </div>
    </details>
`;
    },
    // 适应窗口大小
    winResize: () => {
        var offsetWid = document.documentElement.clientWidth;
        if (offsetWid <= 768) nuyoah.winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
        else nuyoah.winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    },
    // 按钮切换显示，有窗口进行切换，没窗口创建窗口
    toggleWinbox: () => {
        if (document.querySelector('#changeBgBox')) nuyoah.winbox.toggleClass('hide');
        else nuyoah.createWinbox();
    }
}