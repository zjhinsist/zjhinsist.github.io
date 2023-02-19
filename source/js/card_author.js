var card_author = {
    getTimeState: function() {
        var e = (new Date()).getHours();
        var t = "";
        if(0 < e && e < 5){
            t="晚安😴";
        }else if(4 < e && e < 10){
            t = "早上好👋";
        }else if(9 < e && e < 14){
            t = "中午好👋";
        }else if(13 < e && e < 18){
            t = "下午好👋"; 
        }else if(17 < e && e < 24){
            t = "晚上好👋";
        }
        return t;
        
    },
    sayhi: function() {
        var e = document.getElementById("author-info__sayhi");
        e && (e.innerHTML = card_author.getTimeState() + "！我是")
    },
}
card_author.sayhi();

