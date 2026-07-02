export default function MapEmbed({ location, zoom = '10' }) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="section map-section">
      <div className="container">
        <div className="map-wrap fade-up visible">
          <iframe
            title={`Appliance repair service area — ${location}`}
            src={src}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
