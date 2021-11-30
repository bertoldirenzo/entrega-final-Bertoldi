import React from "react";

const TrabajosItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className="trabajos">
            <img src={imagen} />
            <div class="info">
                <h2>{title}</h2>
                <h4>{subtitle}</h4>
                <div dangerouslySetInnerHTML={{ __html: body }} />
                <hr />
            </div>
        </div>
    );
}

{/* <div className="laboratorio">
<img src="img/magna.png"  alt="Magna"/>
<div class ="info">
<h4>Impresora FDM</h4>
<p>Impresora con tecnología FDM capaz de realizar piezas complejas gracias a su doble extrusor</p>
</div>
</div>

<h1>{title}</h1>
<h2>{subtitle}</h2>
<img src={imagen} />
<div dangerouslySetInnerHTML={{ __html: body }} />
<hr /> */}

export default TrabajosItem;