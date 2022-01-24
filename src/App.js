import React, { useState } from 'react';
import * as DrugApi from 'api/drug';
import { DrugItem, Header, SearchBar } from './components';
import useStyles from './globalStyles';
import './App.css';

const App = () => {
  const classes = useStyles()
  const [data, setData] = useState([])

  const fetchDrugsByQuery = async ({ query }) => {
    const data = await DrugApi.findByNameOrDisease({ query })
    setData(data ? data.data : [])
  }

  return (
    <div className={classes.root}>
      <Header />
      <SearchBar onSearch={fetchDrugsByQuery} />
      {data && data.map(drug => <DrugItem data={drug} />)}
    </div>
  )
};

export default App;
