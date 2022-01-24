import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    root: () => ({
      padding: 10,
      border: '2px solid #444',
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      //backgroundColor: '#e6e5d5',
      //cursor: 'pointer',
    })
  })
  
  export default useStyles