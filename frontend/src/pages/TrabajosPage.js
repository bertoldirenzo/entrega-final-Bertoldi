import { useState, useEffect } from 'react';
import axios from 'axios';
import TrabajosItem from '../components/trabajos/TrabajosItem';



import '../styles/components/pages/Trabajos.css'
/* 
const TrabajosPage = (props) => {
    return (
        <main>
            <h1>Galería</h1>
            <div class="trabajos">
                <div class="foto">
                    <img src="img/diente6.webp" alt="diente" />
                </div>
                <div class="foto">
                    <img src="img/diente2.jpg" alt="diente" />
                </div>
                <div class="foto">
                    <img src="img/diente3.webp" alt="diente" />
                </div>
                <div class="foto">
                    <img src="img/diente4.jpg" alt="diente" />
                </div>
                <div class="foto">
                    <img src="img/diente9.jpg" alt="diente" />
                </div>
                <div class="foto">
                    <img src="img/diente1.webp" alt="diente" />
                </div>
                <div class="foto">
                    <img src="img/diente7.jpg" alt="diente" />
                </div>
                <div class="foto">
                    <img src="img/diente8.png" alt="diente" />
                </div>
            </div>
        </main>
    )
} */
const Nav = (props) => {

    const [loading, setLoading] = useState(false);
    const [trabajos, setTrabajos] = useState([]);

    useEffect(() => {
        const cargarTrabajos = async () => {
            setLoading(true);
            //const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/trabajos`);
            const response = await axios.get('http://localhost:3000/api/trabajos');
            setTrabajos(response.data);
            setLoading(false);
        };

        cargarTrabajos();
    }, []);


    return(
        <section className="holder">
            <h2>Trabajos</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                trabajos.map(item => <TrabajosItem key={item.id}
                    title={item.titulo} subtitle={item.subtitulo}
                    imagen={item.imagen}
                    body={item.cuerpo} />)
            )}
        </section>
    );
}

export default Nav;