import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("ar");

  const t = {
    ar: {
      title: "Ahlam Lingo",
      subtitle: "معلقة صوتية محترفة عالمية",
      desc: "أحوّل الكلمات إلى صوت حيّ يصل للعالم باحتراف وإحساس",
      services: "الخدمات",
      portfolio: "أعمالي الصوتية",
      booking: "حجز خدمة",
      name: "الاسم",
      email: "البريد الإلكتروني",
      details: "تفاصيل المشروع",
      send: "إرسال"
    },
    en: {
      title: "Ahlam Lingo",
      subtitle: "Global Professional Voice Over Artist",
      desc: "Turning words into emotion with a world-class voice",
      services: "Services",
      portfolio: "Portfolio",
      booking: "Book Now",
      name: "Name",
      email: "Email",
      details: "Project details",
      send: "Send"
    },
  };

  const services = [
    "Commercial Ads - الإعلانات التجارية",
    "Dubbing - الدبلجة",
    "Documentary - الوثائقيات",
    "Storytelling - السرد القصصي",
    "Podcast Voice - البودكاست",
  ];

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"}>

      {/* HEADER */}
      <header>
        <h2>{t[lang].title}</h2>
        <div>
          <button onClick={() => setLang("ar")}>AR</button>
          <button onClick={() => setLang("en")}>EN</button>
        </div>
      </header>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <h1 style={{ fontSize: '2.5rem' }}>{t[lang].subtitle}</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>{t[lang].desc}</p>
        <a href="#booking"><button style={{ padding: '15px 30px', fontSize: '1.1rem' }}>{t[lang].booking}</button></a>
      </section>

      {/* SERVICES */}
      <section id="services">
        <h2>{t[lang].services}</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {services.map((s, i) => (
            <li key={i} style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>{s}</li>
          ))}
        </ul>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio">
        <h2>{t[lang].portfolio}</h2>

        <div className="portfolio-item">
          <p><strong>Commercial Sample - عينة إعلانية</strong></p>
          <audio controls>
            <source src="/audio/sample1.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <div className="portfolio-item">
          <p><strong>Dubbing Sample - عينة دبلجة</strong></p>
          <audio controls>
            <source src="/audio/sample2.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking">
        <h2>{t[lang].booking}</h2>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <input placeholder={t[lang].name} required />
          <input type="email" placeholder={t[lang].email} required />
          <textarea rows="4" placeholder={t[lang].details} required />
          <button type="submit" style={{ maxWidth: '200px' }}>{t[lang].send}</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "40px 20px", textAlign: "center", background: "#333", color: "white" }}>
        <p>WhatsApp: +213794326761</p>
        <p>Email: Ahlambezzina3@gmail.com</p>
        <p>© 2026 Ahlam Lingo | Bir el Ater, Algeria</p>
      </footer>

    </div>
  );
}