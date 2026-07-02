import { TAGLINE_EN } from '@/lib/constants';

export default function TaglineSubheadline({ className = '' }) {
  return <p className={`tagline-sub ${className}`}>{TAGLINE_EN}</p>;
}
