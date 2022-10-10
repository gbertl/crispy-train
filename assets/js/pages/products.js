const videoPlayer = () => {
  const videoContent = document.getElementById('videoplayer1');
  const videoContent2 = document.getElementById('videoplayer2');
  const playButton = document.getElementById('playButton');
  const playButton2 = document.getElementById('playButton2');
  const playButtonIcon = document.getElementById('playButtonIcon');
  const pauseButtonIcon = document.getElementById('pauseButtonIcon');
  const playButtonIcon2 = document.getElementById('playButtonIcon2');
  const pauseButtonIcon2 = document.getElementById('pauseButtonIcon2');
  const muteButton = document.getElementById('muteButton');
  const muteButtonIcon = document.getElementById('muteButtonIcon');
  const muteButton2 = document.getElementById('muteButton2');
  const muteButtonIcon2 = document.getElementById('muteButtonIcon2');
  const unmuteButtonIcon = document.getElementById('unmuteButtonIcon');
  const unmuteButtonIcon2 = document.getElementById('unmuteButtonIcon2');
  const fullScreenButton = document.getElementById('fullScreenButton');
  const fullScreenButton2 = document.getElementById('fullScreenButton2');
  const mobileView = document.getElementsByClassName('mobileView')[0];

  const togglePlay = () => {
    playButtonIcon.style = videoContent.paused
      ? 'display: none;'
      : 'display: block; height: 16px; width: 16px; fill: rgb(255, 255, 255);';
    pauseButtonIcon.style = videoContent.paused
      ? 'display: block; height: 16px; width: 16px; fill: rgb(255, 255, 255);'
      : 'display: none';
    videoContent.paused ? videoContent.play() : videoContent.pause();
  };

  const toggleVolume = () => {
    muteButtonIcon.style = videoContent.muted
      ? 'display: none;'
      : 'display: block; height: 16px; width: 16px; fill: rgb(255, 255, 255);';
    unmuteButtonIcon.style = videoContent.muted
      ? 'display: block; height: 16px; width: 16px; fill: rgb(255, 255, 255);'
      : 'display: none';
    videoContent.muted = !videoContent.muted;
  };

  const togglePlay2 = () => {
    playButtonIcon2.style = videoContent2.paused
      ? 'display: none;'
      : 'display: block; height: 16px; width: 16px; fill: rgb(255, 255, 255);';
    pauseButtonIcon2.style = videoContent2.paused
      ? 'display: block; height: 16px; width: 16px; fill: rgb(255, 255, 255);'
      : 'display: none';
    videoContent2.paused ? videoContent2.play() : videoContent2.pause();
  };

  const toggleVolume2 = () => {
    muteButtonIcon2.style = videoContent2.muted
      ? 'display: none;'
      : 'display: block; height: 16px; width: 16px; fill: rgb(255, 255, 255);';
    unmuteButtonIcon2.style = videoContent2.muted
      ? 'display: block; height: 16px; width: 16px; fill: rgb(255, 255, 255);'
      : 'display: none';
    videoContent2.muted = !videoContent2.muted;
  };

  const toggleFullScreen = () => {
    if (!document.webkitFullscreenElement) {
      if (videoContent.requestFullScreen) {
        videoContent.requestFullScreen();
      } else if (videoContent.webkitRequestFullScreen) {
        videoContent.webkitRequestFullScreen();
      } else if (videoContent.mozRequestFullScreen) {
        videoContent.mozRequestFullScreen();
      } else {
        document.webkitExitFullscreen();
      }
    }
  };

  const toggleFullScreen2 = () => {
    if (!document.webkitFullscreenElement) {
      if (videoContent2.requestFullScreen) {
        videoContent2.requestFullScreen();
      } else if (videoContent2.webkitRequestFullScreen) {
        videoContent2.webkitRequestFullScreen();
      } else if (videoContent2.mozRequestFullScreen) {
        videoContent2.mozRequestFullScreen();
      } else {
        document.webkitExitFullscreen();
      }
    }
  };

  playButton.addEventListener('click', togglePlay);
  playButton2.addEventListener('click', togglePlay2);
  muteButton.addEventListener('click', toggleVolume);
  muteButton2.addEventListener('click', toggleVolume2);
  fullScreenButton.addEventListener('click', toggleFullScreen);
  fullScreenButton2.addEventListener('click', toggleFullScreen2);

  // Seeking
  const videoSlider = document.getElementById('videoSlider');
  let viewedBar = document.getElementById('viewedBar');
  let viewedPoint = document.getElementById('viewedPoint');

  let mousedownOnBar = false;

  const handleProgress = (e) => {
    // pause on mobile
    if (mobileView.clientHeight > 0) {
      videoContent.pause();
    }

    const percent = Math.floor(
      (videoContent.currentTime / videoContent.duration) * 100
    );
    viewedBar.style.width = `${percent}%`;
    viewedPoint.style.left = `${percent}%`;
  };

  const handleProgress2 = (e) => {
    // pause on desktop
    if (mobileView.clientHeight === 0) videoContent2.pause();
  };

  const handleSeek = (e) => {
    if (!mousedownOnBar) return;

    const { left, width } = videoSlider.getBoundingClientRect();
    const percentage = Math.floor(((e.clientX - left) / width) * 100);
    const pos = Math.floor((videoContent.duration * percentage) / 100);

    isFinite(pos) && (videoContent.currentTime = pos);
    videoContent.pause();
  };

  videoContent.addEventListener('timeupdate', handleProgress);
  videoContent2.addEventListener('timeupdate', handleProgress2);
  videoSlider.addEventListener('mousemove', handleSeek);
  videoSlider.addEventListener('mousedown', () => (mousedownOnBar = true));
  videoSlider.addEventListener('mouseout', () => (mousedownOnBar = false));
  videoSlider.addEventListener('click', handleSeek);
};

videoPlayer();

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop) {
    document
      .querySelector('._1v7a7680')
      .classList.replace('_1v7a7680', '_128pof1u');
  } else {
    document
      .querySelector('._128pof1u')
      .classList.replace('_128pof1u', '_1v7a7680');
  }
});

document.querySelector('#reviews-search-input').addEventListener('keyup', (e) => {
  let searchValue = e.target.value

  let resultInfo = document.querySelector('._1ebv9q1')
  !resultInfo.classList.contains('hidden') && resultInfo.classList.add('hidden')

  let noResult = document.querySelector('._1d4xcco')
  !noResult.classList.contains('hidden') && noResult.classList.add('hidden')

  let loader = document.querySelector('._3vbwaj')
  loader.removeAttribute('style')

  document.querySelectorAll('.r1are2x1 .ll4r2nl').forEach((e) => {
    let parentElement = e.closest('.r1are2x1')
    let currentText = e.innerText

    if (!currentText.includes(searchValue)) {
      !parentElement.classList.contains('hidden') && parentElement.classList.add('hidden')
      return;
    }

    parentElement.classList.remove('hidden')

    let newValue = currentText.replace(new RegExp(searchValue, 'g'), `<mark>${searchValue}</mark>`)

    if (searchValue.length) {
      resultInfo.innerText = `${document.querySelectorAll('.r1are2x1:not(.hidden)').length} reviews mentioned "${searchValue}"`
      resultInfo.classList.remove('hidden')
    }

    e.innerHTML = searchValue.length ? newValue : currentText
  })

  if (document.querySelectorAll('.r1are2x1.hidden').length === document.querySelectorAll('.r1are2x1').length) {
    noResult.classList.contains('hidden') && noResult.classList.remove('hidden')
    resultInfo.innerText = `There are no results for "${searchValue}"`
    resultInfo.classList.remove('hidden')
    loader.setAttribute('style', 'display: none!important;')
  }
})


const onScroll = () => {
  window.scrollY > 600
    ? document.querySelector('._1zeg3u')?.classList.replace('_1zeg3u', '_6gzg21')
    : document.querySelector('._6gzg21')?.classList.replace('_6gzg21', '_1zeg3u')

  window.scrollY > 2500
    ? document.querySelector('._14ukjft')?.classList.replace('_14ukjft', '_15tm0yy3')
    : document.querySelector('._15tm0yy3')?.classList.replace('_15tm0yy3', '_14ukjft')
}

onScroll();

// window.addEventListener('scroll', onScroll);