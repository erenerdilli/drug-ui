import axios from 'utils/axios'

export const getAll = async () => {
  return await axios.get('/drugs')
}

export const findByNameOrDisease = async ({ query }) => {
  return await axios.get('/drugs', {
    params: { query }
  })
}
