import React from "react";

function Post (props) {

    const [like, setLike] = React.useState("heart-outline");

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src= {props.src} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src= {props.imagem} 
                    onClick={() => {setLike (
                    like === "heart-outline" ? "heart" : "heart"
                    )}} 
                />
            </div>

            <div class="fundo">

                <div class="acoes">
                    <div>
                        <ion-icon 
                            name={like}
                            onClick={() => {setLike (
                                like === "heart-outline" ? "heart" : "heart-outline"
                            )}}>
                        </ion-icon>                     
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src= {props.imagemlike} />
                    <div class="texto">
                        Curtido por <strong>{props.like}</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>

            </div>
        </div>
    );
}


const posts = [
    {
        src: "assets/img/meowed.svg",
        usuario: "meowed",
        imagem: "assets/img/gato-telefone.svg",
        imagemlike: "assets/img/respondeai.svg",
        like: "respondeai"
    },
    {
        src: "assets/img/barked.svg",
        usuario: "barked",
        imagem: "assets/img/dog.svg",
        imagemlike: "assets/img/adorable_animals.svg",
        like: "adorable_animals"
    }
];

function Posts () {
    return ( 
        <div class="posts">
            {posts.map(post => (
                <Post 
                    src = {post.src} 
                    usuario = {post.usuario}
                    imagem = {post.imagem}
                    imagemlike = {post.imagemlike}
                    like = {post.like} 
                />
            ))}
            
        </div>
    );
}

export default Posts;