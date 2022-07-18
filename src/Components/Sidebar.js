
function Usuario (props) {
    return (
        <div class="usuario">
            <img src={props.src} />
            <div class="texto">
                <strong>{props.username}</strong>
                {props.usuario}
            </div>
        </div>
    );
}

function Sugestao (props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src = {props.src} />
                <div class = "texto">
                    <div class="nome"> {props.usuario} </div>
                    <div class="razao"> {props.status} </div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    );
}

const usuarios = [
    {
        src: "assets/img/bad.vibes.memes.svg",
        usuario: "bad.vibes.memes",
        status: "Segue você",   
    },
    {
        src: "assets/img/chibirdart.svg",
        usuario: "chibirdart",
        status: "Segue você",
    },
    {
        src: "assets/img/razoesparaacreditar.svg",
        usuario: "razoesparaacreditar",
        status: "Novo no Instagram",
    },
    {
        src: "assets/img/adorable_animals.svg",
        usuario: "adorable_animals",
        status: "Segue você",
    },
    {
        src: "assets/img/smallcutecats.svg",
        usuario: "smallcutecats",
        status: "Segue você",
    }
];

function Sidebar () { 
    return (
        <div class="sidebar">

            <Usuario 
                src = "assets/img/catanacomics.svg"
                username = "catanacomics"
                usuario = "Catana"
            />

            <div class="sugestoes">

                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div> 

                {usuarios.map((usuario) => (
                    <Sugestao 
                        src = {usuario.src} 
                        usuario = {usuario.usuario}
                        status = {usuario.status}
                    />
                ))}

            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}

export default Sidebar;