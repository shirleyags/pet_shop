const clientList = async () => {
  const response = await fetch(`http://localhost:3000/profile`)
  return response.json()
}

export const clientService = {
  clientList,
}
