. envoltorio { margen :  80 px  0 ; }
. pulgar {
    ancho :  70 píxeles ;
    altura :  50 píxeles ;
    desbordamiento : oculto;
    posición : relativa;
}
. tabla  >  tcuerpo  >  tr  >  td {
     alineación vertical : medio;
}

. video_box {
    fondo :  rgba ( 0 ,  0 ,  0 ,  0,54 );
    ancho :  100 % ;
    superior :  0 ;
    izquierda :  0 ;
    altura :  100 % ;
    posición : fijo;
    índice z :  555 ;
    pantalla : ninguno;
}
. video_interior {
	posición : absoluta;
	superior :  0 ;
	izquierda :  0 ;
	derecha :  0 ;
	inferior :  0 ;
	margen : automático;
	ancho :  430 píxeles ;
	altura :  280 píxeles ;
	fondo :  #fff ; _
    relleno :  15 px ;

}
. cierre modal {
    posición : absoluta;
    superior :  0 ;
    índice z :  5 ;
    fondo :  # d64a4a ;
    relleno :  0 px  11 px ;
    color :  #fff ; _
    tamaño de fuente :  34 px ;
    altura de línea : normal;
    derecha :  -42 píxeles ;
    cursor : puntero;
}
. cuerpo_de_video {
	ancho :  400 píxeles ;
	altura :  250 píxeles ;
}
. casa {
    posición : absoluta;
    arriba :  25 px ;
    izquierda :  25 px ;
    ancho :  50 píxeles ;
}
 97 cambios: 97 adiciones y 0 eliminaciones97 
Backend/taller/datos.php
@@ -0,0 +1,97 @@
<?php

    incluir  'db/conexión.php' ;

    $ consulta = mysqli_query( $ conexion ," SELECT * FROM usuarios ");

?>
<!DOCTYPEhtml >
< html  lang =" es " >
< cabeza >
    < juego de caracteres meta  =" UTF-8 " >
    < meta  http-equiv =" X-UA-Compatible " content =" IE=edge " >
    < enlace  rel =" hoja de estilo " href =" css/style_datos.css " >
    < meta  name =" viewport " content =" ancho=ancho-del-dispositivo, escala-inicial=1.0 " >
    < enlace  rel =" hoja de estilo " href =" https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css " crossorigin =" anónimo " >
    < script  src =" https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js " > </ script >

    < título > Documento </ título >
</ cabeza >
< cuerpo >
    < a  href =" index.html#section-respuestas " >   
        < img  class =" home " src =" img/hogar.png " alt ="" >
    </ a >
        < clase div  =" contenedor " >
        < div  clase =" contenedor " >
            < div  clase =" filtro " >
            < div  clase =" fila " >
                < div  clase =" col-sm-4 " >
                < div  clase =" mostrar-fila " >
                    < seleccionar  clase =" formulario-control " >
                    < valor de opción  =" 5 " seleccionado =" seleccionado " > 5 </ opción >
                    < valor de opción  =" 10 " > 10 </ opción >
                    < valor de opción  =" 15 " > 15 </ opción >
                    < valor de opción  =" 20 " > 20 </ opción >
                    </ seleccionar >
                </div> _ _
                </div> _ _
                < div  clase =" col-sm-4 " > </ div >
                < div  clase =" col-sm-4 " >
                < div  class =" fila de búsqueda " >
                    < tipo de entrada  =" texto " nombre =" búsqueda " clase =" formulario-control " marcador de posición =" Ingrese su palabra clave " >
                </div> _ _
                </div> _ _
            </div> _ _
            </div> _ _
        < table  id =" music " class =" table table-responsive table-hover " >
            < cabeza >
            < tr   clase =" miCabeza " >
                < th > # </ th >
                < th > Nombre </ th >
                < th > Apellido </ th >
                < th > Cédula </ th >
            </tr> _ _
            </ cabeza >
            < cuerpo >

            <?php

            while ( $ datos = mysqli_fetch_array( $ consulta )) {
                $ id = $ datos [ 'id' ];
                $ nombre = $ datos [ 'nombre' ];
                $ apellido = $ datos [ 'apellido' ];
                $ cedula = $ datos [ 'cedula' ];

                eco '
                <tr data-url="FQS7i2z1CoA">
                    <td>' . identificación $ _ '</td>
                    <td>' . $ nombre . '</td>
                    <td>' . $ apellido . '</td>
                    <td>' . $ cédula . '</td>
                </tr>
                ' ;
            }

            ?>




            </ tcuerpo >
        </ mesa >
        < div  class =" controlador de centro de texto " >
            < ul  clase =" paginación " > </ ul >
        < clase ul  =" buscapersonas " >
        < li  > < a  href =" javascript:void(0) " class =" anterior " > Anterior </ a > </ li >
        < li > < a  href =" javascript:void(0) " class =" siguiente " > Siguiente </ a > </ li >
        </ ul >
        </div> _ _


        </div> _ _

        </div> _ _

        < script  src =" js/script.js " > </ script >
</ cuerpo >
</html> _ _
 15 cambios: 15 adiciones y 0 eliminaciones15 
Backend/taller/db/conexión.php
@@ -0,0 +1,15 @@
<?php

    $ anfitrión = 'localhost' ;
    $ usuario = 'raíz' ;
    $ contraseña = '' ;
    $ basedatos = 'mi_proyecto' ;

    $ conexion = new mysqli( $ host , $ usuario , $ contraseña , $ basedatos );

    if ( $ conexion -> connect_errno ) {
        echo " fallas en conexion ";
        salida();
    }

?>
  2 cambios: 1 adición y 1 eliminación2 
Backend/taller/index.html
@@ -50,7 +50,7 @@ <h2>Solución del taller</h2>
                < a  href =" edad_exacta.php " > 4. Calculadora exacta de edad </ a >
            </div> _ _
            < div  clase =" ind " >
                < a  href ="" > 5. Filtro de datos </ a >
                < a  href =" datos.php " > 5. Filtro de datos </ a >
            </div> _ _
        </div> _ _
        < div  clase =" ilustración " >
 162 cambios: 162 adiciones y 0 eliminaciones162 
Backend/taller/js/script.js
@@ -0,0 +1,162 @@
$ ( ventana ) . en ( 'cargar' ,  función ( ) {


	// Agregar imagen en miniatura de youtube
	$ ( '#music tbody tr' ) . addClass ( 'lista' ) ;
	$ ( '.lista' ) . cada ( función ( )  {
		var  youtube_video_id 	= 	$ ( esto ) . attr ( 'url de datos' ) ;
		si  ( youtube_video_id . longitud  ==  11 )  {
			 var  video_thumbnail  =  $ ( '<img src="https://i.ytimg.com/vi/' +  youtube_video_id  + '/hqdefault.jpg" class="img-responsive">' ) ;
			 $ ( esto ) . buscar ( '.pulgar' ) . agregar ( video_thumbnail ) ;
		}		
		var  jd 	= 	$ ( esto ) . índice ( ) + 1
		$ ( esto ) . encontrar ( 'td' ) . ecuación ( 0 ) . texto ( jd )
	} ) ;

	// seleccione no de li
	var  noOfLi 	= 	$ ( '.list' ) . longitud ;  // Número total de li
	var  showNo  	=   $ ( '.show-row select' ) . valor ( )
	$ ( '.mostrar selección de fila' ) . en ( 'cambio' ,  función ( e ) {
		showNo  	= 	$ ( esto ) . valor ( ) ;
		miQuitarClase ( ) ;		
	} ) ;




	//seleccionar funcion
	function  myRemoveClass ( )  {
		//Paginación		
		var  showNoOfLi 	= 	showNo ,   // Mostrar ahora de li
			mostrarPágina 	= 	Matemáticas . ceil ( noOfLi / showNo ) ,  // lista de paginación
			contador ,
			no  			= 	0 ,
			empezar 		= 	no ,
			end 			= 	mostrarNoOfLi ;

		$ ( '.paginación' ) . vacío ( )
		for ( contador  =  1 ;  contador  <=  mostrarPágina ;  contador ++ ) {
		 	$ ( '<li> <a href="javascript:void(0)" data-lt="' + contador + '"> ' + contador + '</a></li>' ) . appendTo ( '.paginación' ) ;  
		 	$ ( '.paginación li' ) . ecuación ( 0 ) . addClass ( 'activo' ) ;
		 }	
		$ ( '#music tbody tr' ) . removeClass ( 'elemento-activo' ) . ocultar ( )
		$ ( '#music tbody tr' ) . rebanada ( comienzo ,  final ) . mostrar ( ) . addClass ( 'elemento-activo' ) ;

		$ ( '.anterior' ) . prop ( 'deshabilitado' ,  verdadero ) . padre ( 'li' ) . addClass ( 'deshabilitado' ) ;
		$ ( '.siguiente' ) . prop ( 'deshabilitado' ,  falso ) . padre ( 'li' ) . removeClass ( 'deshabilitado' ) ;

		// clic en paginación
		función  myfunction ( controlador )  {
			 función  de retorno ( )  {
				if  ( controlador  ==  'siguientePaginación' )  {
					sin ++ ;
					$ ( '.paginación li' ) . removeClass ( 'activo' )
					$ ( '.paginación li' ) . equivalente ( no ) . addClass ( 'activo' ) ;
					inicio1  =  mostrarNoOfLi * no ;					
					end1  =  showNoOfLi * ( no + 1 ) ;
					$ ( '#music tbody tr' ) . removeClass ( 'elemento-activo' ) . ocultar ( ) ;
					$ ( '#music tbody tr' ) . segmento ( comienzo1 ,  fin1 ) . mostrar ( ) . addClass ( 'elemento-activo' ) ;
					$ ( '.anterior' ) . prop ( 'deshabilitado' ,  falso ) . padre ( 'li' ) . removeClass ( 'deshabilitado' ) ;
					if ( end1  >=  noOfLi ) {					
						$ ( '.siguiente' ) . prop ( 'deshabilitado' ,  verdadero ) . padre ( 'li' ) . addClass ( 'deshabilitado' ) ;		
					}
				}
				más  si ( controlador  ==  'prevPagination' )  {
					no -- ;
					$ ( '.paginación li' ) . removeClass ( 'activo' )
					$ ( '.paginación li' ) . equivalente ( no ) . addClass ( 'activo' ) ;
					inicio1  =  mostrarNoOfLi * no ;					
					end1  =  showNoOfLi * ( no + 1 ) ;
					$ ( '#music tbody tr' ) . removeClass ( 'elemento-activo' ) . ocultar ( ) ;
					$ ( '#music tbody tr' ) . segmento ( comienzo1 ,  fin1 ) . mostrar ( ) . addClass ( 'elemento-activo' ) ;
					$ ( '.siguiente' ) . prop ( 'deshabilitado' ,  falso ) . padre ( 'li' ) . removeClass ( 'deshabilitado' ) ;

					si ( no  ===  0 ) {					
						$ ( '.anterior' ) . prop ( 'deshabilitado' ,  verdadero ) . padre ( 'li' ) . addClass ( 'deshabilitado' ) ;		
					}
				}
				más  si ( controlador  ==  'puntos' )  {
					$ ( '.paginación li' ) . removeClass ( 'activo' ) ;
					var  esteIndice  =  $ ( esto ) . addClass ( 'activo' ) . índice ( ) ;
					no  =  esteÍndice ;
					inicio1  =  mostrarNoOfLi * no ;					
					end1  =  showNoOfLi * ( no + 1 ) ;
					$ ( '#music tbody tr' ) . removeClass ( 'elemento-activo' ) . ocultar ( ) ;
					$ ( '#music tbody tr' ) . segmento ( comienzo1 ,  fin1 ) . mostrar ( ) . addClass ( 'elemento-activo' ) ;

					si ( no  >  0 ) {
						$ ( '.anterior' ) . prop ( 'deshabilitado' ,  falso ) . padre ( 'li' ) . removeClass ( 'deshabilitado' ) ;
					} más {
						$ ( '.anterior' ) . prop ( 'deshabilitado' ,  verdadero ) . padre ( 'li' ) . addClass ( 'deshabilitado' ) ;
					}					
					if ( end1  >=  noOfLi ) {	

						$ ( '.siguiente' ) . prop ( 'deshabilitado' ,  verdadero ) . padre ( 'li' ) . addClass ( 'deshabilitado' ) ;		
					} más {
						$ ( '.siguiente' ) . prop ( 'deshabilitado' ,  falso ) . padre ( 'li' ) . removeClass ( 'deshabilitado' ) ;
					}
				}
			}
		}

		$ ( '.envoltorio' ) . on ( 'click' , '.next' ,  myfunction ( 'nextPagination' ) ) ;
		$ ( '.envoltorio' ) . on ( 'click' , '.prev' ,  myfunction ( 'prevPagination' ) ) ;
		$ ( '.envoltorio' ) . on ( 'clic' , '.pagination li' ,  myfunction ( 'dots' ) ) ;
	}



	miQuitarClase ( )





	// cuadro de búsqueda en vivo
	$ ( '.entrada de fila de búsqueda' ) . en ( 'teclado' ,  función ( )  {
		 valor  var =  $ ( esto ) . valor ( ) ;
		var  patt  =  new  RegExp ( valor ,  "i" ) ;
		consola _ registro ( patt )
		$ ( '#música' ) . encontrar ( '.elemento activo' ) . cada ( función ( )  {
			if  ( ! ( $ ( este ) . buscar ( 'td' ) . texto ( ) . buscar ( patt )  >=  0 ) )  {
				$ ( esto ) . no ( '.miCabeza' ) . ocultar ( ) ;
			}
			if  ( ( $ ( esto ) . buscar ( 'td' ) . texto ( ) . buscar ( patt )  >=  0 ) )  {
				$ ( esto ) . mostrar ( ) ;
			}

		} ) ;
	} ) ;



	// reproduce el video

	$ ( '.envoltorio' ) . en ( 'clic' , '.playBtn' ,  función ( ) {
		var  videoId  	= 	$ ( esto ) . padres ( 'tr' ) . attr ( 'URL de datos' )
		var  videoWidth  =  $ ( '.video_body' ) . ancho ( ) ,
			videoHeight  =  $ ( '.video_body' ) . altura ( ) ,
			marco flotante  =  $ ( '<ancho del marco flotante="'
	                +  ancho de video
	                +  '" altura="'
	                +  videoAltura
	                +  '" src="https://www.youtube.com/embed/'
	                +  identificación de video
	                +  '" frameborder="0" allowfullscreen></iframe>' ) ;
		$ ( '.video_cuerpo' ) . html ( iframe ) ;
		$ ( '.video_box' ) . desvanecerse ( 500 )
		$ ( 'cuerpo' ) . addClass ( 'modal-open' ) ;
	} ) ;

	$ ( '.modal-close' ) . haga clic en ( función ( ) {
		$ ( '.video_box' ) . desaparecer ( 500 )
		$ ( 'cuerpo' ) . removeClass ( 'modal-open' ) ;
	} )


} )

})
