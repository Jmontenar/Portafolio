const navBar = document.getElementById('navBar')
const btnMenu = document.getElementById('btnMenu')
const heroMenu = document.getElementById('heroMenu')
const sections = document.querySelectorAll('section[id]')
const form = document.getElementById('form')

window.addEventListener('scroll', function () {
  if (window.scrollY >= 60) {
    navBar.classList.add('nav-fixed')
  } else {
    navBar.classList.remove('nav-fixed')
  }
})
btnMenu.addEventListener('click', function () {
  heroMenu.classList.toggle('active')
})

heroMenu.addEventListener('click', function (e) {
  if (e.target.matches('.hero__nav-link')) {
    heroMenu.classList.remove('active')
  }
})

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = 'jmontenar@gmail.com'
  const URL_BASE = `https://formsubmit.co/${email}`

  const input = e.currentTarget.elements
  const formData = {
    name: input.name.value,
    email: input.email.value,
    message: input.message.value
  }

  const options = {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(formData)
  }

  fetch(URL_BASE, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

  try {
    const res = await fetch(URL_BASE, options)
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
})