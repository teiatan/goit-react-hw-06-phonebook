import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactListEl } from './ContactList.styled';
import { useSelector } from 'react-redux';

export function ContactList() {

    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    const visibleContacts = contacts.filter(element => element.name.toLowerCase().includes(filter));

    return (
        <ContactListEl>
            {visibleContacts.map((contact) => {
                    return (
                        <ContactItem 
                            key={contact.name}
                            name={contact.name}
                            number={contact.number}
                        />
                    );
                })}                
        </ContactListEl>
    );
};