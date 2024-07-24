const clientList = async () => {
  try {
    const response = await fetch(`http://localhost:3000/profile`)
    if (!response.ok) {
      throw new Error('Não foi possível listar os clientes.')
    }
    return response.json()
  } catch (error) {
    throw error
  }
}

const createClient = async (name, email) => {
  try {
    const response = await fetch(`http://localhost:3000/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })

    if (!response.ok) {
      throw new Error('Não foi possível cadastrar o cliente.')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

const removeClient = async (id) => {
  try {
    return await fetch(`http://localhost:3000/profile/${id}`, {
      method: 'DELETE'
    })
  } catch (error) {
    throw error
  }
}

const getJustOneClient = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/profile/${id}`)
    if (!response.ok) {
      throw new Error('Não foi possível trazer o cliente.')
    }
    return response.json()
  } catch (error) {
    throw error
  }
}

const updateClient = async (id, name, email) => {
  try {
    const response = await fetch(`http://localhost:3000/profile/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })

    if (!response.ok) {
      throw new Error('Não foi possível cadastrar o cliente.')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

export const clientService = {
  clientList,
  createClient,
  removeClient,
  getJustOneClient,
  updateClient
}
