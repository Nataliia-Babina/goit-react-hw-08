import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact, editContact, fetchContacts } from "../../redux/contacts/operations";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/EditNote";
import Modal from "../Modal/Modal";
import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        dispatch(fetchContacts());
      });
  };

  const handleEdit = (values) => {
    dispatch(editContact({ contactId: contact.id, data: values }))
      .unwrap()
      .then(() => {
        dispatch(fetchContacts());
        setIsModalOpen(false);
      });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.card}>
      <div className={css.wrapper}>
        <p className={css.field}>
          <FaUser size={14} /> {contact.name}
        </p>
        <p className={css.field}>
          <FaPhone size={14} /> {contact.number}
        </p>
      </div>
      <Tooltip title="Delete" placement="top">
        <DeleteIcon onClick={() => handleDelete(contact.id)} style={{ fontSize: 35, cursor: "pointer" }} />
      </Tooltip>
      <Tooltip title="Edit" placement="top">
        <EditIcon onClick={openModal} style={{ fontSize: 35, cursor: "pointer" }} />
      </Tooltip>
      <Modal open={isModalOpen} onClose={closeModal} onEdit={handleEdit} contact={contact} />
    </div>
  );
};

export default Contact;