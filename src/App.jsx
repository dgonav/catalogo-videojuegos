import { useState } from 'react'
import videojuegos from './datos'
import Filtros from './components/Filtros'
import TarjetaJuego from './components/TarjetaJuego'
import DetalleJuego from './components/DetalleJuego'

function App() {
  // Estado de la aplicación
  const [busqueda, setBusqueda] = useState('')
  const [genero, setGenero] = useState('Todos')
  const [favoritos, setFavoritos] = useState([]) // guarda los id de los favoritos
  const [soloFavoritos, setSoloFavoritos] = useState(false)
  const [seleccionado, setSeleccionado] = useState(null)

  // Marcar o desmarcar un favorito
  const cambiarFavorito = (id) => {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((f) => f !== id))
    } else {
      setFavoritos([...favoritos, id])
    }
  }

  // Búsqueda y filtros funcionando al mismo tiempo
  const juegosFiltrados = videojuegos
    .filter((j) => j.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    .filter((j) => genero === 'Todos' || j.genero === genero)
    .filter((j) => !soloFavoritos || favoritos.includes(j.id))

  return (
    <div className="app">
      <h1>🎮 Catálogo de Videojuegos</h1>

      <Filtros
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        genero={genero}
        setGenero={setGenero}
        soloFavoritos={soloFavoritos}
        setSoloFavoritos={setSoloFavoritos}
        totalFavoritos={favoritos.length}
      />

      {juegosFiltrados.length === 0 && <p className="vacio">No se encontraron videojuegos.</p>}

      <div className="grid">
        {juegosFiltrados.map((juego) => (
          <TarjetaJuego
            key={juego.id}
            juego={juego}
            esFavorito={favoritos.includes(juego.id)}
            cambiarFavorito={cambiarFavorito}
            verDetalle={setSeleccionado}
          />
        ))}
      </div>

      {seleccionado && (
        <DetalleJuego juego={seleccionado} cerrar={() => setSeleccionado(null)} />
      )}
    </div>
  )
}

export default App
