function pepito(cadena){

    if(cadena[0] == "/")
    {
        Delimitador = cadena[2]
        cadena = cadena.slice(4)
        SplitedCadena = cadena.split(Delimitador)
    }
    else
        SplitedCadena = cadena.split(/,|\n/)

    if(cadena[0] == "-")
        return "No se permiten negativos"

    let suma = 0
    if(cadena == "")
        return 0;

    for( const s of SplitedCadena)
    {
        const Numero = Number(s)
        suma = suma + Numero
    }
    return suma

}

module.exports = {
    pepito
}
