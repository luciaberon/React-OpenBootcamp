import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ContactComponent = ({ contact }) => {

    let { name, surname, email, connected } = contact
    const [status, changeStatus] = useState([connected])

    const updateStatus = () => changeStatus(!status)

    return (
        <div>
            <h3>Nombre: {name}</h3>
            <h3>Apellido: {surname}</h3>
            <h3>Email: {email}</h3>
            <h3>{ status ? "Contacto En Línea" : "Contacto No Disponible"}</h3>
            <button onClick={updateStatus}>{status ? "DESCONECTAR" : "CONECTAR"}</button>
        </div>
    )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent

