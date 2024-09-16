import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import DocumentTitle from "../../components/DocumentTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Contacts</DocumentTitle>
      <div className={css.appWrapper}>
        <div className={css.mainWeapper}>
          <ContactForm />
          <SearchBox />
        </div>
        <ContactList />
      </div>
    </>
  );
}