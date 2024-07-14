import { clientService } from '../service/clientService.js'

const createNewLine = (name, email) => {
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
  return lineNewClient
}

const table = document.querySelector('[data-tabela]')

clientService.clientList().then((data) => {
  data.forEach((element) => {
    table.appendChild(createNewLine(element.name, element.email))
  })
})
