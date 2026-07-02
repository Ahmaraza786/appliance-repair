export default function CallUsButton({ className = 'service-tile-link', label = 'Call Us', showArrow = true, onClick }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {label}
      {showArrow && <i className="ph-bold ph-phone"></i>}
    </button>
  );
}
