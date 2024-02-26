console.log("Hola mundo de node")
//fs es el módulo filesystem, modulo para manipular archivos
const fs = require("fs")
//Escribe en el archivo del primer parámetro lo que diga el segundo.
fs.writeFileSync("hola.txt", "Hola cara de cola")

setTimeout(() => {
    console.log("xddddxdxdxdxdxdxddd")
}, 2500)
const arreglo = [1,6,234,76,2,97,22,435,5575,1233,56,1231]
//in te da el índice del arreglo, of te da el valor en el índice
for (let item of arreglo){
    setTimeout(()=> {
        console.log(item);
    }, item);   
}
const prueba ="jijijija";
console.log("soy veloz, desayuno perdedores")

const http = require("http")
const server = http.createServer((request, response) =>{
    if (request.url == "/"){
        
        response.setHeader('Content-Type', 'text/html')
        response.write(`<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mi primera página web</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sakura.css/css/sakura.css" type="text/css">
            <link rel="stylesheet" href="estilomin.css">
        </head>
        
        <body>
            <header>
                <h1>Mi primera página web</h1>
                <p>Juan Pablo Chávez Leal</p>
                <p>A01705408</p>
                <p>A01705408@tec.mx</p>
            </header>
        
            <table>
                <thead>
                    <tr><th>Comida</th><th>Minerales</th></tr>
                </thead>
                <tbody>
                    <tr><td>Manzana</td><td id="diamantes">Diamante</td></tr>
                </tbody>
                <tfoot>
                    <tr><td colspan="2">Tabla de objetos de Minecraft</td></tr>
                </tfoot>
                
            </table>
        
            <!--Diferencia entre main y body?? parece lo mismo-->
            <h1 class="red">Aficiones</h1>
            <main>
                <div class="bg">
                <p>
                    Me gusta bastante programar, y el aprender un lenguaje nuevo me está poniendo muy feliz, la verdad. solo <strong>NO</strong> inspeccione la página o de clic en origen, se arrepentira y se mareará 💀💀 
                </p>
                <p class="blue">También me encanta gastar el 30% de mi vida en TikTok  😍😍💀</p>
                <p>
                    Me gustan bastante los videojuegos, especialmente los shooters en primera persona, 
                    pero últimamente he jugado bastante el <strong>Baldur's Gate 3</strong> y debo decirle que es la
                    mayor obra de arte que pudo haber sido creada en toda la vida del universo y <strong>NUNCA</strong> 
                    existirá algo que se iguale a este hermoso título
                </p>
                <p>
                    ¿Ha escuchado de él?
                </p>
                <input type="radio" name="opcion">
                Sí
                <br>
                <input type = "radio" name ="opcion">
                No
                
                <br>
                <br>
                <p>
                    Al chile esta actividad me la ando pasando bien padre, no se cuanto tiempo llevo escribiendo, 
                    pero me gustó andar descubriendo estas formas de mostrar un mensaje</p>
                
                <p>Mi color preferido quizás sea el:
                <input type="color" name="Preferido" value="#8D5C68"></p> 
                <br>
                <br>
                <p>Como podrá ver, hice mucha investigación por cuenta propia</p>
                <img src="https://i.kym-cdn.com/entries/icons/facebook/000/047/024/jank_boteko.jpg" alt="Imagen de muestra" width="500" height="280">
        
                <h1>Mis canciones preferidas del momento probablemente serían:</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/lSD_L-xic9o?si=_7GMB5KbdCcz2PTT" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <br>
                
                <h1>Preguntas y respuestas</h1>
                <h2>¿Cuál es la diferencia entre Internet y la World Wide Web?</h2>
                La BBC establece al internet como el método por el que se accede a la WWW, esta última sería el conjunto de páginas que está soportada por una red gigantesca de dispositivos conectados entre sí, es decir, el internet.
                <h2>¿Cuáles son las partes de un URL?</h2>
                1.	Esquema o protocolo: Se presenta como el http o https al inicio de cada url, es la manera en la que se enviarán los datos, http no está cifrado, mientras que https sí lo está.<br>
                2.	Subdominio: Es la parte que determina que tipo de contenido debería mostrar tu página, si es la atención al cliente debe tener un inicio parecido como lo pordría ser “support”.<br>
                3.	Dominio de segundo nivel: Es la parte que representa tu empresa, son las palabras que deberías de utilizar para hacer una búsqueda en Google, por ejemplo: https://support.microsoft.com/es-es página de atención al cliente de Microsoft.<br>
                4.	Dominio de nivel superior: es la segunda parte del nombre de dominio y representan el tipo de organización que tienes, por ejemplo una comercial (.com) una organización (.org) o uno de índole gubernamental (.gob o .gov)<br>
                5.	Subdirectorio: Ayuda a los usuarios a saber en que parte de la página se encuentran, y es todo el contenido después del dominio de nivel superior.
                <h2>¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</h2>
                -	GET: Como los getters en la POO, GET nos ayuda a recibir información.<br>
                -	HEAD: Es muy parecido a GET, mas no regresa una respuesta, se suele utilizar para comprobar conexiones rotas, es de aquí que aparece el error 404 Not Found.<br>
                -	POST: Solicita que un servidor acepte datos incluidos en un mensaje.<br>
                -	PUT: Es el método que se utiliza para actualizar recursos.<br>
                -	PATCH: Se utiliza para modificar recursos.<br>
                -	DELETE: Borra un recurso en específico
                <h2>¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</h2>
                -	Se utiliza el método POST, ya que sí oculta los datos del formulario, cosa que no pasa con el método GET
                <h2>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</h2>
                -	Si mi razonamiento es correcto, debería de utilizar GET, así podemos enviar lo que no interesa con el clic y recibir la página a la que queríamos acceder.
                <h2>Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</h2>
                -	Cuando regresa 200 significa que se hizo una conexión correcta y que no hay ningún problema.
                <h2>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</h2>
                -	Sí, ya que el error 404 significa que la dirección es incorrecta, es decir que o el usuario ingreso de una manera incorrecta o que un archivo se movió o eliminó.
                <h2>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</h2>
                -	Sí, esto es debido a que el error 500 se basa en un error interno del servidor, es decir, que el usuario no tiene la culpa sino alguna configuración errónea del servidor que impidió la conexión.
                <h2>¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</h2>
                -	Que un atributo este depreciado significa que se dejó de dar mantenimiento a este atributo, que aunque podría funcionar en este momento, no es recomendable ya que en siguientes versiones podrían comportarse de manera al azar.<br>
                Algunos atributos desaprobados serían: Align, center, Font y Frameborder
                <h2>¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</h2>
                -	Se introducen nuevos elementos semánticos y de formulario, así como Soporte a multimedia mejorado, nuevas capacidades de programación y uso de APIs, entre otras cosas.
                <h2>¿Qué componentes de estructura y estilo tiene una tabla?</h2>
                -	Estructura: "table", "tr", "td", "th".<br>
                -	Estilo: border, cellpadding, cellspacing, width, height, bgcolor.
                <h2>¿Cuáles son los principales controles de una forma HTML5?</h2>
                -	Input, Select, TextArea, Button, label.
                <h2>¿Qué tanto soporte HTML5 tiene el navegador que utilizas? Puedes utilizar la siguiente página para descubrirlo: http://html5test.com/ (Al responder la pregunta recuerda poner el navegador que utilizas)</h2>
                -	Antes que nada, el link adjunto no daba una búsqueda, lo intenté tanto en mi navegador de preferencia (Opera) como en Microsoft Edge. Ante esto, utilicé el siguiente link: https://html5test.opensuse.org. Según esta página, Opera obtiene un puntaje de 536/571 puntos. Los campos más afectados fueron el de seguridad con una calificación de 26/32 y Scripting con un resultado de 29/32
                <h2>¿Cuál es el ciclo de vida de los sistemas de información?</h2>
                -	Nace al detectar la necesidad de crear u optimizar un sistema informático, en esta etapa se planifica y se estudian los requisitos.<br>
        -	Se desarrolla cuando se diseña o crea el sistema.<br>
        -	Se reproduce cuando se implementa, así como se prueba y se corrige fallas que aparezcan después de las pruebas.<br>
        -	Muere cuando el sistema no satisface las necesidades, ya sea por innovación tecnológica, o pasa a ser obsoleto.
                <h2>¿Cuál es el ciclo de desarrollo de sistemas de información?</h2>
                -	Identificación de necesidades y planificación, análisis de requerimientos, diseño del sistema, desarrollo e implementación, pruebas y validación, despliegue y mantenimiento, y por último evaluación y mejora continua. 
            
                <h2>Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS?</h2>
                    - !important es una herramienta muy buena, establece prioridades a los estilos, mas considero que podría llegar a dificultar el proceso de 
                    diseño, esto lo menciono porque quizás pueda confundir a las personas que intenten leer nuestro archivo CSS
                <h2>Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?</h2>
                - Primero, la legibilidad del texto es lo más importante al crear una página web, es por el texto que creamos la página (en la mayoría de veces)
                Del mismo modo, utilizar una imagen como fondo puede hacer que los tiempos de carga de la página pueda alargarse, así haciendo mucho menos placentera
                la experiencia del usuario.
                <h2>Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?</h2>
                - Considero que es completamente dependiente de lo que estemos haciendo, pt o puntos es la escala que utilizan los procesadores de texto como Word,
                convirtiendolo en una unidad útil, pero son dependientes de la resolución de tu pantalla. Lo mismo sucede con los px o pixeles, que aunque sean
                la unidad absoluta, cada pantalla cuenta con una cantidad diferente de pixeles, haciendo muy complicado unificar a todos los dispositivos.
                Personalmente, prefiero utilizar los porcentajes, soluciona nuestro problema con la perspectiva desde cada dispositivo.
                <h2>¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?</h2>
                - De primeras, el tamaño se reducirá, que en casos mucho más avanzados puede mejorar la portabilidad del archivo. Debemos de recordar que uno sube a un servidor estos archivos
                tanto los html como los CSS, esto significa que mientras hagamos archivos más ligeros, podremos aumentar la velocidad de transferecnia (servidor a navegador)
                y la velocidad de renderizado que realiza el navegador al cargar la página. Es por todo esto que el uso de archivos minimizados mejora el rendimiento de los sitios web.
            </main>
            <footer>
                Se utilizó Visual Studio Code, el link está
                <a href="https://code.visualstudio.com/download">aquí</a>
                <br>
                Referencia de la 
                <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fknowyourmeme.com%2Fmemes%2Fjank-boteko&psig=AOvVaw0btRe4JB_wNo5_-7fFPAi-&ust=1707872164417000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiM3eONp4QDFQAAAAAdAAAAABAE">imagen</a>
        
                <h2>Referencias de las respuestas</h2>
                <h3>
                BBC News Mundo. (2019, March 12). ¿Cuál es la diferencia entre internet y la web? (y por qué muchos las confunden). BBC News Mundo. https://www.bbc.com/mundo/noticias-47538812#:~:text=Internet%20es%20una%20inmensa%20red,para%20acceder%20a%20la%20web.<br>
                Guía básica: las 10 partes de una URL | Mailchimp. (n.d.). Mailchimp. https://mailchimp.com/es/resources/parts-of-a-url/<br>
                Métodos de petición HTTP - HTTP | MDN. (2023, July 24). MDN Web Docs. https://developer.mozilla.org/es/docs/Web/HTTP/Methods<br>
                Monterde, U. M. (n.d.). Desarrollo de Sistemas. https://programas.cuaed.unam.mx/repositorio/moodle/pluginfile.php/1150/mod_resource/content/1/contenido/index.html#:~:text=El%20desarrollo%20de%20un%20sistema,por%20crecimiento%20en%20la%20organizaci%C3%B3n.<br>
                Ciclo de vida de los sistemas de informacion. (2017, March 26). [Slide show]. SlideShare. https://es.slideshare.net/YaskellyYedra/ciclo-de-vida-de-los-sistemas-de-informacion-73671543<br>
                </h3>
            </footer>
            <!--Necesidad de footer y header? no parece hacer mucho-->
            <script src="p1.js"></script>
        </body>
        
        </div>
        
        </html>`)
        response.write(prueba);
        response.end()
    }
    else if (request.url == "/construir"){
        
    }
    else {
        
        response.statusCode = 404;


        response.write('<h1>404 PAGE NOT FOUND</h1>')
        response.end()
    }
    //console.log(request);
    console.log(request.url)
    response.end()
})
server.listen(2000)
