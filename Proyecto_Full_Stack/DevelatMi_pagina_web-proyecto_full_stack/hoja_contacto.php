<?php

    include("contacto.php")
    
?> 

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DeveLAT Delveloper-LatinoAmerica</title>
    <link rel="shortcut icon" href="img_bienvenidad/logouno.png"/>
    <link rel="stylesheet" href="css/style.css"/>
</head>

<body>
    <header>
        <div class="container_header">
            <div class="logo">
                <img src="img_bienvenidad/imagen sin fondo.png" alt="logo de DeveLAT"/>
            </div>
        
        <div class="menu">
            <nav>
                <ul>
                    <li><a href="Index.html">INICIO</a></li>
                    <li><a href="Servicio.html">SERVICIO</a></li>
                    <li><a href="Sobre_mi.html">SOBRE MI</a></li>
                    <li><a href="hoja_Contacto.php">CONTACTO</a></li>
                </ul> 
            </nav>
        </div>
    </header>

    <!-- <img src="recursos.img/Frame 7 (2).png" width="1200px"> -->
    <section>
        <div class="contenedor_fondo">  
            <div class="cuadrado_uno">
            </div>
            <div class="cuadrado_dos">
            </div>
            <div class="cuadrado_tres">
            </div>
            <div class="cuadrado_cuatro">
            </div>
        </div>
    </section>





<section class="pagina_contacto">


<div class="texto_contacto_develat">
            <p>Hola </p>
            <br>
            <p>Cuéntanos tu idea y comencemos tu proyecto
            déjanos tus datos y te contactaremos para hablar de como hacer crecer tu marca</p>
            <br>
            <h3>Contactanos</h3>
            <p>Bogota Colombia CP:110931</p>
            <div class="enlace_contacto">
            <a href="http://api.whatsapp.com/send?phone=3013891339" target="_blank">
                <img src="img_contacto/whatsapp 1.png" alt="logo whatsapp">
                <p>+57 301 389 1339</p>
                </a>
            </div>
            <div class="enlace_contacto">
            <a href="tel:+573013891339" target="_blank">
                <img src="img_contacto/phone-volume-solid 1.png" alt="telefono">
                <p>+57 350 572 9669</p>
            </a>
            </div>
            <div class="enlace_contacto">
            <a href="mailto:develat2023@gmail.com" target="_blank">
                <img src="img_footer/correo_envelope-solid 5.png" alt="simbolo sobre de carta">
                <p>DeveloLAT@latinoamerica.com</p>
            </a>
            </div>
        </div>


    <div class="form_container">
        <form method="post" autocomplete="off">
        
            <div class="form-grup">

                <div class="form-content">
                    <label for="name">Nombre</label>
                    <input type ="text" id="name" name="name">
                </div>
            </div>
                
            <div class="form-group">

            <div class="form-content">
                    <label for="email">Correo</label>
                    <input type="email" id="email" name="email">
                </div>
           
                <div class="form-content">
                    <label for="phone">Telefono</label>
                    <input type="tel" id="phone" name="phone">
                </div>
            </div>

            <label for="message">Mensaje</label>
            <textarea name="message" id="message" cols="50"  rows="10"></textarea>

            <input class="btn" type="submit" name="contact" value="Enviar Mensaje">
        </form>
    </div>
    


    <div class="imagen_android">
        <img src="img_contacto/contacto1.png" alt="logo de andorid">
    </div>



</section>



 
        <footer>
        <div class="footer">
            <div class="container_footer">
                <div class="imagen_copyright">
                    <img src="img_footer/Group 1.png">
                </div>

                <div class="redes_sociales">
                    <p>Encuentranos en</p>
                    <div class="logo_redes">
                    <div class="whatssap">
                        <a href="http://api.whatsapp.com/send?phone=3013891339" target="_blank">
                        <img src="img_footer/whatsapp (1).svg" alt="logo un telefono encerrado en un circulo">
                        </a>
                    </div>
                    <div class="gmail">
                        <a href="mailto:develat2023@gmail.com" target="_blank">
                        <img src="img_footer/correo_envelope-solid 5.png" alt="logo de un sobre">
                        </a>
                    </div>
                    <div class="youtube">
                        <a href="https://www.youtube.com/" target="_blank">
                        <img src="img_footer/youtube (1).svg" alt="logo youtube">
                        </a>
                    </div>
                    <div class="github">
                        <a href="https://github.com/Jhonattan02/DevelatMi_pagina_web-proyecto_full_stack.git" target="_blank">
                        <img src="img_footer/github (1).svg" alt="logo sombra de un gato sentado ">
                        </a>
                    </div>
                    </div>
                </div>

                <div class="informacion_contacto">
                    <div class="Contactar">
                            <p class="contacta">Contactanos</p>
                        <div class="contacto_whatssap">
                            <a href="http://api.whatsapp.com/send?phone=3013891339" target="_blank">
                            <img src="img_footer/whatssapVector.png" alt="logo whatssap">
                            <p> + 57 301 389 1339</p>
                            </a>
                        </div> 
                        <div class="contacto_llamada">
                            <a href="tel:+573013891339" target="_blank">
                            <img src="img_footer/phone-volume-solid 5.png" alt="logo telefono">
                            <p> + 57 350 572 9669</p>
                            </a>
                        </div> 
                        <div class="contacto_correo">
                            <a href="mailto:develat2023@gmail.com" target="_blank">
                            <img src="img_footer/correo_envelope-solid 5.png" alt="icono correo">
                            <p>DeveloLAT@latinoamerica.com</p>
                            </a>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </footer>
   
</body>

</html> 