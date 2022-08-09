import React, { useState, useContext, createContext, useEffect } from "react";
import { urlFor, client } from "../../client";
import toast from "react-hot-toast";

const ContactContext = createContext({});
export const ContactProvider = ({ children }) => {
  const [contactHeader, setContactHeader] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [contactCard, setContactCard] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [contactMore, setContactMore] = useState();
  // destruturing  formData variables
  const { fullName, email, message } = formData;
  // handleChangeInput
  const handleChangeInput = () => {
    const name = name.trim();
    const email = email.trim();
    const message = message.trim();
    setFormData({
      ...formData,
      [name]: { ...formData[name], message },
    });
  };
  const handleMessageInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  // handle submitting contact form logic
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contacted = {
      _type: "contacts",
      fullName,
      email,
      message,
    };

    client
      .create(contacted)
      .then(() => {
        setLoading(false);
        setError(null);
        // setContactHeader(contacted);
        setIsFormSubmitted(true);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    /// querying for the contacthEADER schema
    const contactHeaderQuery = '*[_type == "contactHeader"]';
    client.fetch(contactHeaderQuery).then((data) => setContactHeader(data));
    // querying for the contacts schema
    const contactQuery = '*[_type == "contact"]';
    client.fetch(contactQuery).then((data) => setContacts(data));
    // querying for the contactCard schema
    const contactCardQuery = '*[_type == "contactCard"]';
    client.fetch(contactCardQuery).then((data) => setContactCard(data));
    // querying for the CONTACTMORE     schema
    const contactMoreQuery = '*[_type == "contactMore"]';
    client.fetch(contactMoreQuery).then((data) => setContactMore(data));
  }, []);
  return (
    <ContactContext.Provider
      value={{
        contactHeader,
        contacts,
        contactCard,
        handleSubmit,
        error,
        isFormSubmitted,
        message,
        handleChangeInput,
        handleMessageInput,
        handleChange,
        loading,
        contactMore,
        fullName,
        email,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useStateContextContact = () => useContext(ContactContext);
