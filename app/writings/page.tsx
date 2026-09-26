import { WRITINGS } from '@/lib/writings';
import { WritingsPageClient } from './WritingsPageClient';

export default function WritingsPage() {
  return <WritingsPageClient writings={WRITINGS} />;
}
