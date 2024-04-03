import { Typography } from '@mui/material';
import SubjectItem from 'components/SubjectItem/SubjectItem';
import React from 'react';

const SubjectsList = () => {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Предмети
      </Typography>
      <SubjectItem />
    </div>
  );
};

export default SubjectsList;
