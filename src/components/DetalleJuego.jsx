function DetalleJuego({ juego, cerrar }) {
  return (
    <div className="fondo-modal" onClick={cerrar}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={juego.imagen} alt={juego.nombre} />
        <div>
          <h2>{juego.nombre}</h2>
          <p><b>Género:</b> {juego.genero}</p>
          <p><b>Año de lanzamiento:</b> {juego.anio}</p>
          <p>{juego.descripcion}</p>
          <button onClick={cerrar}>Cerrar</button>
        </div>
      </div>
    </div>
  )
}

export default DetalleJuego
