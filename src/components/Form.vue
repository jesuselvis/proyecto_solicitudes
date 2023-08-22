<template>
  <q-page padding>
    <h3>
    <!-- <pre>{{nro_documento}}-{{paterno}}-{{materno}}-{{nombres}}- {{fecha}}-{{modelSolicitud.id}}-{{modelTipoSolicitante.id}}</pre> -->
  </h3>
    <h4>Agregar Solicitud</h4>
    <q-form class="row q-col-gutter-md" @submit.prevent="procesarFormualario">

        <div class="col-12 col-sm-6 col-md-4">
            <q-input
              label="DNI"
              v-model="nro_documento"
              name="nro_documento"

            />
        </div>

        <div class="col-12 col-sm-6 col-md-4" >
            <q-input
              label="Apellido Paterno"
              v-model="paterno"
              name="paterno"
            />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
            <q-input
              label="Apellido Materno"
              v-model="materno"
              name="materno"
            />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
            <q-input
              label="Nombres"
              v-model="nombres"
              name="nombres"
            />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
            <q-input
              label="Fecha"
              type="Date"
              v-model="fecha"
              name="fecha"
            />
        </div>
        <div class="col-12 col-sm-6 col-md-4">
              <q-select
              label="Tipo de Solicitud"
              outlined
              v-model="modelSolicitud"
              :loading="getTipoSolicitud"
              :options="listaTipoDoc.tipos_solicitudes"
              :dense="dense"
              :options-dense="denseOpts"
              option-value="id"
              name="solicitud_id"
              option-label="denominacion">
              <template v-slot:prepend>
                <q-icon name="event" />
              </template>
              </q-select>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
              <q-select
              label="Tipo de solicitante"
              outlined
              v-model="modelTipoSolicitante"
              :loading="getTipoSolicitud"
              :options="listaTipoDoc.tipos_solicitante"
              :dense="dense"
              :options-dense="denseOpts"
              name="solicitante_id"
              option-label="denominacion"
              option-value="id"
              >
              <template v-slot:prepend>
                <q-icon name="event" />
              </template>
              </q-select>
        </div>


        <div class="col-12">
            <q-btn
                label="Enviar"
                color="secondary"
                type="submit"
                @click="enviarDatos"
            />

            <q-btn @click="reset"
                label="Reset"
                color="primary"
                outline
                class="q-ml-sm"
                :ripple="false"

            />
          </div>
  </q-form>


  </q-page>

</template>


<script>
import axios from 'axios'
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default {

  setup () {
    const $q = useQuasar()


    const modelSolicitud =ref(null)
    const modelTipoSolicitante= ref(null)
    const listaTipoDoc=ref([])

    const nro_documento = ref(null)
    const paterno = ref(null)
    const materno = ref(null)
    const nombres = ref(null)
    const fecha = ref(null)
    const solicitudes_id = ref(null)
    const solicitante_id = ref(null)




    const procesarFormualario = () =>{
        if(nro_documento.value===null){
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Falta ingresar DNI'
          })
        }else{
          $q.notify({
            color: 'green-5',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'enviado'
          })
          reset()
        }
    }

    const reset = () =>{
        nro_documento.value = null
        paterno.value = null
        materno.value = null
        nombres.value = null
        fecha.value = null
        solicitudes_id.value = ""
        solicitante_id.value =""

    }


    return {
      modelSolicitud,
      modelTipoSolicitante,
      listaTipoDoc,
      nro_documento,
      paterno,
      materno,
      nombres,
      fecha,
    
      procesarFormualario,
      reset,


      dense: ref(false),
      denseOpts: ref(false)
    }

  },
  mounted() {
    this.getTipoSolicitud()

  },

  methods:{


    async getTipoSolicitud() {
      try {
        const respuesta = await axios.get('http://localhost/dashboard/api/'); // Cambia la URL según tu configuración
        this.listaTipoDoc = respuesta.data;
        console.log(respuesta.data)


      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },

    async enviarDatos(){
      const data ={
        nro_documento:this.nro_documento,
        paterno:this.paterno,
        materno:this.materno,
        nombres:this.nombres,
        fecha:this.fecha,
        solicitudes_id: this.modelSolicitud.id,
        solicitante_id: this.modelTipoSolicitante.id

      }
      console.log(data)

      try{
        const response = await axios.post('http://localhost/dashboard/api/', data);
        console.log('Datos guardados en la base de datos:', response.data);
      }catch(error){
        console.log('Error guardar datos:', error);
      }

    },

    // async postTipoSolicitud(){
    //      const data = await axios.post('http://localhost/dashboard/api/', data)
    //     .then(response => {
    //       console.log(response.data);
    //       // Manejar la respuesta del servidor aquí
    //     })
    //   }

  },

  }

</script>

