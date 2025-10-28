class HomeController < ActionController::Base
  def index
    render html: <<-HTML.html_safe
      <!DOCTYPE html>
      <html lang="tr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Modern ve kullanıcı dostu anket yönetim platformu. Kolayca anket oluşturun, yanıtlayın ve sonuçları analiz edin.">
        <title>Anket Yönetim Sistemi - Modern Anket Platformu</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {#{' '}
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
          }
          header {
            background: #2c3e50;
            color: white;
            padding: 30px;
            text-align: center;
          }
          header h1 {
            font-size: 42px;
            margin-bottom: 10px;
          }
          header p {
            font-size: 18px;
            opacity: 0.9;
          }
          nav {
            margin-top: 20px;
          }
          nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
            padding: 10px 20px;
            background: rgba(255,255,255,0.1);
            border-radius: 5px;
            transition: all 0.3s;
            display: inline-block;
          }
          nav a:hover {
            background: rgba(255,255,255,0.2);
            transform: translateY(-2px);
          }
          nav a:focus {
            outline: 3px solid #ffd700;
            outline-offset: 2px;
          }
          .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            padding: 40px;
            background: #f8f9fa;
          }
          .stat-box {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
            transition: transform 0.3s;
          }
          .stat-box:hover {
            transform: translateY(-10px);
          }
          .stat-box h2 {
            font-size: 64px;
            margin-bottom: 10px;
          }
          .stat-box p {
            font-size: 18px;
            opacity: 0.9;
          }
          .content {
            padding: 40px;
          }
          .content h2 {
            color: #2c3e50;
            margin-bottom: 20px;
            font-size: 32px;
            border-bottom: 3px solid #667eea;
            padding-bottom: 10px;
          }
          .info-box {
            background: #e3f2fd;
            border-left: 5px solid #2196f3;
            padding: 20px;
            margin: 20px 0;
            border-radius: 5px;
          }
          .info-box p {
            color: #1565c0;
            line-height: 1.6;
          }
          footer {
            background: #2c3e50;
            color: white;
            text-align: center;
            padding: 20px;
          }
      #{'    '}
          /* Skip to content link for accessibility */
          .skip-link {
            position: absolute;
            top: -40px;
            left: 0;
            background: #000;
            color: white;
            padding: 8px;
            text-decoration: none;
            z-index: 100;
          }
          .skip-link:focus {
            top: 0;
          }
        </style>
      </head>
      <body>
        <a href="#main-content" class="skip-link">Ana içeriğe geç</a>
      #{'  '}
        <div class="container">
          <header>
            <h1>📊 Anket Yönetim Sistemi</h1>
            <p>Modern ve Kullanıcı Dostu Anket Platformu</p>
            <nav aria-label="Ana navigasyon">
              <a href="#istatistikler">İstatistikler</a>
              <a href="#ozellikler">Özellikler</a>
              <a href="#hakkinda">Hakkında</a>
            </nav>
          </header>
      #{'    '}
          <main id="main-content">
            <section id="istatistikler" class="stats" aria-label="İstatistikler">
              <div class="stat-box">
                <h2>#{Survey.count}</h2>
                <p>Toplam Anket</p>
              </div>
              <div class="stat-box">
                <h2>#{User.count}</h2>
                <p>Aktif Kullanıcı</p>
              </div>
              <div class="stat-box">
                <h2>#{Response.count}</h2>
                <p>Toplam Yanıt</p>
              </div>
            </section>
      #{'      '}
            <section class="content">
              <h2 id="ozellikler">🎯 Platform Özellikleri</h2>
              <div class="info-box">
                <p><strong>✅ Kolay Anket Oluşturma:</strong> Birkaç tıklamayla profesyonel anketler oluşturun</p>
              </div>
              <div class="info-box">
                <p><strong>✅ Gerçek Zamanlı Analiz:</strong> Anında sonuçları görüntüleyin ve raporlayın</p>
              </div>
              <div class="info-box">
                <p><strong>✅ Güvenli ve Ölçeklenebilir:</strong> Modern teknolojilerle güvenli veri yönetimi</p>
              </div>
      #{'        '}
              <h2 id="hakkinda">ℹ️ Hakkında</h2>
              <p style="line-height: 1.8; color: #555;">
                Bu platform, anket oluşturma ve yönetme işlemlerini kolaylaştırmak için#{' '}
                Rails 8 ile geliştirilmiştir. Kullanıcılar kolayca anket oluşturabilir,#{' '}
                yanıtlayabilir ve sonuçları analiz edebilir.
              </p>
            </section>
          </main>
      #{'    '}
          <footer>
            <p>&copy; 2025 Anket Yönetim Sistemi | Tüm Hakları Saklıdır</p>
          </footer>
        </div>
      </body>
      </html>
    HTML
  end
end
