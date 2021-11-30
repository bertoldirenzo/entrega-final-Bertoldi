import '../styles/components/pages/Nosotros.css'

const NosotrosPage = (props) => {
    return (
        <main>
        <div class="historia">
            <h1>Historia</h1>
            <p>LAB 3D nació como un proyecto familiar en el cual se pudieran integrar los conocimientos tecnológicos y
                odontológicos que marquen tendencia en las técnicas de impresión 3D para prótesis dentales.</p>
        </div>
        <div class="staff">
            <h1>Nuestro Equipo</h1>
            <div class="miembros">
                <div class="miembro1">
                    <img src="img/perfil1.png" alt="Renzo Bertoldi"/>
                    <h5>Renzo Bertoldi</h5>
                    <h6>Jefe Departamento Técnico</h6>
                    <p>Ingeniero en Telecomunicaciones a cargo de todas las necesidades tecnológicas del laboratorio</p>
                </div>
                <div class="miembro1">
                    <img src="img/perfil2.png" alt="Mayra Gimenez"/>
                    <h5>Mayra Gimenez</h5>
                    <h6>Jefa de Laboratorio</h6>
                    <p>Técnica en Prótesis Dental especialista en Modelado y Diseño en 3D a cargo de todas las
                        necesidades de diseño del laboratorio</p>
                </div>
            </div>
        </div>
    </main>
    )
}
export default NosotrosPage;