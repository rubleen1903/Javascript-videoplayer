var array=["r3fE6FQT82s","tbnzAVRZ9Xc","ux8GZAtCN-M","e8QKBu-qAPA"];
var iframe = document.getElementById('frame');
var firstvideo = "r3fE6FQT82s"; // initial video
document.getElementById('prevVideo').addEventListener('click', function () {
    var curIndex = array.indexOf(firstvideo);
    curIndex--;
    if (curIndex < 0)
    {
        curIndex = array.length -1;
    }
    var video = array[curIndex];
    var url="http://www.youtube.com/embed/"+video;
    firstvideo = video;
    iframe.src = url;
});

document.getElementById('nextVideo').addEventListener('click', function () {
    var curIndex = array.indexOf(firstvideo);
    curIndex++;
    if (curIndex >= array.length)
    {
        curIndex = 0;
    }
    var video = array[curIndex];
    var url="http://www.youtube.com/embed/"+video;
    firstvideo = video;
    iframe.src = url;
});

