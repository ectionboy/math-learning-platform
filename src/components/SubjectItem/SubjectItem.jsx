import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubjectItem = () => {
  const navigate = useNavigate();

  const navTo = (to) => {
    navigate(to)
  };
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
        <Button size="small" onClick={()=>navTo("/subject/vm")}>Детальніше</Button>
      </CardActions>
    </Card>
  );
};

export default SubjectItem;
