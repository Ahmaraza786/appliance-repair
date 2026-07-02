export default function FeatureStrip() {
  const items = [
    { icon: 'ph-wrench', value: '40,000+', label: 'Repairs Completed' },
    { icon: 'ph-star', value: '4.9 ★', label: 'Customer Rating' },
    { icon: 'ph-map-trifold', value: '50 States', label: 'Nationwide Coverage' },
    { icon: 'ph-clock-countdown', value: '< 2 hrs', label: 'Avg. Response Time' },
  ];

  return (
    <section className="trust-bar">
      <div className="container">
        <div className="trust-bar-grid">
          {items.map((item, i) => (
            <div key={i} className="trust-bar-item">
              <div className="trust-bar-icon"><i className={`ph-fill ${item.icon}`}></i></div>
              <div>
                <div className="trust-bar-value">{item.value}</div>
                <div className="trust-bar-label">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
