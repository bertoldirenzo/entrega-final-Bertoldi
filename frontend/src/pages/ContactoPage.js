import { useState } from 'react';
import axios from 'axios';

import '../styles/components/pages/Contacto.css'

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
            axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false)
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main>

            <div className="contacto">
                <h1>Contacto</h1>
                <form action="/contacto" method="post" className="row g-4 p-4" onSubmit={handleSubmit}>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <input type="text" className="form-control" placeholder="Nombre" name="nombre" aria-label="First name"
                            value={formData.nombre} onChange={handleChange} />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <input type="text" className="form-control" placeholder="Email" name="email" aria-label="email"
                            value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <input type="text" className="form-control" placeholder="Teléfono" name="telefono" aria-label="Phone"
                            value={formData.telefono} onChange={handleChange} />
                    </div>
                    <div class="form-group">
                        <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" placeholder="Mensaje" 
                        name="mensaje" rows="3" value={formData.mensaje} onChange={handleChange}></textarea>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <button type="submit" className="btn btn-success">Enviar</button>
                    </div>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}

                </form>
            </div>
        </main>
    )
}


export default ContactoPage;