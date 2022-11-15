import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button onClick={handleOpen}>Log In</Button>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Log In
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              email: <br></br>
              password:
            </Typography>
          </Box>
        </Modal>
      </div>
    );
}

export {BasicModal};


function Header() { 

    return (
    <header>
        <nav>
        <a href='#' className='logo'>
            <img id='logo__img' src={require('../img/logo.png')}></img> 
        </a>
        <input type="text" placeholder="Search.."></input>
        <ul>
            <li>
                <a>
                    <img src='https://cdn-icons-png.flaticon.com/512/25/25694.png'></img>
                </a>
            </li>
            <li>
                <a>
                    <img src='https://static.thenounproject.com/png/3861743-200.png'></img>
                </a>
            </li>
            <li>
                <a>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/explore-1781524-1513844.png"></img>
                </a>
            </li>
            <li>
                <a>
                    <img src='https://cdn-icons-png.flaticon.com/512/565/565422.png'></img>
                </a>
            </li>
            <li>
                <a>
                <BasicModal/>
                </a>
            </li>
        </ul>
        </nav>
    </header>
    )
}



export {Header};