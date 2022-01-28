import { useCallback, useMemo, useState } from 'react';
import { Input, Button } from 'antd';
import useStyles from './styles';
import debounce from 'lodash.debounce';

const SearchBar = ({ onSearch }) => {
	const classes = useStyles();

	const [query, setQuery] = useState(undefined)

	const handleSearchClick = () => {
		onSearch({ query })
	}

	const handleInputOnChange = (event) => {
		setQuery(event.target.value)
		onSearch({ query })
	}

	const debouncedChangeHandler = useMemo(
		() => debounce(handleInputOnChange, 1000)
	)

	return (
		<>
			<h2>Search</h2>
			<div className={classes.root}>
				<Input
					placeholder="You can search by drug name or by disease..."
					onChange={debouncedChangeHandler}
				/>
				<div className={classes.searchBtn}>
					<Button onClick={handleSearchClick}>Search</Button>
				</div>
			</div>
		</>
	);
};

export default SearchBar;