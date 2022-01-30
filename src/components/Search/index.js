import { useMemo } from 'react';
import { Input } from 'antd';
import useStyles from './styles';
import debounce from 'lodash.debounce';

const SearchBar = ({ onChange }) => {
	const classes = useStyles();

	const handleInputOnChange = (event) => {
		onChange(event.target.value)
	};

	const debouncedHandleSearch = useMemo(
		() => debounce(handleInputOnChange, 500)
	);

	return (
		<>
			<h2>Search</h2>
			<div className={classes.root}>
				<Input
					placeholder="You can search by drug name or by disease..."
					onChange={debouncedHandleSearch}
				/>
			</div>
		</>
	);
};

export default SearchBar;