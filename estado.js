let validarEstado = function (estado){
    if (estado === "SP" || estado === "RJ") {
        return "Estado: Estado permitido";
      } else {
        return "Estado: Estado negado";
      }
}

module.exports = validarEstado