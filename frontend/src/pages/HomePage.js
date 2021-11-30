import '../styles/components/pages/Home.css'

<style>
    @import url('https://fonts.googleapis.com/css2?family=Kaisei+Opti:wght@400;500&display=swap');
</style>

const HomePage = (props) => {
    return (
        <main>
        <div className="home">
            <h1>Bienvenidos</h1>
            <div className="imgbienvenidos">
              <img  src="img/foto1.jpg" alt="Bienvenidos" />
            </div>  
            <p>Bienvenido a LAB 3D el laboratorio por excelencia para realizar los diseños e impresiones 3D de la protesis
                dentales que necesites
            </p>
        </div>    
        </main>
    )
}
export default HomePage;