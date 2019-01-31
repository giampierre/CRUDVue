<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Artículos <i class="fa fa-tasks"></i>
                    <button @click="registrarNuevoArticulo()" class="btn btn-primary btn-xs pull-right"><i class="fa fa-plus"></i></button>
                    </div>

                    <div class="card-body table-responsive">
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Código</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Marca</th>
                                    <th scope="col">Modelo</th>
                                </tr>
                            </thead>
                            <tbody v-for="(articulo, index) in articulos">
                                <tr>
                                    <th scope="row">{{index+1}}</th>
                                    <td>{{articulo.codigo}}</td>
                                    <td>{{articulo.nombre}}</td>
                                    <td>{{articulo.marca}}</td>
                                    <td>{{articulo.modelo}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
                    <!--Inicio Modal de Registro Nuevo Participante-->
            <div class="modal fade" id="modal-nuevo-articulo">
                <div class="modal-dialog modal-md">
                 <div class="modal-content modal-md center">
                    <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <form v-on:submit="nuevoArticulo()" method="post" class="form-horizontal">
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <div>
                                        <label for="codigo">Código</label>
                                        <input type="text" v-model="articuloNuevo.codigo" class="form-control" name="codigo" id="" placeholder="Ingresar código">
                                    </div>
                                    <div>
                                        <label for="nombre">Nombre</label>
                                        <input type="text" v-model="articuloNuevo.nombre" class="form-control" name="nombre" id="" placeholder="Ingresar nombre">
                                    </div>
                                    <div>
                                        <label for="marca">Marca</label>
                                        <input type="text" v-model="articuloNuevo.marca" class="form-control" name="marca" id="" placeholder="Ingresar marca">
                                    </div>
                                    <div>
                                        <label for="modelo">Modelo</label>
                                        <input type="text" v-model="articuloNuevo.modelo" class="form-control" name="modelo" id="" placeholder="Ingresar modelo">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-btn btn-secondary pull-left" data-dismiss="modal">Cerrar</button>
                            <button type="submit" class="btn btn-primary pull-right btn-desa">Registrar</button>
                        </div>
                    </form>  
                </div>
                <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
          </div>
        <!-- /.modal -->
    </div>
</template>

<script>
    export default {
        name: 'articulos-lista',

        data: function () {
            return {

                 articulos: [],
                 articuloNuevo:{},
                
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

              registrarNuevoArticulo(){
                $('#modal-nuevo-articulo').modal('show'); 
            },

              nuevoArticulo() {
                event.preventDefault();
                var app = this;
                var newArticulo = app.articuloNuevo;
                console.log(newArticulo);
                axios.post('/registrarArticulo', newArticulo)
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
            },
            
            
        },
        computed: {
            
        }
    }
</script>

