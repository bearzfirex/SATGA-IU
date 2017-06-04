$(document).ready( function () {
    $('#list').DataTable( {
      pageLength: 5,
      language: {
        processing:     "Procesando...",
        lengthMenu:     "Mostrar _MENU_ registros",
        zeroRecords:    "No se encontraron resultados",
        emptyTable:     "No hay ningún dato disponible",
        info:           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        infoEmpty:      "Mostrando registros del 0 al 0 de un total de 0 registros",
        infoFiltered:   "(filtrado de un total de _MAX_ registros)",
        infoPostFix:    "",
        search:         "Buscar:",
        url:            "",
        infothousands:  ",",
        loadingRecords: "Cargando...",
        paginate: {
          first:    "Primero",
          last:     "Último",
          next:     "Siguiente",
          previous: "Anterior"
        },
        aria: {
          sortAscending:  ": Activar para ordenar la columna de manera ascendente",
          sortDescending: ": Activar para ordenar la columna de manera descendente"
        }
    },
      dom: 'Bfrtip',
        buttons: [
          'print'
        ]
    } );
} );