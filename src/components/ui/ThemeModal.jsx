import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import { useDispatch } from 'react-redux'
import { setFontSize, setTheme } from '@/lib/slice/themeSlice'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 300,
  bgcolor: '#f0edf5',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
}

export default function TransitionsModal({ open, setOpen }) {
  const handleClose = () => setOpen(false)
  const dispatch = useDispatch()

  return (
    <>
      <Modal
        className="Oswald"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <h5 className="text-center text-black">Select Theme & Font Size</h5>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <div className="theme-btn flex justify-between text-white">
                <button
                  onClick={(e) => dispatch(setTheme('dim'))}
                  className="w-[50px] h-[50px] rounded-full bg-[#121212]"
                >
                  Dim
                </button>
                <button
                  onClick={(e) => dispatch(setTheme('dark'))}
                  className="w-[50px] h-[50px] rounded-full bg-black"
                >
                  Dark
                </button>
                <button
                  onClick={(e) => dispatch(setTheme('light'))}
                  className="w-[50px] h-[50px] rounded-full bg-white border text-black"
                >
                  Light
                </button>
              </div>

              <div className="font-size-buttons mt-10 text-center">
                <h4>Choose Font Size</h4>
                <div className="buttons-wrapper  flex justify-between mt-2 ">
                  <button
                    className="text-white bg-black w-10 h-10 rounded-full "
                    onClick={(e) => dispatch(setFontSize('text-xs'))}
                  >
                    12px
                  </button>
                  <button
                    className="text-white bg-black w-10 h-10 rounded-full "
                    onClick={(e) => dispatch(setFontSize('text-sm'))}
                  >
                    16px
                  </button>
                  <button
                    className="text-white bg-black w-10 h-10 rounded-full "
                    onClick={(e) => dispatch(setFontSize('text-md'))}
                  >
                    18px
                  </button>
                  <button
                    className="text-white bg-black w-10 h-10 rounded-full "
                    onClick={(e) => dispatch(setFontSize('text-lg'))}
                  >
                    20px
                  </button>
                  <button
                    className="text-white bg-black w-10 h-10 rounded-full "
                    onClick={(e) => dispatch(setFontSize('text-xl'))}
                  >
                    22px
                  </button>
                </div>
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}
