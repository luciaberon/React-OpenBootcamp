import React, { useState } from 'react'
import ContactComponent from '../pure/ContactComponent'
import { Contact } from '../../models/contact.class'

export default function ContactList() {

    const defaultContact = new Contact("Pepe","Gonzalez","pepe@hotmail.com",false);
    return (
        <div>
            <h1>Lista de contactos</h1>
            {/* Debería mapearse una lista de contactos, pero en este caso solo usaré un contacto */}
            <ContactComponent contact={defaultContact}></ContactComponent>
            
        </div>
    )
}
