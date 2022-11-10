# backend-modulo2  

LINK DEL PROGRAMA DESDE HEROKU: https://bedushopbackend.herokuapp.com/  

MODELADO Y ARQUITECTURA DEL BACKEND  

OBJETIVOS GENERALES:  

Se necesita un programa para la administración de productos en una tienda por parte de los vendedores y que permita que los clientes ordenen sus productos y puedan hacer reviews de los mismos.
Es necesario que se registren en el sistema tanto los vendedores como los compradores para poder administrar (vendedores), comprar y hacer reviews (compradores) según corresponda.
TABLERO DE TRELLO:
 ![image](https://user-images.githubusercontent.com/88068238/194774442-a5fa61fc-dcd0-44e9-9426-f36c0c68b0e5.png)

INVESTIGACIÓN DE LAS HERRAMIENTAS:  

•	PostgreSQL  

o	¿Qué es? PostgreSQL es un gestor de bases de datos relacional y orientado a objetos. Su licencia y desarrollo es de código abierto, siendo mantenida por una comunidad de desarrolladores, colaboradores y organizaciones comerciales de forma libre y desinteresadamente.  

o	¿Para qué sirve? Para gestionar bases de datos de muy alto nivel. Las múltiples funcionalidades de este sistema de gestión de bases de datos relacionales y objetos permiten a los desarrolladores:  

    1.	testear nuevas aplicaciones para sus datos almacenados sin modificar el código fuente;
    2.	editar tablas y añadir nuevos tipos de datos;
    3.	desarrollar entornos open source;
    4.	proteger la integridad de sus datos con total seguridad;
    5.	controlar los accesos de sus competidores.  

•	JavaScript  

o	¿Qué es? JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web. Es la tercera capa del pastel de las tecnologías web estándar, dos de las cuales (HTML y CSS) hemos cubierto con mucho más detalle en otras partes del Área de aprendizaje.  

o	¿Para qué sirve? Para crear contenido de actualización dinámica, controlar multimedia, animar imágenes y muchas funciones más.  

•	Node.js  

o	¿Qué es? Node.js es un entorno de tiempo de ejecución de JavaScript, este entorno de tiempo es open source, es decir, de código abierto, multiplataforma y que se ejecuta del lado del servidor.  

o	¿Para qué sirve? Node.js sirve para crear sitios web dinámicos muy eficientes, escritos con el lenguaje de programación JavaScript. Normalmente, los desarrolladores se decantan por este entorno de ejecución cuando buscan que los procesos se ejecuten de forma ágil y sin ningún tipo de bloqueo cuando las conexiones se multiplican.  

•	Npm  

o	¿Qué es? es un gestor de paquetes desarrollado en su totalidad bajo el lenguaje JavaScript por Isaac Schlueter.   

o	¿Para qué sirve? Para obtener cualquier librería con tan solo una sencilla línea de código, lo cual nos permitirá agregar dependencias de forma simple, distribuir paquetes y administrar eficazmente tanto los módulos como el proyecto a desarrollar en general.  

•	Sequelize  

o	¿Qué es? Sequelize es un ORM (Object-Relational mapping)  

o	¿Para qué sirve? Para que los usuarios puedan llamar a funciones javascript e interactuar con SQL DB sin escribir consultas reales. Es bastante útil para acelerar el tiempo de desarrollo.  

•	Express.js  

o	¿Qué es? Express es el framework web más popular de Node, y es la librería subyacente para un gran número de otros frameworks web de Node populares. Express es un framework web transigente, escrito en JavaScript y alojado dentro del entorno de ejecución NodeJS.   

o	¿Para qué sirve? Para tener las siguientes funciones:  

    	Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).  

    	Integración con motores de renderización de "vistas" para generar respuestas mediante la introducción de datos en plantillas.  

    	Establecer ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de las plantillas que se utilizan para renderizar la respuesta.  

    	Añadir procesamiento de peticiones "middleware" adicional en cualquier punto dentro de la tubería de manejo de la petición.  

•	Github  

o	¿Qué es? Github es un repositorio online gratuito, red social pensada para desarrolladores  

o	¿Para qué sirve? Permite gestionar proyectos y controlar versiones de código.  

•	Heroku  

o	¿Qué es? Heroku es una solución de Plataforma como Servicio (PaaS) basada en la nube para que el cliente solo se preocupe de desarrollar su aplicación mientras Heroku se encarga de la infraestructura que hay detrás.  

o	¿Para qué sirve? Permite manejar los servidores (en la nube) y sus configuraciones, escalamiento y la administración.  

 ![image](https://user-images.githubusercontent.com/88068238/194774452-adb371d0-a533-402e-a033-c3a00a545d78.png)



HISTORIAS DE USUARIO:

![Captura de pantalla (386)](https://user-images.githubusercontent.com/88068238/194774579-75ef5a3a-7910-4877-90e1-01812aad2057.png)

La historia de usuario 1 es importante porque un vendedor necesita saber que tiene en su almacén para saber si puede venderlo o no.
La historia de usuario 2 es importante porque un cliente para poder comprar necesita saber que productos hay en existencia.

![Captura de pantalla (387)](https://user-images.githubusercontent.com/88068238/194774594-8011db34-4402-49b4-9fe6-54922818fbbe.png)


La historia 3 es importante porque agiliza las compras del cliente.
La historia 4 es importante porque el vendedor necesita poder modificar su inventario en cada venta o compra a los proveedores que haga.


![Captura de pantalla (388)](https://user-images.githubusercontent.com/88068238/194774602-4bb8dbc3-8563-4016-a94e-1410c4516a42.png)


En la historia de usuario 5 es importante la función de reviews porque el vendedor puede aprender de que productos están funcionando (en cuestión de ventas), cuáles no y los motivos de esto. Ejemplo: “Las escobas que venden son de mala calidad, se rompen rápido” con esto el vendedor puede decidir si comprarle a un proveedor nuevo para mejorar la calidad.
En la historia de usuario 6 es importante que el cliente pueda ver los detalles de sus ordenes por si es necesario alguna aclaración por si no recibiese el producto que ordenó u otros detalles de ese tipo.


MODELOS DEL PROYECTO:  

Los modelos que identificamos para el proyecto son:  

CAMPOS    ATRIBUTOS  

users -> nombre, apellidopaterno, apellidomaterno, email, password, rol  

products -> nombreproducto, precio, descripcion, categoría, stock, status  

orders -> status, date, montototal  

orders_details -> precio_unitario, cantidad  

reviews -> calificacion, titulo, descripcion, date  



MODELO RELACIONAL:
 


![WhatsApp Image 2022-10-09 at 1 19 27 AM](https://user-images.githubusercontent.com/88068238/194774823-ffb466f5-6cc5-40d7-862a-ce18d94c9dd8.jpeg)


REFERENCIAS DE LA INVESTIGACIÓN:  

	https://hostingpedia.net/postgresql.html  

	https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction  

	https://openwebinars.net/blog/que-es-node-package-manager/  

	https://medium.com/@khriztianmoreno/sequelize-101-5810bfa1332f  

	https://www.arsys.es/blog/postgresql-servidores#:~:text=PostgreSQL%20es%20un%20sistema%20para,ya%20sea%20personal%20o%20comercial.  

	https://www.ovhcloud.com/es/lp/postgresql-definition/  

	https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript  

	https://www.lucushost.com/blog/que-es-node-js/#:~:text=entorno%2C%20%C2%BFverdad%3F-,Node.,cuando%20las%20conexiones%20se%20multiplican.  

	https://www.webempresa.com/hosting/que-es-github.html

