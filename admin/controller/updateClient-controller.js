import { clientService } from '../service/clientService.js'

const getURL = new URL(window.location)
const id = getURL.searchParams.get('id')

const inputName = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

;(async () => {
  try {
    const response = await clientService.getJustOneClient(id)
    if (response) {
      inputName.value = response.name
      inputEmail.value = response.email
    }
  } catch (error) {
    console.error('Não foi possível trazer o cliente:', error.message)
    window.location.href = '../telas/erro.html'
  }
})()

const form = document.querySelector('[data-form]')

form.addEventListener('submit', async (event) => {
  try {
    event.preventDefault()
    const response = await clientService.updateClient(
      id,
      inputName.value,
      inputEmail.value
    )
    if (response) {
      window.location.href = '../telas/edicao_concluida.html'
    }
  } catch (error) {
    console.error('Erro ao cadastrar cliente:', error.message)
    window.location.href = '../telas/erro.html'
  }
})
