import './App.css'

function App() {
  return (
    <main>
      <div id="esq"></div>

      <div id="dir">
        <div className="login">
          <h1>Informe seus dados para entrar</h1>

          <label htmlFor="usuario">Email ou número de celular</label>
          <input
            id="usuario"
            type="text"
            placeholder="Email ou número de celular"
          />

          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Senha"
          />

          <div className="links">
            <span>Ajuda</span>
          </div>

          <button type="button">Continuar</button>
        </div>
      </div>
    </main>
  )
}

export default App
