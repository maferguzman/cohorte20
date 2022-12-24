import React from "react"

const micomponente = () => {
    let nombre = "Mariafernanda Guzman"
    let linkedin = "linkedin.com/in/mariafernanda-guzman/"
    let perfil = {
        usuario: "Mafer",
        apellido: "Guzman",
        github: "https://github.com/maferguzman"
    }
    return (
        <div>
        <header>
            <p>Mi primer componente</p>
            <ul>
                <li>nombre: <strong>{nombre}</strong></li>
                <li>linkedin: {linkedin}</li>
                <li>perfil: <small>{perfil.usuario}</small></li>
            </ul>
        </header>
        </div>
    )
}
export default micomponente;
