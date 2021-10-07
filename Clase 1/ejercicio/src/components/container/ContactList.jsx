import React, { useState } from 'react'
import ContactComponent from '../pure/ContactComponent'
import { Contact } from '../../models/contact.class'

export default function ContactList() {

    const firstContact = new Contact("Pepe","Gonzalez","pepe@hotmail.com",false);
    const secondContact = new Contact("Julia","Acosta","julia@hotmail.com",false);
    const thirdContact = new Contact("Rodrigo","Perez","rodrigo@hotmail.com",false);

    const [contacts, setContacts] = useState([firstContact,secondContact,thirdContact]);

    function changeStatus(user){
        const index = contacts.indexOf(user);
        const tempArray = [...contacts];
        tempArray[index].connected = !tempArray[index].connected;
        setContacts(tempArray);
    }

    return (
        <div>
            <h1>Lista de contactos</h1>
            {/* Debería mapearse una lista de contactos, pero en este caso solo usaré un contacto */}

            {
                contacts.map((item,index) => 
                        <ContactComponent contact={item} key={index} update={changeStatus}></ContactComponent>)
            }            
        </div>
    )
}
