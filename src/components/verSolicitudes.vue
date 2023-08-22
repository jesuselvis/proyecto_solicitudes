<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table flat bordered :rows="listaRegistros" :columns="columns" row-key="id" >

      </q-table>
    </div>
  </q-page>
</template>

<script>


import axios from 'axios'
import { ref } from 'vue'


export default {

  setup() {
    const listaRegistros= ref([]);
    const columns = ref([]);
    const rows = ref([]);

    return {
      columns,
      rows,
      listaRegistros,
      columns: [
        { name: 'id', align: 'center', label: 'ID', field: 'id', sortable: true },
        { name: 'nro_documento', align: 'center', label: 'DNI', field: 'nro_documento', sortable: true },
        { name: 'paterno', align: 'center', label: 'Paterno', field: 'paterno', sortable: true },
        { name: 'materno', align: 'center', label: 'Materno', field: 'materno', sortable: true },
        { name: 'nombres', align: 'center', label: 'Nombres', field: 'nombres', sortable: true },
        { name: 'fecha', align: 'center', label: 'Fecha', field: 'fecha', sortable: true },
        { name: 'solicitudes_id', align: 'center', label: 'Solicitudes_id', field: 'solicitud_id', sortable: true },
        { name: 'solicitantes_id', align: 'center', label: 'Solicitantes_id', field: 'solicitante_id', sortable: true }

      ],

    }
  },
  mounted() {
    this.getObtenerDatos();
  },
  methods: {
    async getObtenerDatos() {
      try {
        const respuesta = await axios.get('http://localhost/dashboard/api/'); // Cambia la URL según tu configuración
        this.listaRegistros = respuesta.data.estudiantes;
        console.log(respuesta.data.estudiantes);
      }
      catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    editarFila(fila) {
      // Lógica para editar la fila (puedes redireccionar a una página de edición)
      console.log('Editar fila:', fila);
    },
    eliminarFila(fila) {
      // Lógica para eliminar la fila (puede ser mediante una solicitud DELETE a la API)
      console.log('Eliminar fila:', fila);
    },
    agregarNuevo() {
      // Lógica para agregar una nueva fila (puede ser mediante una redirección o diálogo)
      console.log('Agregar nuevo');
    },


  }
}
</script>
