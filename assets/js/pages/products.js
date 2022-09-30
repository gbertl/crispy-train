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

window.addEventListener('scroll', onScroll);