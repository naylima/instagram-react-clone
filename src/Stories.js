function Story(props) {
    return (
        <div class="story">
                <div class="imagem">
                    <img src= {props.src} />
                </div>
                <div class="usuario">
                    {props.usuario}
                </div>
        </div>
    );
}

const stories = [
    {src: "assets/img/9gag.svg", usuario: "9gag"},
    {src: "assets/img/meowed.svg", usuario: "meowed"},
    {src: "assets/img/barked.svg", usuario: "barked"},
    {src: "assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet"},
    {src: "assets/img/wawawicomics.svg", usuario: "wawawicomics"},
    {src: "assets/img/respondeai.svg", usuario: "respondeai"},
    {src: "assets/img/filomoderna.svg", usuario: "filomoderna" },
    {src: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet"}
];

function Stories () {
    return (
        <div class="stories">
            {stories.map(story => (
                <Story src = {story.src} usuario = {story.usuario} />
            ))};
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

export default Stories;