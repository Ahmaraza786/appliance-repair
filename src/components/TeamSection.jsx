import { IMAGES } from '@/lib/images';
import PhoneTrigger from './PhoneTrigger';
import { PHONE_DISPLAY } from '@/lib/constants';

export default function TeamSection({ cityName }) {
  const loc = cityName || 'Nationwide';

  return (
    <section className="section team-section" id="team">
      <div className="container">
        <div className="team-header">
          <div className="team-header-text">
            <span className="eyebrow">Meet Our Experts</span>
            <h2>Certified Technicians Serving {loc}</h2>
            <p className="sub-left">
              Factory-trained, background-checked pros who show up on time, explain every repair,
              and stand behind their work with a 90-day warranty.
            </p>
          </div>
          <PhoneTrigger className="btn btn-accent hide-mobile">
            <i className="ph-fill ph-phone"></i> Book a Tech — {PHONE_DISPLAY}
          </PhoneTrigger>
        </div>

        <div className="team-grid">
          {IMAGES.team.map((member, i) => (
            <article key={i} className="team-card">
              <div className="team-photo-wrap">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="team-photo"
                  loading="lazy"
                  width="400"
                  height="400"
                />
                <div className="team-badge">{member.exp}</div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-specialty">{member.specialty}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
