import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ContactComponent = ({ contact, update }) => {

    let { name, surname, email, connected } = contact

    return (
        <div>
            <h3>Nombre: {name}</h3>
            <h3>Apellido: {surname}</h3>
            <h3>Email: {email}</h3>
            <h3>{ connected ? "Contacto En Línea" : "Contacto No Disponible"}</h3>
            <button onClick={() => update(contact)}>{connected ? "DESCONECTAR" : "CONECTAR"}</button>
        </div>
    )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent

