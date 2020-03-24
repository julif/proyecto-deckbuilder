# Changelog

## [Unreleased]
## [v 0.1.7] Pre alpha - 2019-10-25
### Added
- barra de vida de el jugador
- boton para pasar de turno
- turno de el enemigo.
- ataque de el enemigo.

### fixed
- se cambio el estilo de las barras de vida.


## [v 0.1.6] Pre alpha - 2019-10-24
### Added
- se agrego la carpeta js, para alojar las funciones.
- ahora se muestra el numero de cartas en la mano

### fixed
- todas las funciones tienen su propio archivo js.
- make_draggable se unifico en lugar de ser 2 funciones similares llamadas desde distinto lugares.

## [v 0.1.5] Pre alpha - 2019-10-23
### fixed
- la primera lista ya no muestra las comas del array inicial.
- ahora las cartas en la lista de cartas usadas muestran correctamente la id y el current value.
- las cartas en el mazo muestran su id y su current value igual que lo harian si pasaran de las cartas usadas.
- ahora re-mezclar ya no muestra el alert y simplemente pasa las cartas al mazo y despues vuelve a llamar a la funcion robar.
- lengths(); es la funcion a la que se llama para averiguar la cantidad de cartas en cada div.


## [v 0.1.4] Pre alpha - 2019-10-22
### Added
- se agrego la funcion re-mezclar cuando se quiere robar cartas y ya no quedan en el mazo.
- el mazo de el jugador es ahora un string.

### Removed
- se quito el boton re-mezclar para que la funcion solo se active al robar cartas cuando no hay cartas en el mazo.
- se quitaron las cartas harcodeadas en el mazo.




## [v 0.1.3] Pre alpha - 2019-10-22
### Added
- se agrego el boton re-mezclar.
- ahora al lado del nombre de cada lista se ve la cantidad de items dentro.



## [v 0.1.2] Pre alpha - 2019-10-22
### Added
- se agrego la barra de vida del enemigo
- ahora al dropear una carta se daña al rival
- alert cuando la vida de el rival llega a 0
- se agrego la lista "mazo"
- se agrego el boton de robar
- ahora las cartas en la mano aparecen a clickear el boton robar

### Removed
- se quitaron las cartas harcodeadas en la mano

### Fixed
- se agrego  la funcion draggeable dentro de la funcion robar para que las cartas creadas dinamicamente puedan dragearse


## [v 0.1.1] Pre alpha - 2019-10-21
### Added
- las cartas tienen el atributo cardvalue

## [v 0.1.0] Pre alpha - 2019-10-21
### Added
- mas cartas
- dropzone
- div de cartas usadas

## [v 0.0.2] Pre alpha - 2019-10-21
### Added
- draganddropjs.
- script para el drag
- estilo para dragin dragging  opacity:0.5

## [v 0.0.1] Pre alpha - 2019-10-21
### Added
- carta basica.
