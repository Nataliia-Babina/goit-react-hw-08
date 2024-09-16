import DocumentTitle from '../../components/DocumentTitle';
import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import css from './RegisterPage.module.css';

export default function RegisterPage() {
  return (
    <div className={css.container}>
      <DocumentTitle>Registration</DocumentTitle>
      <RegistrationForm />
    </div>
  );
}