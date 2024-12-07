import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Contact } from "../types/contact";
import { selectActiveContactId, setActiveContactId } from "../state/app";
import { AppDispatch, useAppDispatch, useAppSelector } from "../state/store";
import "./ContactMenuListItem.scss";

interface ContactMenuListItemProps {
  contact: Contact;
}

const ContactMenuListItem: React.FC<ContactMenuListItemProps> = ({
  contact,
}) => {
  const dispatch: AppDispatch = useAppDispatch();
  const activeContactId = useAppSelector(selectActiveContactId);

  return (
    <Link
      to={`/contact/${contact.id}`}
      className="contact-menu-list-item-link"
      onClick={() => dispatch(setActiveContactId(contact.id))}
    >
      <div
        className={classNames("contact-menu-list-item", {
          active: activeContactId === contact.id,
        })}
      >
        {contact.name}
      </div>
    </Link>
  );
};

export default ContactMenuListItem;
