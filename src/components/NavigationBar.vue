<template>
    <header class="header">
      <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
          <div class="content">
            <h3 class="text">thesycron</h3>
            <h5 class="text">suporte</h5>
          </div>
          <img class="nav-logo" src="../assets/logotipo.png" alt="">
          <div class="nav-response">
            <h3 class="text">thesycron</h3>
            <button class="btn-nav"><img style="width: 30px;" src="../assets/logotipo.png" alt=""></button>
          </div>  
        </div>
      </nav>
    </header>
</template>

<script>

</script>

<style scoped>
  .header{
    background-color: transparent;
  }
  .container-fluid{
    border-bottom: 1px solid #0eba6ae3;
    
  }
  .text{
    color: #ffffff;
  }
  .navbar>.container, .navbar>.container-fluid, .navbar>.container-lg, .navbar>.container-md, .navbar>.container-sm, .navbar>.container-xl, .navbar>.container-xxl{
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
  .nav-response{
    display: none;
  }

  .btn-nav{
    background: none;
    border:1px solid aliceblue;
    border-radius: 5px;
    padding: 0.5rem;
    margin-right: 0.5rem;
  }

  .content{
    width: 100%;
    color: var(--text-ligth);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    margin-left: 20px;
    margin-right: 20px;

  }
  .nav-logo{
    height: 4rem;
    margin-left: 20px;
  }
  @media (max-width: 900px) {
    .content{
      display: none;
    }
    .nav-response{
      display: flex;
      padding: 0.3rem;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }
    .btn-nav{
      width: 50px;
    }
    .nav-logo{
      display: none;
    }
  }

</style>