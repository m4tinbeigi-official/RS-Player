document.querySelectorAll('a').forEach(function (link) {
  const href = link.getAttribute('href');

  if (href && href.match(/\.(mp4|mkv|avi|mov)$/i)) {
    // ایجاد آیکون VLC
    let vlcIcon = document.createElement('img');
    vlcIcon.src = chrome.runtime.getURL('icons/vlc.png'); // آدرس آیکون VLC
    vlcIcon.alt = 'Play in VLC';
    vlcIcon.style.width = '20px';
    vlcIcon.style.height = '20px';
    vlcIcon.style.margin = '0 5px';
    vlcIcon.style.cursor = 'pointer';
    vlcIcon.onclick = function () {
      window.location.href = 'vlc://' + href;
    };

    // ایجاد آیکون PotPlayer
    let potIcon = document.createElement('img');
    potIcon.src = chrome.runtime.getURL('icons/potplayer.png'); // آدرس آیکون PotPlayer
    potIcon.alt = 'Play in PotPlayer';
    potIcon.style.width = '20px';
    potIcon.style.height = '20px';
    potIcon.style.margin = '0 5px';
    potIcon.style.cursor = 'pointer';
    potIcon.onclick = function () {
      window.location.href = 'potplayer://' + href;
    };

    // اضافه کردن آیکون‌ها کنار لینک دانلود
    link.parentNode.insertBefore(vlcIcon, link.nextSibling);
    link.parentNode.insertBefore(potIcon, vlcIcon.nextSibling);
  }
});
