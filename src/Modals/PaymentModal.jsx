import { Modal } from "@mui/material"
import { forwardRef, useImperativeHandle, useState } from "react";


const PaymentModal = (props , ref) => {
    
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useImperativeHandle(ref, () => ({
    handleOpen: () => setOpen(true),
  }));

  return (
    <Modal
        open={open}
        onClose={handleClose}
      className=" flex flex-col items-center justify-center"
      >
        <div className=" w-[90%] bg-white">
            Yash
        </div>
      </Modal>
  )
}

export default forwardRef(PaymentModal)