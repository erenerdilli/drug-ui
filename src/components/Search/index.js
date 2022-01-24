import { useState } from 'react';
import { Input, Button } from 'antd';
import useStyles from './styles';

const SearchBar = ({ onSearch }) => {
	const classes = useStyles();

	const [query, setQuery] = useState(undefined)

	const handleSearchClick = () => {
		onSearch({ query })
	}

	return (
		<>
			<h2>Search</h2>
			<div className={classes.root}>
				<Input
					placeholder="You can search by drug name or by disease..."
					onChange={event => setQuery(event.target.value)}
				/>
				<div className={classes.searchBtn}>
					<Button onClick={handleSearchClick}>Search</Button>
				</div>
			</div>
		</>
	);
};

export default SearchBar;