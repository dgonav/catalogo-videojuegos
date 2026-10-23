const generos = ['Todos', 'Acción', 'Aventura', 'Deportes', 'Estrategia']

function Filtros({ busqueda, setBusqueda, genero, setGenero, soloFavoritos, setSoloFavoritos, totalFavoritos }) {
  return (
    <div className="filtros">
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <select value={genero} onChange={(e) => setGenero(e.target.value)}>
        {generos.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>

      <button onClick={() => setSoloFavoritos(!soloFavoritos)}>
        {soloFavoritos ? 'Ver todos' : 'Ver solo favoritos'}
      </button>

      <span className="contador">⭐ Favoritos: {totalFavoritos}</span>
    </div>
  )
}

export default Filtros
