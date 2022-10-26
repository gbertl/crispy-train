// start inline counter
const inlineCounter = document.querySelector('#inline-counter')
const guestDecrease = inlineCounter.querySelector('[data-testid="GuestPicker-book_it-form-adults-stepper-decrease-button"]')
const guestIncrease = inlineCounter.querySelector('[data-testid="GuestPicker-book_it-form-adults-stepper-increase-button"]')
const guestCounterValue = inlineCounter.querySelector('[data-testid="GuestPicker-book_it-form-adults-stepper-value"]')

const childrenDecrease = inlineCounter.querySelector('[data-testid="GuestPicker-book_it-form-children-stepper-decrease-button"]')
const childrenIncrease = inlineCounter.querySelector('[data-testid="GuestPicker-book_it-form-children-stepper-increase-button"]')
const childrenCounterValue = inlineCounter.querySelector('[data-testid="GuestPicker-book_it-form-children-stepper-value"]')

const infantDecrease = inlineCounter.querySelector('[data-testid="GuestPicker-book_it-form-infants-stepper-decrease-button"]')
const infantIncrease = inlineCounter.querySelector('[data-testid="GuestPicker-book_it-form-infants-stepper-increase-button"]')
const infantCounterValue = inlineCounter.querySelector('[data-testid="GuestPicker-book_it-form-infants-stepper-value"]')

document.querySelectorAll('.main-content__details-form-language-value').forEach((e) => {
  const selectIcon = e.closest('.main-content__details-form-language').querySelector('.form-floating__addon > svg')

  let guestCounter = 1, childrenCounter = 0, infantCounter = 0

  e.addEventListener('click', (addGuests) => {
    addGuests.stopPropagation()

    let counterLabel = addGuests.currentTarget.querySelector('span')

    inlineCounter.classList.remove('hidden')
    selectIcon.style.transform = 'rotate(180deg)';

    const hideInlineCounter = () => {
      inlineCounter.classList.add('hidden')
      selectIcon.style.transform = 'rotate(360deg)';
    }

    inlineCounter.querySelector('[data-button="close"]').addEventListener('click', (e) => {
      hideInlineCounter()
    })

    document.addEventListener('click', (e) => {
      if (!inlineCounter.contains(e.target) && addGuests.target !== e.target) {
        hideInlineCounter()
      }
    })

    const handleCounterLabel = () => {
      let totalGuestCounter = guestCounter + childrenCounter
      guestLabel = `${totalGuestCounter} ${totalGuestCounter === 1 ? 'guest' : 'guests'}`
      infantLabel = `${infantCounter} ${infantCounter === 1 ? 'infant' : 'infants'}`
      counterLabel.innerHTML = guestLabel + (infantCounter ? `, ${infantLabel}` : '')
    }

    const handleGuestStepperState = () => {
      let totalGuestCounter = guestCounter + childrenCounter
      guestDecrease.disabled = guestCounter === 1
      guestIncrease.disabled = totalGuestCounter === 16
      childrenIncrease.disabled = totalGuestCounter === 16
      guestCounterValue.innerHTML = guestCounter
      handleCounterLabel()
    }

    const handleChildrenStepperState = () => {
      let totalGuestCounter = guestCounter + childrenCounter
      childrenDecrease.disabled = childrenCounter === 0
      childrenIncrease.disabled = totalGuestCounter === 16
      guestIncrease.disabled = totalGuestCounter === 16
      childrenCounterValue.innerHTML = childrenCounter
      handleCounterLabel()
    }

    const handleInfantsStepperState = () => {
      infantDecrease.disabled = infantCounter === 0
      infantIncrease.disabled = infantCounter === 5
      infantCounterValue.innerHTML = infantCounter
      handleCounterLabel()
    }

    guestDecrease.addEventListener('click', (e) => {
      if (guestCounter > 1) {
        guestCounter--
        handleGuestStepperState()
      }
    })

    guestIncrease.addEventListener('click', (e) => {
      if ((guestCounter + childrenCounter) < 16) {
        guestCounter++
        handleGuestStepperState()
      }
    })

    childrenDecrease.addEventListener('click', (e) => {
      if (childrenCounter > 0) {
        childrenCounter--
        handleChildrenStepperState()
      }
    })

    childrenIncrease.addEventListener('click', (e) => {
      if ((childrenCounter + guestCounter) < 16) {
        childrenCounter++
        handleChildrenStepperState()
      }
    })

    infantDecrease.addEventListener('click', (e) => {
      if (infantCounter > 0) {
        infantCounter--
        handleInfantsStepperState()
      }
    })

    infantIncrease.addEventListener('click', (e) => {
      if (infantCounter < 5) {
        infantCounter++
        handleInfantsStepperState()
      }
    })

  })
})
// end inline counter

// start inline calendar
const inlineCalendar = document.querySelector('#inline-calendar')

document.querySelectorAll('.availability-container__rate-table-checkin').forEach((e) => {
  e.addEventListener('click', (addDate) => {
    addDate.stopPropagation()

    inlineCalendar.classList.remove('hidden')

    const hideInlineCalendar = () => {
      inlineCalendar.classList.add('hidden')
    }

    inlineCalendar.querySelector('[data-button="close"]').addEventListener('click', (e) => {
      hideInlineCalendar()
    })

    document.addEventListener('click', (e) => {
      if (!inlineCalendar.contains(e.target) && addDate.target !== e.target) {
        hideInlineCalendar()
      }
    })
  })
})

document.querySelectorAll('._c5rhl5').forEach((inputs) => {
  inputs.addEventListener('click', (input) => {
    const target = input.target
    target.closest('._1rhk4n5')?.classList.replace('_1rhk4n5', '_etxtlin')
    target.classList.add('focus-visible')
    target.placeholder = 'MM/DD/YYYY'
    document.addEventListener('click', (e) => {
      if (input.target !== e.target) {
        target.closest('._etxtlin')?.classList.replace('_etxtlin', '_1rhk4n5')
        target.classList.remove('focus-visible')
        target.placeholder = 'Add date'
      }
    })
  })
})
// end inline calendar

const carousel = document.querySelectorAll('._149776kz')
carousel.forEach((carousel) => {
  const carouselProgressBar = carousel.querySelectorAll('.carousel-progress ._cm41d9')
  const slidesContainer = carousel.querySelector('._rm1dhy')
  const slides = slidesContainer.querySelectorAll('._1hxk8lj')

  const controls = carousel.querySelector('._tk908t')
  const prevControl = controls.querySelector('button[aria-label="Previous"]')
  const nextControl = controls.querySelector('button[aria-label="Next"]')

  const playButton = carousel.querySelector('._12wueiun [data-button="play"]')
  const muteButton = carousel.querySelector('._12wueiun [data-button="mute"]')
  const fullScreenButton = carousel.querySelector('._12wueiun [data-button="full-screen"]')

  const nextSlideHandler = () => {
    const currentSlide = carousel.querySelector('._1hxk8lj[aria-hidden="false"]')
    const currentSlideIndex = [...slides].indexOf(currentSlide)
    const nextSlide = currentSlide.nextElementSibling
    const nextSlideIndex = [...slides].indexOf(nextSlide)

    let progress = carouselProgressBar[currentSlideIndex].querySelector('._seyo89 > div')
    progress.classList = '_jicl67'
    progress.removeAttribute('style')

    let progressClone = progress.cloneNode(true)
    progressClone.classList = '_1a3hvh71'

    if (nextSlideIndex !== -1) {
      currentSlide.ariaHidden = true
      nextSlide.ariaHidden = false
      slidesContainer.style.transform = `translateX(-${nextSlideIndex * 100}%)`
      progressClone.style.animationDuration = '8s'

      carouselProgressBar[currentSlideIndex]
        .nextElementSibling.querySelector('._seyo89').appendChild(progressClone)
    } else {
      currentSlide.ariaHidden = true
      const targetSlide = slides[0]
      targetSlide.ariaHidden = false

      slidesContainer.style.transform = `translateX(0%)`
      progressClone.style.animationDuration = '25.053s'

      carouselProgressBar.forEach((e, index) => {
        e.querySelector('._seyo89 > div').remove()
        if (index === 0) {
          e.querySelector('._seyo89').appendChild(progressClone)
          return;
        }
      })
    }
  }

  prevControl.addEventListener('click', () => {
    const currentSlide = carousel.querySelector('._1hxk8lj[aria-hidden="false"]')
    const currentSlideIndex = [...slides].indexOf(currentSlide)
    const prevSlide = currentSlide.previousElementSibling
    const prevSlideIndex = [...slides].indexOf(prevSlide)

    let progress = carouselProgressBar[currentSlideIndex].querySelector('._seyo89 > div')

    carouselProgressBar[currentSlideIndex - 1]?.querySelector('._seyo89 > div')?.remove()

    if (prevSlideIndex !== -1) {
      currentSlide.ariaHidden = true
      prevSlide.ariaHidden = false

      slidesContainer.style.transform = `translateX(-${prevSlideIndex * 100}%)`
      progress.style.animationDuration = '8s'
      if (prevSlideIndex === 0) {
        progress.style.animationDuration = '25.053s'
      }
      carouselProgressBar[currentSlideIndex]
        .previousElementSibling.querySelector('._seyo89').appendChild(progress)
    } else {
      currentSlide.ariaHidden = true
      const targetSlide = slides[slides.length - 1]
      targetSlide.ariaHidden = false

      slidesContainer.style.transform = `translateX(-${(slides.length - 1) * 100}%)`
      progress.style.animationDuration = '8s'

      carouselProgressBar.forEach((e, index) => {
        let progressClone = progress.cloneNode(true)
        progressClone.classList = '_jicl67'

        if (index === carouselProgressBar.length - 1) {
          e.querySelector('._seyo89').appendChild(progress)
          return;
        }
        e.querySelector('._seyo89').appendChild(progressClone)
      })
    }
  })

  nextControl.addEventListener('click', nextSlideHandler)

  playButton.addEventListener('click', () => {
    const currentSlide = carousel.querySelector('._1hxk8lj[aria-hidden="false"]')
    const currentSlideIndex = [...slides].indexOf(currentSlide)
    const progress = carouselProgressBar[currentSlideIndex].querySelector('._seyo89 > div')
    progress.classList.contains('_1a3hvh71')
      ? progress.classList.replace('_1a3hvh71', '_qu67pdw')
      : progress.classList.replace('_qu67pdw', '_1a3hvh71')
  })

  carouselProgressBar.forEach((e) => {
    const progressBar = e.querySelector('._seyo89')

    progressBar.addEventListener('animationstart', () => {
      const currentSlide = carousel.querySelector('._1hxk8lj[aria-hidden="false"]')
      const currentSlideIndex = [...slides].indexOf(currentSlide)
      if (currentSlideIndex === 0) {
        muteButton.parentElement.classList.replace('hidden', 'inline-block')
        fullScreenButton.parentElement.classList.replace('hidden', 'inline-block')
      } else {
        muteButton.parentElement.classList.replace('inline-block', 'hidden')
        fullScreenButton.parentElement.classList.replace('inline-block', 'hidden')
      }
    })

    progressBar.addEventListener('animationend', nextSlideHandler, false);
  })
})


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

      const isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

      if (!isInFullScreen) {
        if (fullScreenTarget.requestFullscreen) {
          fullScreenTarget.requestFullscreen();
        } else if (fullScreenTarget.mozRequestFullScreen) {
          fullScreenTarget.mozRequestFullScreen();
        } else if (fullScreenTarget.webkitRequestFullScreen) {
          fullScreenTarget.webkitRequestFullScreen();
        } else if (fullScreenTarget.msRequestFullscreen) {
          fullScreenTarget.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
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

document.querySelectorAll('#reviews-search-input').forEach((e) => {
  e.addEventListener('keyup', (e) => {
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

window.addEventListener('scroll', onScroll);

document.querySelector('#where-modal-read-more').addEventListener('click', (e) => {
  e.currentTarget.closest('._50mnu4').querySelector('#where-modal-read-more-text').setAttribute('style', 'line-height: 24px')
  e.currentTarget.classList.add('hidden')

})

document.querySelectorAll('.radio__button, .radio__button-active').forEach((el) => {
  el.addEventListener('click', (el) => {
    const parent = el.currentTarget.closest('.modal__container')

    parent.querySelectorAll('.radio__button-active').forEach((el) => el.classList.replace('radio__button-active', 'radio__button'))

    el.currentTarget.classList.replace('radio__button', 'radio__button-active')

    parent.querySelector('[data-testid=flag-primary-button]').removeAttribute('disabled');

  })
})

document.querySelector('#report-this-next').addEventListener('click', (el) => {
  el.currentTarget.closest('#report-this-modal').classList.add('hidden')
  document.querySelector('#we-got-your-report-modal').classList.remove('hidden')
})

document.querySelector('#we-got-your-report-ok').addEventListener('click', (el) => el.currentTarget.closest('#we-got-your-report-modal').classList.add('hidden'))