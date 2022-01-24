import { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import * as DrugApi from 'api/drug'

const SearchBar = () => {
    const [query, setQuery] = useState(undefined)

    const handleSearchClick = () => {
        DrugApi.getAll()
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                padding: 40,
            }}
        >
            <Input
                placeholder="Search..."
                onChange={event => setQuery(event.target.value)}
            />
            <Button onClick={handleSearchClick}>Search</Button>
        </div>
    );
};

export default SearchBar;