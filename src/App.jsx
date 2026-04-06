import './App.css'

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="nav-brand">
            <h3>           Sistema de Gestión de Limpieza</h3>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <span className="card-badge">Proyecto de Tesis</span>
              <h1>Gestión inteligente de limpieza para universidades</h1>
              <p className="hero-text">
                Una solución práctica para los sistemas de limpieza universitaria, enfocada en optimizar la limpieza y mantenimiento de espacios educativos, reducir costos
                y asegurar el cumplimiento de normas sanitarias.
              </p>
              <div className="cta-group">
                <a href="#objetivos" className="button button-primary">Ver objetivos</a>
                <a href="#contacto" className="button button-secondary">Escribir al autor</a>
              </div>
            </div>

            <div className="hero-card">
              <span className="card-badge">Caracteristicas</span>
              <p>Sistema de gestión de limpieza para espacios educativos con monitoreo y automatización adaptada a necesidades reales.</p>
              <ul>
                <li>Procesos más ordenados</li>
                <li>Menos errores manuales</li>
                <li>Informes simples y útiles</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="objetivos" className="section objectives">
          <div className="container">
            <h2>Objetivos del Proyecto</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔧</div>
                <h3>Automatización</h3>
                <p>Automatizar tareas críticas de limpieza y flujo de trabajo.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Monitoreo en tiempo real</h3>
                <p>Control permanente de resultados, estados y alertas.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Mayor productividad</h3>
                <p>Optimizar recursos y reducir tiempos ineficientes.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h3>Seguridad total</h3>
                <p>Cumplir normas de higiene y sanidad con trazabilidad completa.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="section benefits">
          <div className="container benefits-inner">
            <div className="benefits-copy">
              <h2>Beneficios</h2>
              <p>
                Reduce costos operativos, mejora la efectividad de los procesos de limpieza y facilita la supervisión diaria de espacios educativos.
              </p>
            </div>
            <div className="benefits-panel">
              <p>• Eficiencia en la gestión</p>
              <p>• Visibilidad de tareas</p>
              <p>• Menor margen de error</p>
              <p>• Adaptación a la operación</p>
            </div>
          </div>
        </section>

        <section id="autor" className="section author">
          <div className="container author-inner">
            <div>
              <h2>Acerca del autor</h2>
              <p>
                Francisco Antonio Matamala Alarcón, estudiante de 4to año en Ingeniería de Ejecución en Computación e Informática
                en la Universidad del Bío-Bío. Esta tesis usa tecnología práctica para resolver problemas reales en limpieza y mantenimiento de espacios universitarios.
              </p>
            </div>
            <div className="author-card">
              <p className="author-name">Francisco A. Matamala</p>
              <p>Estudiante de Ingeniería de Ejecución en Computación e Informática</p>
              <p>Universidad del Bío-Bío</p>
            </div>
          </div>
        </section>

        <section id="contacto" className="section contact">
          <div className="container contact-inner">
            <div>
              <h2>Contacto</h2>
              <p>Si quieres conversar sobre la implementación o conocer más del proyecto, escríbeme.</p>
              <p className="contact-email">francisco.matamala2301@alumnos.ubiobio.cl</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>&copy; 2026 Francisco Antonio Matamala Alarcón</p>
          
        </div>
      </footer>
    </div>
  )
}

export default App
