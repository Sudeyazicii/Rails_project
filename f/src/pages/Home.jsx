import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-container">
      <header className="hero">
        <h1>📊 Anket Yönetim Sistemi</h1>
        <p>Modern ve Kullanıcı Dostu Anket Platformu</p>
        <button 
          className="cta-button" 
          data-cy="login-button"
          onClick={() => navigate('/login')}
        >
          Giriş Yap
        </button>
      </header>

      <section className="features">
        <div className="feature-card">
          <h3>✅ Kolay Anket Oluşturma</h3>
          <p>Birkaç tıklamayla profesyonel anketler oluşturun</p>
        </div>
        <div className="feature-card">
          <h3>📊 Gerçek Zamanlı Analiz</h3>
          <p>Anında sonuçları görüntüleyin ve raporlayın</p>
        </div>
        <div className="feature-card">
          <h3>🔒 Güvenli ve Ölçeklenebilir</h3>
          <p>Modern teknolojilerle güvenli veri yönetimi</p>
        </div>
      </section>
    </div>
  )
}

export default Home
