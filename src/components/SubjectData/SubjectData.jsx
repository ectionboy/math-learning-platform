import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import React from 'react';
import PropTypes from 'prop-types';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const SubjectData = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography variant="h4">1.1. Матрицi та дiї над ними</Typography>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Конспект" />
            <Tab label="Лекція" />
            <Tab label="Завдання" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Коротко матрицю позначають так: A = (aij ), де aij – елементи матрицi,
          запис m × n означає її розмiр. Якщо m = n, матриця називається
          квадратною. Кiлькiсть рядкiв (стовпцiв) квадратної матрицi називається
          її порядком. Двi матрицi A = (aij ) та B = (bij ) називаються рiвними,
          якщо вони однакових розмiрiв i мають рiвнi вiдповiднi елементи: aij =
          bij . Елементи aii, i = 1, 2, . . . , n утворюють головну дiагональ
          квадратної матрицi. Квадратна матриця називається дiагональною, якщо
          всi її елементи, крiм елементiв головної дiагоналi, дорiвнюють нулю.
          Одинична матриця E – це дiагональна матриця, у якiй елементи головної
          дiагоналi дорiвнюють одиницi. Якщо i = 1, то отримуємо матрицю-рядок;
          якщо j = 1, дiстаємо матрицю-стовпець. Якщо елементи i-го рядка
          матрицi записати в i-й стовпець (i = 1, 2, . . . , m), дiстанемо
          транспоновану матрицю А T
          <br />
          <a
            href="https://dspace.uzhnu.edu.ua/jspui/bitstream/lib/3472/1/Methodychka_VM_Phys.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4H9IZUgOMdA?si=yXRnQRujxt4q0Y7n"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Знайти матрицю A−1 , обернену до даної матрицi A, якщо: 1) A = .....
          <br />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Відповідь</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="A - 1"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="B - 2"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="C - 3"
              />
            </RadioGroup>
            <Button variant="contained">Перевірити</Button>
          </FormControl>
        </CustomTabPanel>
      </Box>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          width: '70px',
          height: '70px',
          position: 'absolute',
          bottom: 16,
          right: 16,
          borderRadius: '50%',
        }}
      >
        <AutoAwesomeIcon />
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: event => {
            event.preventDefault();
            handleClose();
          },
        }}
      >
        <DialogTitle>GPT</DialogTitle>
        <DialogContent>
          <DialogContentText>Запитати в бота</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="val"
            label="Питання"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Скасувати</Button>
          <Button type="submit">Надіслати</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SubjectData;
