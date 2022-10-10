const videoPlayer = () => {
  const videoPlayerWrapper = document.querySelectorAll('.become-a-host__video-content')

  videoPlayerWrapper.forEach((e) => {
    const videoContent = e.querySelector('video')
    const playButton = e.querySelector('[data-button="play"]') || e.closest('._149776kz').querySelector('._12wueiun [data-button="play"]')
    const muteButton = e.querySelector('[data-button="mute"]') || e.closest('._149776kz').querySelector('._12wueiun [data-button="mute"]')
    const fullScreenButton = e.querySelector('[data-button="full-screen"]') || e.closest('._149776kz').querySelector('._12wueiun [data-button="full-screen"]')

    // Seeking
    const videoSlider = e.querySelector('[data-button="slider"]')
    let viewedBar = videoSlider?.querySelector('._1nx9ol7p')
    let viewedPoint = videoSlider?.querySelector('._pj4gqq')

    let mousedownOnBar = false;

    videoContent.addEventListener('timeupdate', () => {
      if (videoSlider) {
        playButton.querySelector('svg:first-child').style = videoContent.paused
          ? 'display: block; height: 16px; width: 16px; fill: rgb(255, 255, 255);'
          : 'display: none';
        playButton.querySelector('svg:nth-child(2)').style = videoContent.paused
          ? 'display: none;'
          : 'display: block; height: 16px; width: 16px; fill: rgb(255, 255, 255);';

        const percent = Math.floor(
          (videoContent.currentTime / videoContent.duration) * 100
        )

        viewedBar.style.width = `${percent}%`
        viewedPoint.style.left = `${percent}%`
      }
    })

    playButton.addEventListener('click', () => {
      playButton.querySelector('svg:first-child').style = videoContent.paused
        ? 'display: none;'
        : 'display: block; height: 16px; width: 16px; fill: rgb(255, 255, 255);';
      playButton.querySelector('svg:nth-child(2)').style = videoContent.paused
        ? 'display: block; height: 16px; width: 16px; fill: rgb(255, 255, 255);'
        : 'display: none';
      videoContent.paused ? videoContent.play() : videoContent.pause();
    })

    muteButton.addEventListener('click', () => {
      muteButton.querySelector('svg:first-child').style = videoContent.muted
        ? 'display: none;'
        : 'display: block; height: 16px; width: 16px; fill: rgb(255, 255, 255);';
      muteButton.querySelector('svg:nth-child(2)').style = videoContent.muted
        ? 'display: block; height: 16px; width: 16px; fill: rgb(255, 255, 255);'
        : 'display: none';
      videoContent.muted = !videoContent.muted;
    })

    fullScreenButton.addEventListener('click', () => {
      const fullScreenTarget = document.querySelector('#full-screen-target')
      if (!document.webkitFullscreenElement) {
        if (fullScreenTarget.requestFullScreen) {
          fullScreenTarget.requestFullScreen({ navigationUI: "show" });
        } else if (fullScreenTarget.webkitRequestFullScreen) {
          fullScreenTarget.webkitRequestFullScreen();
        } else if (fullScreenTarget.mozRequestFullScreen) {
          fullScreenTarget.mozRequestFullScreen();
        } else {
          document.webkitExitFullscreen();
        }
      }
    })

    const handleSeek = (e) => {
      if (!mousedownOnBar) return;

      const { left, width } = videoSlider.getBoundingClientRect()
      const percentage = Math.floor(((e.clientX - left) / width) * 100)
      const pos = Math.floor((videoContent.duration * percentage) / 100)

      isFinite(pos) && (videoContent.currentTime = pos)
    }

    if (videoSlider) {
      videoSlider.addEventListener('mousemove', handleSeek);
      videoSlider.addEventListener('mousedown', () => (mousedownOnBar = true));
      videoSlider.addEventListener('mouseup', () => (mousedownOnBar = false));
      videoSlider.addEventListener('click', handleSeek);
    }
  })
}

videoPlayer()

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