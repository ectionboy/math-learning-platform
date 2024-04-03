import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React from 'react';

const SubjectItem = () => {
  return (
    <Card sx={{ width: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} gutterBottom>
          Вища математика
        </Typography>
        <Typography color="text.secondary">Математика</Typography>
        <Typography variant="body2" color="text.secondary">
          1 курс
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Детальніше</Button>
      </CardActions>
    </Card>
  );
};

export default SubjectItem;
