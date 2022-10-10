<template>
    <div class="first_page">
        <header>
          <img class="image" src="./assets/logo.png">
          <nav>
            <router-link class="nav_link" to="/">Home</router-link> 
            <router-link class="nav_link" to="/about">About</router-link> 
            <router-link class="nav_link" to="/serviços">Serviços</router-link> 
            <router-link class="nav_link" to="/usuarios">Usuário</router-link>
          </nav>
        </header>
        <router-view/>

    </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #021222;
  height: 100vh;
}

*{
  margin: 0px;
  padding: 0px;
}


.first_page{
    height: 90vh;
    width: 170vh;
    background-color: rgb(23, 7, 79);
    position: relative;
    left: 10vh;
    top: 3vh;
    box-shadow: 60px 40px 40px black;
}

header{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.image{
  height: 30px;
  width: 30px;
}

nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.nav_link{
  padding: 0px 30px;
  color: white;
  text-decoration: none;
}
.nav_link:hover{
  color: #42b983;
}

</style>
