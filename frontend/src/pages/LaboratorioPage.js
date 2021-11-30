import '../styles/components/pages/Laboratorio.css'

const LaboratorioPage = (props) => {
    return (
        <main>
            <h1>Laboratorio</h1>
            <div className="contenedor">
                <div className="laboratorio">
                    <img src="img/magna.png"  alt="Magna"/>
                    <div class ="info">
                    <h4>Impresora FDM</h4>
                    <p>Impresora con tecnología FDM capaz de realizar piezas complejas gracias a su doble extrusor</p>
                    </div>
                </div>
                <div className="laboratorio">
                    <img src="img/creality.png"  alt="creality"/>
                    <div className ="info">
                    <h4>Impresora LCD</h4>
                    <p>Impresora con tecnología LCD capaz de realizar todo tipo de piezas dentales gracias a las
                    diversas
                    resinas disponibles en el mercado</p>
                    </div>
                </div>
                <div className="laboratorio">
                    <img src="img/elego.png"  alt="elego"/>
                    <div className ="info">
                    <h4>Máquina de Curado</h4>
                    <p>Este dispositivo nos permite realizar una terminación más detallada de nuestras piezas de resina</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default LaboratorioPage;