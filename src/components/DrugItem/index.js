import React from 'react';
import { Card, Tag } from 'antd';
import useStyles from './styles';

const DrugItem = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card size="small" title={data.name}>
        {data.diseases.map(
          (disease, index) => (
            <Tag className={classes.diseaseTag} key={`${data.name}-${index}`} color="blue" >
              {disease}
            </Tag>
          )
        )}
        <p className={classes.drugDescription}>{data.description}</p>
      </Card>
    </div>
  )
};

export default DrugItem;
