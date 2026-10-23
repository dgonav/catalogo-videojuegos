function TarjetaJuego({ juego, esFavorito, cambiarFavorito, verDetalle }) {
  return (
    <div className="tarjeta" onClick={() => verDetalle(juego)}>
      <img src={juego.imagen} alt={juego.nombre} />
      <h3>{juego.nombre}</h3>
      <p>{juego.genero} · {juego.anio}</p>
      <button
        className={esFavorito ? 'fav activo' : 'fav'}
        onClick={(e) => {
          e.stopPropagation() // evita que se abra el detalle al dar clic en el botón
          cambiarFavorito(juego.id)
        }}
      >
        {esFavorito ? '★ Quitar de favoritos' : '☆ Agregar a favoritos'}
      </button>
    </div>
  )
}

export default TarjetaJuego
