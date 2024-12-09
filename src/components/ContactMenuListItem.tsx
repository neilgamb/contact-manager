import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { selectActiveContactId, setActiveContactId } from "../state/app";
import { AppDispatch, useAppDispatch, useAppSelector } from "../state/store";
import "./ContactMenuListItem.scss";
import { selectContactById } from "../features/contacts/contactsApiSelectors";

interface ContactMenuListItemProps {
  contactId: number;
}

const ContactMenuListItem: React.FC<ContactMenuListItemProps> = ({
  contactId,
}) => {
  const dispatch: AppDispatch = useAppDispatch();
  const activeContactId = useAppSelector(selectActiveContactId);
  const contact = useAppSelector(selectContactById(contactId));

  if (!contact) {
    return null;
  }

  return (
    <Link
      to={`/contact/${contactId}`}
      className="contact-menu-list-item-link"
      onClick={() => dispatch(setActiveContactId(contactId))}
    >
      <div
        className={classNames("contact-menu-list-item", {
          active: activeContactId === contactId,
        })}
      >
        {contact.name}
      </div>
    </Link>
  );
};

export default ContactMenuListItem;
