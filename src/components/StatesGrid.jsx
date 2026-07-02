import Link from 'next/link';

export default function StatesGrid({ states }) {
  return (
    <section className="section states-section-v2" id="states">
      <div className="container">
        <div className="section-head text-center">
          <span className="eyebrow">Nationwide Coverage</span>
          <h2>Appliance Repair in All 50 States</h2>
          <p className="sub">Select your state to find same-day repair in your city.</p>
        </div>
        <div className="states-v2-grid">
          {states.map(state => (
            <Link key={state.slug} href={`/states/${state.slug}`} className="state-v2-chip">
              <span className="state-v2-code">{state.code}</span>
              {state.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
