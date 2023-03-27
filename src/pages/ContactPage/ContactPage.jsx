import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactsList from '../../components/ContactsList/ContactsList';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { ContactDiv } from './ContactPage.styled';

const ContactPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <main>
      <ContactDiv>
        <h1>Phonebook</h1>
        <ContactForm />
        <Filter />
        {isLoading && !error && `...Loading`}
        <ContactsList />
      </ContactDiv>
    </main>
  );
};

export default ContactPage;