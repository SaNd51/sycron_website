<script>

</script>

<template>
    <section>
    <div class="containe aling-itens">   
        <div class="box1">
            <img src="../assets/images/post1.png" alt="" class="image">
            <h1 class="title">
                Soluções em informática
            </h1>
            <p class="text">
                Olá! Somos a Sycron, uma assistência técnica de informática que visa resolver problemas relacionados à tecnologia da informação em hardware e software. 
                Se você está enfrentando problemas com a tecnologia da informação, 
                não hesite em entrar em contato conosco. Estamos aqui para ajudá-lo.
            </p>
        </div>

        <div class="box2 ">
            <button class="btn"><a class="link" href="#lista">Saber mais</a></button>
        </div>
        
    </div>
    </section>
    
</template>

<style scoped>

section{
    height: 90.9vh;
    
}

.containe { 
    height: 100%;
    padding: 0;
    color: white;
    border-radius: 5px;
}

.box1{
    right: 0;
    margin-right: 2rem;
    width: 60%;
    text-align:justify;
}

.box2{
    position: relative;
    right: 0;
    display: flex;
    margin-top: 4%;
    margin-right: 2rem;
    width: 40%;
    text-align: justify;
    justify-content: center;
}

.title{
    margin-top: 1rem;
}
.text{
    margin-top: 1rem;
}

.link{
    text-decoration: none;
    color: #f5f5f5;
}
.link:hover{
    color: #e4eae5;
}

.image{
    width: 100%;
    border-radius: 1rem;
}

.aling-itens{
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
    justify-content: space-between;
    flex-direction: row-reverse;
}


.btn{
    text-transform: uppercase;
    border-radius: 2px ;
    text-align: center;
    padding: 1rem;
    box-shadow: none;
    border: 1px solid #ffffff;
}

.btn:hover{
    background-color: #222e38f3;
    
}

.btn:active{
    padding: 0.7rem;
}

@media (max-width: 920px) {

    section{
        padding-bottom: 3rem;
        height: auto;
    }

    .aling-itens{
        flex-direction: column;
    }

    .box1{
        width: auto;
        margin: 2rem;
        text-align: -webkit-left;
    }
    .box2{
        height: inherit;
        display:unset;
        width: auto;
    }

}


</style>