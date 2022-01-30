import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import * as DrugApi from 'api/drug';
import { DrugItem, Header, SearchBar } from './components';
import useStyles from './globalStyles';
import './App.css';

const App = () => {
  const classes = useStyles();
  const [query, setQuery] = useState(null);

  // const { isLoading, isError, error, data } = useQuery('drugs', () =>
  //   DrugApi.findByNameOrDisease({ query })
  // );

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const fetchDrugsByQuery = async ({ query }) => {
    try {
      setLoading(true)
      const data = await DrugApi.findByNameOrDisease({ query })
      setData(data ? data.data : [])
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchDrugsByQuery({ query })
  }, [query]);

  const handleSearchChange = (query) => {
    setQuery(query ? query : undefined);
  }

  return (
    <div className={classes.root}>
      <Header />
      <SearchBar onChange={handleSearchChange} />
      {loading && <div style={{ padding: 50 }}><h1>Loading...</h1></div>}
      {error && <div>Error: {error.message}</div>}
      {data && data.map(drug => <DrugItem key={drug.id} data={drug} />)}
    </div>
  )
};

export default App;
