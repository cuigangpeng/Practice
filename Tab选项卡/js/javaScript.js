var allLis = $("box").getElementsByClassName('header')[0].getElementsByTagName('li');
var allBody = document.getElementsByClassName('content')[0].getElementsByClassName('body');

for (var i = 0; i < allLis.length; i++) {
    var sli = allLis[i];
    
    //闭包实现
    // (function (i) {
    //     var sbody = allBody[i];
    //     sli.onmouseover = function () {
    //         for (var j = 0; j < allLis.length; j++) {
    //             allLis[j].className = "";
    //             allBody[j].style.display = "none";
    //         }
            
    //         this.className = "selected"; //在js中给元素设置class时应写className
    //         sbody.style.display = "block";
    //     }
    // })(i)

    //绑定属性实现
    sli.index =  i;
    sli.onmouseover = function () {
        for (var j = 0; j < allLis.length; j++) {
            allLis[j].className = "";
            allBody[j].style.display = "none";
        }
        
        this.className = "selected"; //在js中给元素设置class时应写className
        allBody[this.index].style.display = "block";
    }
    
}

function $(id) {
    return typeof id === "string" ? document.getElementById(id) : null;
}