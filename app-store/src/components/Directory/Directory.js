import React from "react";
import DirectoryForm from "./DirectoryForm/DirectoryForm";
import DirectoryHeader from "./DIrectoryHeader/DirectoryHeader";
import DirectoryList from "./DrectoryList/DirectoryList";
import api from "../../api/utils";
import { v4 as uuidv4 } from "uuid";

function Directory() {
  const [contacts, setContacts] = React.useState([]);
  const [name, setName] = React.useState("");
  const [mailId, setMailId] = React.useState("");
  const [isEdit, setIsEdit] = React.useState(false);
  const [editData, setEditData] = React.useState({});


  const formSubmit = (event) => {
    event.preventDefault();
    setMailId("");
    setName("");
    isEdit? editContact() : addContact();
  };
  const onNameChange = (event) => {
    setName(event?.target?.value);
    event.preventDefault();
  };
  const onEmailChange = (event) => {
    setMailId(event?.target?.value);
    event.preventDefault();
  };
  const retrieve = async () => {
    const response = await api.get("contacts");
    return response.data;
  };
  const addContact = async () => {
    const requestOption = {
      id: uuidv4(),
      name: name,
      email: mailId,
    };
    const response = await api.post("contacts", requestOption);
    setContacts([...contacts, response.data]);
  };
  const removeContact = async ({ id }) => {
    const response = await api.delete(`contacts/${id}`);
    const allContacts = await retrieve();
    if (allContacts) setContacts(allContacts);
  };
  const enableEdit = (contact) => {
    setEditData(contact)
    setName(contact?.name)
    setMailId(contact?.email)
    setIsEdit(true)
  };
  const editContact = async () => {
    const requestOption = {
      id: editData?.id,
      name: name,
      email: mailId,
    };
    const response = await api.put(`contacts/${editData?.id}`, requestOption);
    const allContacts = await retrieve();
    if (allContacts) setContacts(allContacts);
    setIsEdit(false)
  };
  React.useEffect(() => {
    const getAllCOntacts = async () => {
      const allContacts = await retrieve();
      if (allContacts) setContacts(allContacts);
    };
    getAllCOntacts();
  }, []);
  return (
    <div className="h-screen bg-gradient-to-r from-primary via-primary to-primary ... flex justify-center p-8 flex flex-col">
      <div className="w-96 h-fit p-8 display-block m-auto bg-metalwhite rounded-lg flex flex-col ">
        <DirectoryHeader />
        <div className="my-4">
          <DirectoryForm
            formSubmit={formSubmit}
            onNameChange={onNameChange}
            onEmailChange={onEmailChange}
            name={name}
            mailId={mailId}
            addContact={addContact}
            isEdit={isEdit}
            editContact={editContact}
          />
        </div>
      </div>
      <div className="my-4">
          <DirectoryList contacts={contacts} removeContact={removeContact} enableEdit={enableEdit} />
        </div>
    </div>
  );
}

export default Directory;
