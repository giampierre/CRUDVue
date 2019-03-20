<template>
  <div>
    <div class="card">
        <h3>{{title}}</h3>
         <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
    </div>
    <br>
    <div class="card">
        <div class="container">
            <h3>{{title}}</h3>
              <table class="table table-stripped table-hover">
                <tr>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                </tr>
                <tr v-for="articulo in articulos">
                    <td>{{articulo.nombre}}</td>
                    <td>{{articulo.modelo}}</td>
                </tr>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'articulos-chart',

        data: function () {

            this.chartSettings = {
                dimension: 'nombre',
                metrics: 'cantidad'
            }

            return {

                    articulos: [],

                    title: 'Chart-Prueba',

                    chartData: {
                    columns: ['nombre', 'cantidad'],
                    rows: [
                        {'nombre': 'laptop',  'cantidad': 2 },
                        {'nombre': 'Impresoras', 'cantidad': 4 },
                        {'nombre': 'Tv', 'cantidad': 5 },
                    ]
                    },
                
            };
        },
        mounted() {  

            var app = this; 
            this.cargarArticulos();    
        },
        methods: {

             cargarArticulos(){
                var app = this;
                axios.get('/getArticulos/')
                .then(function (resp) {
                    app.articulos = resp.data;
                    console.log("Se cargaron los articulos");
        
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Error al cargar los articulos");
                });
            },

              nuevoArticulo(){
                $('#modal-nuevo-articulo').modal('show'); 
            },

              registrarArticulo() {
                event.preventDefault();
                var app = this;
                var newArticulo = app.articuloNuevo;
                console.log(newArticulo);
                axios.post('/saveArticulo', newArticulo)
                    .then(function (resp) {
                        console.log(resp);
                        console.log("articulo nuevo registrado satisfactoriamente");
                         $('#modal-nuevo-articulo').modal('hide'); 
                        app.articuloNuevo = {};

                    })
                    .catch(function (resp) {
                        //console.log(resp);
                        alert("No se pudo registrar el nuevo articulo"+resp);
                        $('#modal-nuevo-articulo').modal('hide'); 
                    });

                     this.cargarArticulos();   
            },
            
            
        },
        computed: {
            
        }
    }
</script>
