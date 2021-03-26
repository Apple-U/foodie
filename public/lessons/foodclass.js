$('.post-btn').on('click', function () {
    let comment = $('.user>textarea').val();
    let time = new Date();
    let year = time.getFullYear();
    let mon = time.getMonth()+1;
    let date = time.getDate();
    mon=mon>9?mon:'0'+mon.toString();
    date=date>9?date:'0'+date.toString();
    let d = year + '-' + mon + '-' + date;
    let t = time.toTimeString().substr(0, 8);
    time=d+' '+t;
    if (comment == '')
        alert('留言不能为空');
    else {
        //插入节点
        var newnode = $("<div class='newComment'></div>");
        newnode.find('p').html(comment);

        newnode.html("<img class='pic' style='background-image: url(../src/user2.jpg);'><div class='content'><span class='name'>吃呱少年</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class='time'>"+time+"</span><p>" + comment + "</p></div><div class='reply'><button class='btn btn-light'>举报</button><button class='btn btn-light'>回复</button><button class='btn btn-light'>点赞</button></div><div class='dropdown-divider'></div>");
        console.log(newnode);
        $('.allcomment').prepend(newnode);


    }
})
