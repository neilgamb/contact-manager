import { useAppSelector } from "../state/store";
import { selectContactIds } from "../features/contacts/contactsApiSelectors";

const ContactDetailEmptyState: React.FC = () => {
  const contacts = useAppSelector(selectContactIds);

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
