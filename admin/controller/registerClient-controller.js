import { clientService } from '../service/clientService.js'

const form = document.querySelector('[data-form]')
form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const name = event.target.querySelector('[data-nome]').value
  const email = event.target.querySelector('[data-email]').value

  try {
    await clientService.createClient(name, email)
    window.location.href = '../telas/cadastro_concluido.html'
  } catch (error) {
    console.error('Erro ao cadastrar cliente:', error.message)
  }
})
