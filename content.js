document.querySelectorAll('a').forEach(function (link) {
  const href = link.getAttribute('href');

  if (href && href.match(/\.(mp4|mkv|avi|mov)$/i)) {
    // ایجاد دکمه VLC
    let vlcButton = document.createElement('button');
    vlcButton.innerText = 'Play in VLC';
    vlcButton.style.margin = '0 5px';
    vlcButton.onclick = function () {
      window.location.href = 'vlc://' + href;
    };

    // ایجاد دکمه PotPlayer
    let potButton = document.createElement('button');
    potButton.innerText = 'Play in PotPlayer';
    potButton.style.margin = '0 5px';
    potButton.onclick = function () {
      window.location.href = 'potplayer://' + href;
    };

    // اضافه کردن دکمه‌ها کنار لینک دانلود
    link.parentNode.insertBefore(vlcButton, link.nextSibling);
    link.parentNode.insertBefore(potButton, vlcButton.nextSibling);
  }
});
