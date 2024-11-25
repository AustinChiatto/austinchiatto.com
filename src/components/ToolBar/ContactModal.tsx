'use client';
import { Contacts } from '@/data/content';
import { useRef, useState } from 'react';
import Icon from '../Icon';
import Link from 'next/link';
import { useClickOutside } from '@/hooks/useClickOutside';

type Props = {
  contacts: Contacts[];
};

const ContactModal = ({ contacts }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const defaultCaption = ['Hey! 👋', "It's nice to meet you"];
  const [caption, setCaption] = useState(defaultCaption);
  const modalRef = useRef(null);

  useClickOutside(modalRef, () => {
    if (isOpen) setIsOpen(false);
  });

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleContactHover = (contactCaption: string[]) => {
    setCaption(contactCaption);
  };

  const modal = (
    <div
      ref={modalRef}
      onMouseLeave={handleToggle}
      className={`absolute left-[-1px] right-[-1px] bottom-[-1px] p-2.5 flex flex-col gap-3 justify-between items-center border border-border rounded-lg bg-background transition-all duration-300 ${
        isOpen ? 'opacity-1' : 'translate-y-1 opacity-0 pointer-events-none'
      }`}
    >
      <div className="py-6 w-full grid place-items-center bg-secondary-background rounded-md">
        <h3 className="text-center text-foreground">{caption[0]}</h3>
        <p className="text-center text-xs">{caption[1]}</p>
      </div>
      <ul className="w-full">
        {contacts.map((contact, id) => (
          <li
            key={id}
            className="w-full"
          >
            <Link
              href={contact.url}
              onMouseOver={() => handleContactHover(contact.caption)}
              onMouseOut={() => handleContactHover(defaultCaption)}
              target="_blank"
              rel="noopener noreferrer"
              className="block flex justify-between items-center text-left p-2.5 rounded-md hover:bg-secondary-background hover:text-foreground"
            >
              {contact.label}
              <Icon name={contact.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <button
        onClick={handleToggle}
        className="relative flex-1 md:max-w-[20rem] h-16 px-[1.125rem] py-2.5 flex justify-between items-center border border-border rounded-lg bg-background transition-shadow hover:shadow-md"
      >
        {modal}
        <h3 className="text-foreground">Get in touch</h3>
        <Icon name="plus" />
      </button>
    </>
  );
};

export default ContactModal;
