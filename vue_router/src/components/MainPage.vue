<template>
  <div>
    <div class="about_content">
      <h1 class="about_home">Lorem ipsum
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur, <br>
        adipisicing elit. Amet impedit repellendus <br>
        corporis quis! Lorem ipsum dolor sit amet <br>
        consectetur adipisicing elit.</p>
      <nav>
        <router-link class="button_enter" to="/Entrar">Entrar</router-link>
        <router-link class="button_register" to="/Cadastrar">Cadastrar</router-link>
      </nav>
    </div>
    <img class="image_main" src="../assets/homem-de-negocios.png" alt="">
    <img class="bitcoin_image_1" src="../assets/bitcoin.png" alt="">
    <img class="bitcoin_image_2" src="../assets/bitcoin.png" alt="">
    <img class="bitcoin_image_3" src="../assets/bitcoin.png" alt="">
 
  </div>
</template>

<script>
export default {
  name: 'MainPage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .about_content{
    width: 58vh;
    position: relative;
    left: 140px;
    top: 20vh;
    color: white;
  }

  .bitcoin_image_1{
    height: 15vh;
    width: 15vh;
    position: relative;
    bottom: 50vh;
    right: 10vh;
  }

  .bitcoin_image_2{
    height: 15vh;
    width: 15vh;
    position: relative;
    bottom: 70vh;
    left: 5vh;
  }

  .bitcoin_image_3{
    height: 15vh;
    width: 15vh;
    position: relative;
    bottom: 50vh;
    left: 22vh;
  }

  p{
    font-size: 30px;
    line-height: 50px;
  }

  .image_main{
  height: 45vh;
  width: 50vh;
  position: relative;
  left: 55vh;
  bottom: 15vh;
}

  .about_home{
    font-size: 70px;
    color: white;
    line-height: 150px;
    font-family:Verdana, Geneva, Tahoma, sans-serif
  }

  .button_enter{
    text-decoration: none;
    display: block;
    height: 36px;
    color: white;
    padding-top: 15px;
    width: 120px;
    background-color: rgb(7, 7, 136);
    font-size: 20px;
    border-radius: 15px;
  }

  .button_register{
    text-decoration: none;
    display: block;
    height: 36px;
    padding-top: 15px;
    width: 120px;
    background-color: rgb(7, 7, 136);
    font-size: 20px;
    border-radius: 15px;
    color: white;
  }

  .button_register:hover{
    background-color: rgb(0, 3, 205);
  }
  .button_enter:hover{
    background-color: rgb(0, 3, 205);
  }

  nav{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }


</style>
