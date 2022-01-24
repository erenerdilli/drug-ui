import { useState } from 'react';
import { Input, Button } from 'antd';
import * as DrugApi from 'api/drug'
import useStyles from './styles'
import { Card } from 'antd';

const SearchBar = () => {
    const classes = useStyles()
    const [query, setQuery] = useState(undefined)
    const [data, setData] = useState([])

    const handleSearchClick = async () => {
        const data = await DrugApi.findByNameOrDisease({ query })
        setData(data ? data.data : [])
    }

    return (
        <div>
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
            <div className={classes.root}>{data && data.map(
                drug => <Card size="small" title={drug.name} extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>{drug.description}</p>
                <p><strong>Diseases</strong></p>
                {drug.diseases.map(
                    (disease, index) => <p key={`${drug.name}-${index}`}>{disease}</p>
                )}
            </Card>
            )}</div>
            <div>
                
            </div>
        </div>
    );
};

export default SearchBar;