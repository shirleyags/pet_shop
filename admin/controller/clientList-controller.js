import { clientService } from '../service/clientService.js'

const createNewLine = (name, email, id) => {
  const lineNewClient = document.createElement('tr')
  const content = `<td class="td" data-td>${name}</td>
    <td>${email}</td>
    <td>
      <ul class="tabela__botoes-controle">
        <li>
          <a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a>
        </li>
        <li>
          <button class="botao-simples botao-simples--excluir" type="button">Excluir</button>
        </li>
      </ul>
    </td>`
  lineNewClient.innerHTML = content
  lineNewClient.dataset.id = id
  return lineNewClient
}

const table = document.querySelector('[data-tabela]')

table.addEventListener('click', async (event) => {
  const deleteButton =
    event.target.className === 'botao-simples botao-simples--excluir'
  if (deleteButton) {
    const clientLine = event.target.closest('[data-id]')
    const id = clientLine.dataset.id
    try {
      await clientService.removeClient(id)
      clientLine.remove()
    } catch (error) {
      console.error('Não foi possível remover o cliente:', error.message)
    }
  }
})

const loadClientList = async () => {
  try {
    const data = await clientService.clientList()
    data.forEach((element) => {
      table.appendChild(createNewLine(element.name, element.email, element.id))
    })
  } catch (error) {
    console.error('Não foi possível listar os clientes:', error.message)
  }
}

loadClientList()
