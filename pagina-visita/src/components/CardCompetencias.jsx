export function CardCompetencias({titulo, subtitulo, descricao}){
    return(
        <div>
            <article>
                <h1>{titulo}</h1>
                <h2>{subtitulo}</h2>
                <p>{descricao}</p>
            </article>
        </div>
    )
}