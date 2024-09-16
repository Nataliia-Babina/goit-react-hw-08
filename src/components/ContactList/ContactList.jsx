import css from '../ContactList/ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from "react-redux";
import { selectContacts } from '../../redux/contacts/selectors';


const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(state => state.contacts.isLoading);
           
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!contacts || contacts.length === 0) {
        return <div>No contacts available</div>;
    }
    
    return (
        <ul className={css.list}>
            {contacts.map(contact => (
                <li key={contact.id} className={css.listItem}>
                    <Contact contact={contact} /> 
                </li>
            ))}
        </ul>
    );
};

export default ContactList;