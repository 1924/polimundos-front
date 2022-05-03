<template>
  
  <div class="container">

    <b-card
      header="Encuentra las mejores ofertas de viaje desde Ecuador"
      header-tag="header"
      footer-tag="footer"
    >
    <div>
      <b-form @submit="onSubmit">
        
        <b-form-group id="input-group-2"  class="mt-1" label="Ciudad de origen:" label-for="input-group-2">
          <b-form-select
            class="form-control"
            id="input-3"
            v-model="form.ciudadOrigen"
            :options="items"
            required
          ></b-form-select>
        </b-form-group>


        <b-form-group id="input-group-2"  class="mt-3" label="Ciudad de destino:" label-for="input-group-2">
          <b-form-select
            class="form-control"
            id="input-3"
            v-model="form.ciudadDestino"
            :options="items"

            required
          ></b-form-select>
        </b-form-group> 

        <b-form-group id="fecha_partida"  class="mt-3" label="Fecha de partida:" label-for="fecha_partida">
          <b-form-datepicker
            id="fechaPartida"
            v-model="form.fpartida"
            class="mb-2"
          ></b-form-datepicker>
        </b-form-group>

        <b-form-group id="fecha_retorno"  class="mt-3" label="Fecha de retorno:" label-for="fecha_retorno">
          <b-form-datepicker
            id="fechaRetorno"
            v-model="form.fretorno"
            class="mb-2"
          ></b-form-datepicker>
        </b-form-group>

        <b-button type="submit" variant="primary" class="w-100 mt-3">Buscar</b-button>
      </b-form>
      
    </div>

    </b-card>
    
    
   </div>

</template>

<script>
import datos from '../../api/aeropuertos.js'

export default {
  data() {
    return {
      form: {
        ciudadOrigen: '',
        ciudadDestino: '',
        fpartida: null,
        food: null
      },
      show: true,
      fecha_partida: null,
      fretorno: '',
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.$router.push('/vuelos')
    },
    onReset(event) {
      event.preventDefault()
      this.form.ciudadOrigen = ''
      this.form.ciudadDestino = ''
      this.fpartida = ''
      this.fretorno = ''
    }
  },
  // Creo un método llamado 'items' y obtengo los datos con el método map() 
  computed: {
    items () {
    	console.log(datos);
      return datos.map((item) => {
        return item;
      })
    }
  }
}
</script>