import { Modal, TextField, Button } from "@mui/material";
import { IoMdCloseCircleOutline } from "react-icons/io";
import css from "../Modal/Modal.module.css";

const CustomModal = ({ open, onClose, onEdit, contact }) => {
  const handleEdit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = {
      name: formData.get("name"),
      number: formData.get("number"),
    };
    onEdit(values);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={css.modal}>
        <div className={css.modalContent}>
          <span className={css.close} onClick={onClose}>
            <IoMdCloseCircleOutline />
          </span>
          <form onSubmit={handleEdit} className={css.form}>
            <div className={css.formGroup}>
              <TextField
                label="New name"
                name="name"
                required
                defaultValue={contact.name}
                className={css.field}
                sx={{
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                    borderWidth: "1px",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "white !important",
                  },
                  "& label": {
                    color: "white",
                  },
                  "& label.Mui-focused": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
            </div>
            <div className={css.formGroup}>
              <TextField
                label="New number"
                name="number"
                required
                defaultValue={contact.number}
                className={css.field}
                sx={{
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                    borderWidth: "1px",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "white !important",
                  },
                  "& label": {
                    color: "white",
                  },
                  "& label.Mui-focused": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              sx={{
                color: "white",
                width: "100px",
                height: "40px",
                margin: "auto",
                display: "block",
                background: "#641194",
              }}
            >
              Edit
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;