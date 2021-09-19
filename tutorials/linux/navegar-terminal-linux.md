---
title: 'Navegar por la terminal de Linux'
date: '2021-09-18'
description: 'En este post veremos de forma sencilla como movernos dentro de nuestra terminal linux, al desplazarnos por la lina de comandos estaremos usando comandos sumamente importantes y comunes como lo son "pwd", "cd" y "ls".'
keywords: 'gregory vicent, gregoryvicent.com, terminal linux, como usar la terminal de linux, tutorial terminal de linux, comando cd, comando pwd, comando ls, navegar por la terminal de linux, moverse por la linea de comandos, como moverse entre archivos en linux, como desplazarse en la linea de comandos, como desplazarse en la terminal'
---

Hola mi queridisimo ser del otro lado de la pantalla, en el post del día de hoy aprenderemos como navegar por la terminal de Linux de forma básica.

<br />

Los comandos que les mostrare son los más usados dentro de la linea de comandos, por esto no se pongan nerviosos ya que el proceso es muy sencillo y con algo de uso de la linea de comandos terminaran sintiéndose muy cómodos al desplazarse por ella.

<br />

Lo primero que hay que entender es que el sistema de archivos de Linux tiene su origen en la raíz representada con **“/”**.

<br />

De ahí esta se ramifica en múltiples directorios y ficheros que componen todo nuestro sistema de archivos.

<br />

![Sistema de archivos linux](/img/sistema-archivos-linux.png)

<br />

Con esto en mente abriremos nuestra terminal usando las teclas **“Ctrl” + “Alt” + “t”** o directamente buscando en nuestra distribución Linux como **“terminal”**.

<br />

![Terminal Linux](/img/moverse-terminal1.png)

<br />

## Comando "pwd"

<br />

Una vez dentro de este pequeño cuadrito negro lo primero que haremos sera identificar en donde estamos en este instante con el comando **“pwd”**.

<br />

![comando pwd](/img/moverse-terminal2.5.png)

<br />

Esta dirección que aparece en consola es el lugar exacto en donde nos encontramos en estos instantes dentro de nuestro sistema de archivos. Es posible que dependiendo de la forma en la que abriste tu terminal la dirección que se te muestre sea distinta así que vamos a posicionarnos todos en un mismo lugar.

<br />

## Comando "cd"

<br />

Para desplazarnos por el sistema de archivos con nuestra linea de comandos Linux usamos el comando **“cd”**.

<br />


![Comando cd](/img/moverse-terminal3.png)

<br />

Al colocar unicamente **“cd”** y ejecutar el comando esto nos llevara directamente al inicio de nuestro Home representado por el signo **“~”**.

<br />

## Comando "ls"

<br />

Ahora podemos ver todos los archivos que están en nuestro Home usando el comando **“ls”**.

<br />

![Comando ls](/img/moverse-terminal4.png)


<br />

Este comando lista los archivos y directorios que estén al nivel que le indiquemos, si no le indicamos nada más solo mostrara la lista de los ficheros y directorios que estén al mismo nivel en el que estamos.

<br />

Sabiendo donde estamos al usar **“pwd”** y conociendo los posibles archivos a los que podemos movernos es hora de viajar a uno de ellos usando nuevamente el comando **“cd”**.

<br />

Esta vez le indicaremos a donde queremos ir de esta forma **“cd Documents”**.

<br />

![Moverse en la Terminal Linux](/img/moverse-terminal5.png)

<br />

Toma muy en cuenta lo siguiente, yo estoy indicando que quiero moverme dentro del directorio **“Documents”** porque es así exactamente como se llama el directorio en mi pc, si se da el caso que tu distribución Linux este configurada en español (u otro idioma) deberás usar el nombre que corresponda al directorio al que quieres referirte tal cual como aparece en tu sistema de archivos, nuevamente esto lo puedes ver usando el comando “ls”.

<br />

Sabremos que entramos correctamente al directorio elegido por la ausencia de mensajes de advertencia y por que habrá cambiado la dirección que vemos en la consola.

<br />

## Retroceder un nivel usando "cd .."

<br />

Ahora si se da el caso en el que quieras retroceder un directorio, es decir, volver al nivel anterior es tan simple como solo aplicar **“cd ..”**.

<br />

![Comando cd ..](/img/moverse-terminal6.png)

<br />

Cabe resaltar que no es necesario moverse de un directorio en un directorio hasta donde quieras ir aplicando múltiples **“cd”**.

<br />

Si sabes la ruta exacta a la que quieres ir solo tendrás que escribirla tomando en cuanta el directorio en el que estas.

<br />

Por ejemplo, en lugar de moverme así:

<br />

<code>
cd Documents
</code>
<code>
cd pdf
</code>
<code>
cd 'ti books'
</code>

<br />
<br/>

Podría simplificar el proceso solo escribiendo la dirección desde la raíz de mi Home:

<br />
<code>
cd Documents/pdf/’ti books’
</code>
<br />
<br />

Y aquí hay un ultimo detalle a resaltar, Linux permite nombrar archivos con espacios en blanco entre palabras.

<br />

Sin embargo a la hora de nombrar estos archivos o directorios en la terminal usando el espacio en blanco se considerara que estas usando dos palabras distintas y no que ambas forman parte del nombre que deseamos señalar.

<br />

Para solucionar esto solo se debe encerrar entre comillas simples el nombre compuesto por varias palabras.

<br />

En lugar de colocar:

<br />

<code>
cd ti books
</code>

<br />
<br />

Colocar:

<br />

<code>
cd ‘ti books’
</code>

<br />
<br />

Por otro lado también puedes usar una ruta absoluta, es decir, la dirección precisa desde la raíz del sistema de archivos hasta la carpeta objetivo. Estas rutas tienden a ser algo más largas pero no importara en donde estés, podrás moverte al directorio que quieras sin preocuparte por tu posición actual en el sistema de archivos.

<br />

## Ver archivos ocultos con "ls"

Para finalizar me gustaría mencionar que el comando **“ls”** por si solo no nos muestra todos los ficheros.

<br />

Pueden existir ficheros ocultos que este comando no sea capaz de detectar de esta forma.

<br />

Pero tranquilos, esto es un problema sencillo de resolver al usar una de las varias opciones que el comando **“ls”** nos proporciona.

<br />

En este caso esta opción es **“ls --all”**.

<br />

Con este comando ahora si seremos capaces de ver todos los archivos ocultos .

<br />

Espero que esta información te sea útil y que ahora puedas desplazarte cómodamente por el sistema de archivos de tu distribución Linux sin inconvenientes.

<br />

Hasta la próxima mi querido ser del otro lado de la pantalla.
