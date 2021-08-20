<template>
  <div id="app">
    <div id="nav">
      <h1 id="si">EIADA</h1>
      <p id="p">home - - - pricing - - -</p>
      <div id="ni">
      <router-link to="/" >SIGN IN   </router-link>
      <router-link to="/nn"> join in</router-link> 
      </div>
      
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body{margin: 0px;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0px;
}

#nav {
  padding: 30px;
  height: 30px;
   background-color: whitesmoke;
    color: #000000;
  

  a {
    font-weight: bold;
    border-radius: 10px;
    color: skyblue;
    overflow: hidden;
    margin: 10px;
    max-width: 20px;
    text-decoration:none;
    
    
    

    &.router-link-exact-active {
     
     background-color:cornflowerblue;
     border-radius: 10px;
    }
   };
  };
  #ni{
    float:right;
    font-size: 20px;
    overflow: hidden;
    width:200px;
    height: 30px;
    margin-top: -20px;
   
  };
  
  #si{
    margin:0px;
    color: cornflowerblue;
    float: left;
    overflow: hidden;
    
  };
  #p{
    margin: 0px 300px 0px 10px;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    overflow: hidden;
  }
  
 #no{
  float: right;
  margin-top:10px;
  
  
}
</style>
