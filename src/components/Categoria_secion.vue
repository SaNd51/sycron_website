<template>
    <section>
        <div class="content">
            <h3 class="titulo-categoria">serviços</h3>
            <div class="scroll-item" id="conteudo">
                <!-- A primeira "card" já pré-existente -->
                <div class="scroll card">
                    <div class="img-box"></div>
                    <div class="titulo" id="teste0">
                        <h4 class="titulo-card" >limpeza</h4>
                        <ul class="lista">
                            <li class="lista-item">eletronicos</li>
                            <li class="lista-item">computadores</li>
                            <li class="lista-item">impressoras</li>
                        </ul>
                    </div>
                </div>
                <div class="scroll card">
                    <div class="img-box"></div>
                    <div class="titulo" id="teste0">
                        <h4 class="titulo-card" >manutenção</h4>
                        <ul class="lista">
                            <li class="lista-item">eletronicos</li>
                            <li class="lista-item">computadores</li>
                            <li class="lista-item">impressoras</li>
                            <li class="lista-item">câmeras</li>
                        </ul>
                    </div>
                </div>
                <div class="scroll card">
                    <div class="img-box"></div>
                    <div class="titulo" id="teste0">
                        <h4 class="titulo-card" >formatção</h4>
                        <ul class="lista">
                            <li class="lista-item">celulares</li>
                            <li class="lista-item">computadores</li>
                        </ul>
                    </div>
                </div>
                <div class="scroll card">
                    <div class="img-box"></div>
                    <div class="titulo" id="teste0">
                        <h4 class="titulo-card" id="categore">avlição técnica</h4>
                        <ul class="lista">
                            <li class="lista-item">impressoras</li>
                            <li class="lista-item">celulares</li>
                            <li class="lista-item">computadores</li>
                        </ul>
                    </div>
                </div>
                <div class="scroll card">
                    <div class="img-box"></div>
                    <div class="titulo" id="teste0">
                        <h4 class="titulo-card" id="categore">instalação</h4>
                        <ul class="lista">
                            <li class="lista-item">eletronicos</li>
                            <li class="lista-item">computadores</li>
                            <li class="lista-item">impressoras</li>
                            <li class="lista-item">câmeras</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
section{
    padding-bottom: 4rem;
    padding-top: 4rem;
}

.scroll-item {
    overflow: auto;
    white-space: nowrap;
    border-top: 2px solid #11b367e1;
    border-radius: 2px;
}
.lista{
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: circle;
}
.img-box {
    background-color: #f4fffa0f;
    width: 90%;
    height: 50%;
    margin: 0.5rem;
    border-radius: 5px;
}
.titulo-categoria{
    margin-left: 1rem;
    padding-bottom: 1rem;
}
.titulo-card{
    padding-bottom: 1rem;
    color: white;
}

.titulo{
    width: 100%;
    color: rgb(22, 22, 22);
    margin: 0.5rem;
    padding: 0.5rem;
    text-wrap: balance;
}
.scroll{
    display: inline-flex;
    
}
.card {
    text-align: center;
    width: 22rem;
    height: 30rem;
    border-color: #189259;
    background-color: #1d1d1d;
    color: black;
    padding: 0.1rem;
    text-decoration: none;
    margin: 1rem;
    position: relative;
    align-items: center; /* Necessário para que a .titulo seja posicionada */
}

.content {
    color: white;
    text-align: justify;
    border-radius: 5px;
    height: 100%;
    padding: 1rem;
}

.aling-itens {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

/* Estilos para o scrollbar */
*::-webkit-scrollbar {
    height: 6px;
    width: 2px;
}

*::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #11b367e1;
}

*::-webkit-scrollbar-thumb:hover {
    background-color: #11b367e1;
}

*::-webkit-scrollbar-thumb:active {
    background-color: #11b367e1;
}

@media (max-width: 810px) {
    section {
        padding: 1rem;
        margin-bottom: 2rem;
    }

    .aling-itens {
        display: block;
    }
    .card{
        width: 90%;
    }

}
</style>
