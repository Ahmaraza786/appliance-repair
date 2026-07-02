function getCitySeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const AVATARS = [
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80',
];

const NAMES = ['Sarah M.', 'James T.', 'Maria G.', 'David K.', 'Jennifer L.', 'Robert H.'];
const REVIEWS = [
  (city) => `Our refrigerator stopped cooling on a Friday night in ${city}. They had a tech out Saturday morning — fixed same day. Incredible!`,
  (city) => `Washer was flooding the laundry room. Tech arrived in 2 hours, fixed the drain pump in 40 minutes. Very professional team.`,
  (city) => `Best appliance repair in ${city}. Fixed our Samsung dryer that two other companies couldn't diagnose. Upfront pricing, no surprises.`,
];

export default function ReviewsSection({ cityName }) {
  const seed = getCitySeed(cityName || 'default');
  const loc = cityName || 'your area';

  const reviews = Array.from({ length: 3 }, (_, i) => ({
    name: NAMES[(seed + i * 3) % NAMES.length],
    avatar: AVATARS[(seed + i * 2) % AVATARS.length],
    text: REVIEWS[(seed + i * 5) % REVIEWS.length](loc),
  }));

  return (
    <section className="section reviews-section-v2">
      <div className="container">
        <div className="section-head text-center">
          <span className="eyebrow">Customer Stories</span>
          <h2>What {loc} Homeowners Say</h2>
        </div>
        <div className="reviews-v2-grid">
          {reviews.map((r, i) => (
            <blockquote key={i} className="review-v2-card">
              <div className="review-v2-stars">★★★★★</div>
              <p>&ldquo;{r.text}&rdquo;</p>
              <footer>
                <img src={r.avatar} alt={r.name} className="review-v2-avatar" width="44" height="44" />
                <cite>{r.name}</cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
