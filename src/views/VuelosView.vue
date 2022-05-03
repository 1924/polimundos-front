<template>
  
  <div class="container">
    <b-link to="/">Nueva busqueda</b-link>
    <b-card
      class="mt-2"
      header="Vuelos disponibles"
      header-tag="header"
      footer-tag="footer"
    >
    
      <b-list-group>
        <b-list-group-item href="#" v-for="item in items" :key="item.id" class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ item.aerolinea }}</h5>
            <small>Duración: {{ item.duracion }}</small>
          </div>

          <p class="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. 
          </p>
          <div class="d-flex w-100 justify-content-between">
            <small></small>  
            <b-button variant="outline-primary">Comprar</b-button>
          </div>
          
        </b-list-group-item>
      </b-list-group>
    </b-card>
    
    
   </div>

</template>

<script>
import datos from '../../api/vuelos.js'

export default {

  computed: {

    items () {
     
      let lista = datos.sort(() => Math.random() - 0.5);
      console.log( lista);
      return lista.map((item) => {
        return item;
      })
    }
  }
}
</script>