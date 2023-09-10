
const PageHeader = ({advice}) => {
    return <div>
        <div className="header-page">
            <h1>Games Gallery</h1>
            <nav>
                <ul>
                    <li><a href="inicio">Início</a></li>
                    <li><a href="jogos">Jogos</a></li>
                    <li><a href="sobre">Sobre</a></li>
                    <li><a href="galeria">Galeria</a></li>
                </ul>
            </nav>
        </div>
        <p className="advice">{advice}</p>
    </div>
}

export default PageHeader;

