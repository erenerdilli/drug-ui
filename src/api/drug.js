import axios from 'utils/axios'

export const fetchDrugs = async ({ query }) => {
  const response = await axios.get('/drugs', {
    params: { query }
  });
  return response.data;
};
