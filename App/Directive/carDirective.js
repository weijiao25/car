var banner = new Swiper('.banner', {
    pagination: '.swiper-pagination',
    loop: true,
    autoplay: 1000
});
myswiper = new Swiper('.swiper-container', {
    pagination: ".swiper-pagination",
    paginationClickable: true,
    paginationType: "progress"
});
function slideTo(index) {
    myswiper.slideTo(index);
}

var isD = document.getElementById('is-down');
var isU = document.getElementById('is-up');
var isDh = isD.offsetHeight;
var str = '';
function upObject() {
    console.log(333)
}

function downObject() {
    $.getJSON('Data/data.json', function (data) {
        $.each(data, function (i, v) {
            str +="<dl><dt><img src ="+${v.img}+"></dt><dd><span>"+${v.name}+"</span><p>"+${v.cont} +"</p><p><strong>"+${v.pricenow}+"</strong><s>"+${v.price}+"</s></p></dd></dl>"})
    })
    $('#cont').append(str);
}
var myScroll = new iScroll('wrapper', {
    topOffset: isDh,
    onScrollMove: function () {
        if (this.y > 20 && !isD.className.match('flip')) {
            isD.className = 'flip';
            isD.querySelector('span').innerHTML = '正在加载'
        }
        if (this.y < this.maxScrollY && !isU.className.match('flip')) {
            isU.className = 'flip';
            isU.querySelector('span').innerHTML = '正在加载';
        }
    },
    onScrollEnd: function () {
        if (isD.className.match('flip')) {
            isD.className = 'loading';
            upObject();
            myScroll.refresh();
        }
        if (isU.className.match('flip')) {
            isU.className = 'loading';
            downObject();
            myScroll.refresh();
        }
    },
    onRefresh: function () {
        if (isD.className.match('loading')) {
            isD.className = '';
            isD.querySelector('span').innerHTML = '上拉刷新'
        }
        if (isU.className.match('loading')) {
            isU.className = '';
            isU.querySelector('span').innerHTML = '下拉加载'
        }
    }
})
