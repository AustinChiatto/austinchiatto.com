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
  const [copyLabel, setCopyLabel] = useState('Copy');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const modalRef = useRef(null);

  useClickOutside(modalRef, () => {
    if (isOpen) setIsOpen(false);
  });

  const copyEmailButton = (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setCopyLabel('Copied!');
          navigator.clipboard.writeText(`${contacts[0].caption[1]}`);
        }}
        onMouseLeave={() => setCopyLabel('Copy')}
        className="block absolute right-9 top-2 bottom-2 px-2 py-1 border border-border rounded-sm text-xs lowercase font-medium transition-color duration-200 bg-background hover:bg-foreground text-secondary hover:text-background"
      >
        {copyLabel}
      </button>
      <Icon name={contacts[0].icon} />
    </>
  );

  const modal = (
    // modal header
    <div
      ref={modalRef}
      onMouseLeave={() => setIsOpen((prevState) => !prevState)}
      className={`absolute left-[-1px] right-[-1px] bottom-[-1px] p-2.5 flex flex-col gap-3 justify-between items-center border border-border rounded-lg bg-background transition-all duration-300 ${
        isOpen ? 'opacity-1' : 'translate-y-1 opacity-0 pointer-events-none'
      }`}
    >
      <div className="py-6 w-full grid place-items-center bg-secondary-background rounded-md">
        <h3 className="text-center text-foreground">{caption[0]}</h3>
        <p className="text-center text-xs">{caption[1]}</p>
      </div>
      {/* modal body */}
      <ul className="w-full">
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className="w-full"
            onMouseOver={() => setHoveredId(contact.id)}
            onMouseOut={() => setHoveredId(null)}
          >
            <Link
              href={contact.url}
              onMouseOver={() => setCaption(contact.caption)}
              onMouseOut={() => setCaption(defaultCaption)}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative flex justify-between items-center text-left p-2.5 rounded-md hover:bg-secondary-background hover:text-foreground"
            >
              {contact.label}
              {contact.id === 0 && hoveredId === 0 ? copyEmailButton : <Icon name={contact.icon} />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="relative flex-1 md:max-w-[20rem] h-16 px-[1.125rem] py-2.5 flex justify-between items-center border border-border rounded-lg transition-colors bg-background hover:bg-secondary-background"
      >
        {modal}
        <h3 className="text-foreground">Get in touch</h3>
        <Icon name="plus" />
      </button>
    </>
  );
};

export default ContactModal;
