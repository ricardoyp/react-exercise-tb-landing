import "./navBar.css";

function NavBar() {
    return (
        <nav className="navBar">
            <li><img className="theBridgeImg" src="https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/607eeb4b0517b6659206c10f_thebridgelogo.svg"/></li>
            <li>Cursos</li>
            <li>Dónde estudiar</li>
            <li>Financiacion y becas</li>
            <li>Empresas e instrucciones</li>
            <li>Sobre nosotros</li>
        </nav>
    )
}

export default NavBar;