'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getWritingsByCategory, type WritingCategory } from '@/lib/writings';
import {
  TOCSidebar,
  TOCLabel,
  TOCList,
  TOCItem,
  TOCButton,
  TOCMobileToggle,
} from '../../writings.styles';

interface WritingTOCProps {
  category: WritingCategory;
  currentSlug: string;
}

export function WritingTOC({ category, currentSlug }: WritingTOCProps) {
  const [tocOpen, setTocOpen] = useState(false);
  const writings = getWritingsByCategory(category);

  return (
    <TOCSidebar>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem',
        }}
      >
        <TOCLabel>all {category}</TOCLabel>
        <TOCMobileToggle onClick={() => setTocOpen(!tocOpen)}>
          {tocOpen ? 'Hide' : 'Contents'}
        </TOCMobileToggle>
      </div>
      <TOCList $open={tocOpen}>
        {writings.map((piece) => (
          <TOCItem key={piece.slug} $active={piece.slug === currentSlug}>
            <Link href={`/writings/${category}/${piece.slug}`} prefetch={false}>
              <TOCButton $active={piece.slug === currentSlug} as="span">
                {piece.title}
              </TOCButton>
            </Link>
          </TOCItem>
        ))}
      </TOCList>
    </TOCSidebar>
  );
}
