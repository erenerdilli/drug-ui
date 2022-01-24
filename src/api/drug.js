import axios from 'utils/axios'

export const getAll = async () => {
  return axios.get('/drugs')
}

export const findByNameOrDisease = async ({ query }) => {
  return axios.get('/drugs/search', {
    params: { query }
  })
}
