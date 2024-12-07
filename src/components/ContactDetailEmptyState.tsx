import { useAppSelector } from "../state/store";
import { selectContacts } from "../features/contacts/contactsApiSelectors";

const ContactDetailEmptyState: React.FC = () => {
  const contacts = useAppSelector(selectContacts);

  if (!contacts || contacts.length === 0) {
    return null;
  }

  return (
    <div className="empty-state-message">
      &lt;&lt;&lt; Select a contact to view details
    </div>
  );
};

export default ContactDetailEmptyState;
