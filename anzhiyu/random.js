var posts=["2022/05/11/0-1背包问题/","2024/02/01/AJAX/","2022/07/21/Anaconda使用方法/","2022/05/05/GiteeCreat/","2022/07/12/CNN/","2022/05/05/HuffmanTree/","2023/12/27/JS/","2022/12/29/JDBC教程/","2023/01/31/Javaweb分页问题/","2022/09/16/Java邮件发送/","2022/05/16/JAVA笔记/","2022/05/05/JypyterThemes/","2021/05/05/KMP/","2023/01/22/JavaWeb/","2022/05/05/LDA主题模型/","2022/10/05/MarkDown使用方法/","2022/07/08/PyTorch/","2022/07/03/Python笔记（速过）/","2023/03/29/SSM整合/","2022/11/29/MySql教程/","2023/03/29/SpringBoot/","2023/02/20/Spring/","2023/03/06/SpringMVC/","2022/09/27/Vmtools安转过程和解决问题/","2024/03/12/SpringSecurity/","2024/03/29/SpringCloud/","2022/07/21/git和github使用/","2024/03/08/mybatis-plus/","2024/02/18/Vue/","2023/03/18/mybatis/","2022/05/05/python中jieba库的使用/","2022/05/05/python自动化/","2024/03/08/代码规范/","2022/11/14/使用selenium刷问卷星/","2021/05/05/串数组广义表/","2024/03/08/函数式编程/","2022/09/19/删除Typora中为被引用过的图片/","2022/12/31/图床方案/","2022/05/05/大整数乘法/","2022/07/19/手写体识别/","2022/08/22/操作系统/","2022/05/11/数字电路于逻辑/","2022/06/05/数据分析库/","2021/03/25/数据结构基本原理/","2022/05/05/数据结构排序算法/","2022/07/03/文档扫描OCR识别/","2022/05/05/最大公共子数组问题/","2022/05/08/最小编辑距离/","2022/05/11/最短路径/","2022/05/05/最长公共子序列/","2022/08/11/标签使用/","2021/06/25/栈和队列代码实现/","2021/06/25/栈和队列原理/","2021/09/05/树的代码实现/","2021/09/05/树的基本结构/","2022/05/04/次序选择问题/","2022/07/12/气温数据构建模型/","2022/05/04/活动选择问题/","2022/05/05/浅谈SVM支持向量积/","2022/07/05/深度学习/","2022/06/05/爬虫基本原理/","2022/08/16/电脑组装小记/","2022/05/05/硬币收集问题/","2022/05/05/线性回归的理解/","2021/07/15/线性表的使用/","2021/07/15/线性表算法的实现/","2022/11/30/美化win10终端/","2022/05/05/聚类算法/","2022/07/20/花朵识别/","2022/11/11/解决hexo博客图片无法显示/","2022/06/28/计算机视觉/","2023/02/19/记难忘经历之被坑/","2022/05/04/逆序对问题（分支法）/","2022/07/22/计算机组成原理/","2022/05/07/钢条切割问题/","2022/07/03/银行卡数字识别-OpenCv/","2024/03/17/高版本JDK应用JWT问题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Akilar","link":"https://akilar.top/","avatar":"https://npm.elemecdn.com/akilar-candyassets/image/author3.webp","descr":"店长YYDS","siteshot":"https://s3.bmp.ovh/imgs/2022/08/15/35a6cd1a33cf6b5d.jpg"},{"name":"安知鱼`Blog","link":"https://blog.anheyu.com/","avatar":"https://img01.anheyu.com/useruploads/90/2023/04/23/6444e85234e51.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"Nuyoah","link":"https://262259.xyz/","avatar":"https://s1.ax1x.com/2022/11/27/zUFla6.png","descr":"以梦为马，不负韶华","siteshot":"https://s2.loli.net/2023/05/10/QPSG7j5zVmIRbKD.png"},{"name":"Marcus","link":"https://blog.marcus233.top/","avatar":"https://img01.anzhiy.cn/useruploads/8/2023/01/14/63c23f83f0e11.png","descr":"人间值得，未来可期 嘿嘿"},{"name":"Ariasakaの小窝","link":"https://yisous.xyz","avatar":"https://bu.dusays.com/2022/10/22/6352dfd1f3fa3.png","descr":"人有悲欢离合 月有阴晴圆缺","siteshot":"https://vercel.yisous.xyz/img/siteshot.png"},{"name":"SamのBlog","link":"https://www.welucky.top/","avatar":"https://pic1.imgdb.cn/item/635ceb7f16f2c2beb1e20c46.jpg","descr":"念念不忘，必有回响。","siteshot":"https://pic.imgdb.cn/item/637773a616f2c2beb1011025.jpg"},{"name":"ShineYu","link":"https://blog.shineyu.cn","avatar":"https://s3.uuu.ovh/imgs/2022/11/23/129c19d56d22c637.png","descr":"Let's go! Target: The Vast Stars!"},{"name":"Ice の小站","link":"https://081113.xyz/","avatar":"https://api.ixiaowai.cn/gqapi/gqapi.php","descr":"海内存知己，天涯若比邻"},{"name":"Rootlex","link":"https://blog.nalex.top","avatar":"https://bu.dusays.com/2022/10/21/63527e104561f.png","descr":"寒蝉黎明之时，便是重生之日 |","siteshot":"https://cdn.jsdelivr.net/gh/rootlexblog/ScreenShot@gh-pages/rootlexblog.github.io.jpg"},{"name":"葱苓","link":"https://blog.itciraos.cn","avatar":"https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/avatar1.webp","descr":"Dare && Do","siteshot":"https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/site-shot.webp"},{"name":"CC康纳百川","link":"https://blog.ccknbc.cc","avatar":"https://jsd.cdn.zzko.cn/gh/ccknbc-backup/cdn/logo/ccknbc.png","descr":"CC康纳百川的小窝","screenshot":"https://jsd.cdn.zzko.cn/gh/ccknbc-actions/blogroll@webp/blog.ccknbc.cc.webp"},{"name":"MghyのBlog","link":"https://lmghy.top/","avatar":"https://cdn.staticaly.com/gh/MGHYGitHub/image-hosting@master/image-hosting/36d6c6eb3a95cbd0bdc4a70b221c5a6.7l7dzzhg0k00.webp","descr":"为了明天的摸鱼所以现在摸鱼ing"},{"name":"懒代王","link":"https://www.luomengguo.top/","avatar":"https://pc.luomengguo.top/C341.jpg","descr":"追梦少年,敢干敢搏"},{"name":"鹿啵包の小窝","link":"https://pochacco.top/","avatar":"https://pochacco.top/img/Avatar.gif","descr":"落日橘子海，揽尽世间温柔"},{"name":"鲸落","link":"https://xiaojunnanya.github.io/","avatar":"https://xiaojunnanya.github.io/img/1.jpg","descr":"好友博客","siteshot":"https://s3.bmp.ovh/imgs/2022/08/15/a6985f97b349e4e4.jpg"},{"name":"鹤行川","link":"https://xenonaesir.github.io/","avatar":"https://ak.hypergryph.com/assets/index/images/ak/pc/faction/1.png","descr":"好友博客","siteshot":"https://s3.bmp.ovh/imgs/2022/08/15/7b15e95a6f3fdd54.jpg"},{"name":"StephenJie","link":"https://zhaowenjie30.github.io/","avatar":"https://s3.bmp.ovh/imgs/2022/09/03/6670e5d42feb4464.png","descr":"好友博客","siteshot":"https://s3.bmp.ovh/imgs/2022/09/03/8e507cddcef07760.png"},{"name":"清风","link":"https://limh.cc/","avatar":"https://limh.cc/img/avatar.webp","descr":"人不拼怎知输赢","siteshot":"https://limh.cc/img/limh.cc.jpg"},{"name":"王貔貅","link":"https://blog.wpixiu.cn/","avatar":"https://picture.wpixiu.cn/aoyPjW.jpg","descr":"日就月将,学有缉熙于光明","siteshot":"https://pic2.imgdb.cn/item/64575baa0d2dde5777309417.jpg"},{"name":"御网尚书的日记本","link":"https://hack-gov.com.cn","avatar":"https://websitecssjs.oss-cn-beijing.aliyuncs.com/links/favicon.ico","siteshot":"https://websitecssjs.oss-cn-beijing.aliyuncs.com/links/siteshot.jpg","descr":"愿以赤子之心，共建网络空间安全"},{"name":"Edward's World","link":"https://edwardshh.cn/","avatar":"https://img01.anzhiy.cn/useruploads/0/2023/05/06/6456782fce06e.jpg","descr":"恰如猛虎卧荒丘，潜伏爪牙忍受。","siteshot":"https://img01.anzhiy.cn/useruploads/0/2023/05/09/64591cd546e12.png"},{"name":"X2","link":"https://blog.lrcshare.com","avatar":"https://s2.loli.net/2023/04/22/P2dY84RLjFeCyIt.jpg","descr":"我梦寐以求，是真爱和自由。","siteshot":"https://s2.loli.net/2023/04/25/5HQ3Zyl2JD7zKeL.png"},{"name":"rencai","link":"https://btrencai.top","avatar":"https://img01.anzhiy.cn/useruploads/122/2023/04/09/64323d86807fb.jpg","descr":"今天你学了么","siteshot":"https://img01.anzhiy.cn/useruploads/122/2023/04/25/644754d072ba1.png"},{"name":"朝而往","link":"https://muerg.cn/","avatar":"https://image.muerg.cn/i/2023/05/01/644f6cebafd3d.jpg","descr":"四时之景不同，而乐亦无穷也。","siteshot":"https://image.muerg.cn/i/2023/05/01/644f6c9675c86.jpg"},{"name":"Mxne","link":"https://blog.mxne.cn/","avatar":"https://bu.dusays.com/2023/02/05/63df7de56a470.webp","descr":"学如逆水行舟，不进则退。","siteshot":"https://bu.dusays.com/2023/05/13/645f0d59564f1.webp"},{"name":"萌傀儡","link":"https://blhorizon.github.io/","avatar":"https://cdn1.tianli0.top/npm/blogimages/link/avatar.webp","descr":"珍惜现在，趁早摸鱼","siteshot":"https://cdn1.tianli0.top/npm/blogimages/pictures/khdslb.webp"},{"name":"别亦难","link":"https://lazyingman.com","avatar":"https://bu.dusays.com/2023/06/23/64959cf745a4d.png","descr":"准时不定期更新","siteshot":"https://bu.dusays.com/2023/06/28/649c105e00a4f.png"},{"name":"探人间","link":"https://www.hydsb0.com","avatar":"https://bu.dusays.com/2023/07/10/64abbf448d530.jpg","descr":"努力吃上更贵的雪糕！"},{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网页框架"},{"name":"Youtube","link":"https://www.youtube.com/","avatar":"https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png","descr":"视频网站"},{"name":"Weibo","link":"https://www.weibo.com/","avatar":"https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png","descr":"中国最大的社交网站"},{"name":"Twitter","link":"https://twitter.com/","avatar":"https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png","descr":"社交分享平台"},{"name":"wallhaven","link":"https://wallhaven.cc/","avatar":"https://s3.bmp.ovh/imgs/2022/11/09/abb6e40e9167b308.png","descr":"The best wallpapers on the Net!","siteshot":"https://s2.loli.net/2022/10/13/gniL4CPNOjrov27.png"},{"name":"樱花动漫","link":"https://www.yhdmp.cc/","avatar":"https://i.ibb.co/WcXVz91/QQ-20221102220959.png","descr":"动漫网站","siteshot":"https://i.ibb.co/Y0Gsymn/QQ-20221102221130.png"},{"name":"MSDN","link":"https://next.itellyou.cn/","avatar":"https://static.itellyou.cn/images/logo-white.png"},{"name":"API","link":"https://api.aa1.cn/","avatar":null}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };