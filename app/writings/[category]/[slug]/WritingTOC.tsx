'use client';

import Link from 'next/link';
import { useState } from 'react';
import type {
  WritingCategory,
  WritingSummary,
} from '@/lib/writing-categories';
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
  writings: WritingSummary[];
}

export function WritingTOC({
  category,
  currentSlug,
  writings,
}: WritingTOCProps) {
  const [tocOpen, setTocOpen] = useState(false);

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
