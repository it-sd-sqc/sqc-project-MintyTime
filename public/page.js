document.querySelector('button').addEventListener('click', function () {
  const body = document.querySelector('body')
  const main = document.querySelector('main')
  const footer = document.querySelector('footer')
  const header = document.querySelector('header')
  const button = document.querySelector('button')
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme')
    main.removeAttribute('data-theme')
    footer.removeAttribute('data-theme')
    header.removeAttribute('data-theme')
    button.textContent = '🌙'
  } else {
    body.setAttribute('data-theme', 'dark')
    main.setAttribute('data-theme', 'dark')
    footer.setAttribute('data-theme', 'dark')
    header.setAttribute('data-theme', 'dark')
    button.textContent = '☀️'
  }
})
