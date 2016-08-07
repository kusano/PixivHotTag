var t = document.querySelectorAll("._tag-items .tag-item .image");
for (var i=0; i<t.length; i++) {
  var m = t[i].style.backgroundImage.match(/\/(\d+)_p/);
  if (m) {
    var e = document.createElement("a");
    e.href = "/member_illust.php?mode=medium&illust_id="+m[1];
    //  $(t[i]).wrap(e)
    t[i].parentNode.insertBefore(e, t[i]);
    e.appendChild(t[i]);
  }
}
