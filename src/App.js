import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Spin } from 'antd';
import * as DrugApi from 'api/drug';
import { DrugItem, Header, SearchBar } from './components';
import { Helmet } from 'react-helmet';
import useStyles from './globalStyles';
import './App.css';

const App = () => {
  const classes = useStyles();
  const [query, setQuery] = useState(null);

  const { isLoading, error, data } = useQuery(['drugs', query], () =>
    DrugApi.fetchDrugs({ query })
  );

  const handleSearchChange = (query) => {
    setQuery(query ? query : undefined);
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Drug Search</title>
      </Helmet>
      <Header />
      <SearchBar onChange={handleSearchChange} />
      {isLoading && <div style={{ padding: 50 }}><center><Spin size='large' /></center></div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        data.length > 0 ? (
          data.map(drug => <DrugItem key={drug.id} data={drug} />)
        ) : <div>No records found</div>)}
    </div>
  );
};

export default App;
