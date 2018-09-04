# Funcionalidades de Google AppScript

Diversas funcionalidades desarrolladas en Google AppScript para integrar en documentos de G Suite. Para conocer más (https://www.google.com/script/start/).  Las funciones listadas a continuación son desarrolladas y probadas por mi para atender un requerimiento especifico que se me presentó.

### 1.0.0 Inicio

* Creación de EnviarEmail.gs.
* Creación de guía.


## Envío de rango de celdas con formato mediante email.

### Empezando

Para esta funcionalidad es necesario agregar una biblioteca llamada SheetConverter dentro de su hoja de cálculo.
La cual se encarga de formatear el contenido de las celdas y convertirlo en HTML, lo que nos facilita el envío y la visualización del contenido enviado.

* La biblioteca a utilizar es [SheetConverter](https://sites.google.com/site/scriptsexamples/custom-methods/sheetconverter).
* Su proyecto se encuentra en [SheetConverter - GitHub](https://github.com/mogsdad/SheetConverter).
* Su documentación se encuentra en [SheetConverter - Documentación](https://script.google.com/macros/library/d/Mo6Ljr7ZKrMeYO9mHqOdo9oxc-w7mEonb/5).

### Instalación

Para instalar la biblioteca puede leer la documentación en su [web oficial](https://sites.google.com/site/scriptsexamples/custom-methods/sheetconverter) o seguir estos simples pasos.

* Dentro de su hoja de cálculo ingrese a `Herramientas > Editor de secuencias de comandos`.
* Dentro del editor de secuencias de comandos ingrese a `Recursos > Bibliotecas..`. 
* Una vez detro, dirijase al apartado `Agregar una biblioteca`, pegue el siguiente código y presione `Agregar una biblioteca`.

```
Mo6Ljr7ZKrMeYO9mHqOdo9oxc-w7mEonb
```

Luego de agregar la biblioteca, copie el contenido del código .cs en el editor de comandos.
