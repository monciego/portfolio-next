'use client';

import {
  getWritingsByCategory,
  type WritingCategory,
  type WritingCategoryConfig,
} from '@/lib/writings';
import Link from 'next/link';
import { useState } from 'react';
import {
  BackLink,
  CategoryTitle,
  Content,
  DateDisplay,
  Excerpt,
  Header,
  Layout,
  PageWrapper,
  Subtitle,
  Title,
  TOCButton,
  TOCItem,
  TOCLabel,
  TOCList,
  TOCMobileToggle,
  TOCSidebar,
  WritingListItem,
} from '../writings.styles';

interface CategoryPageClientProps {
  category: WritingCategory;
  categoryConfig: WritingCategoryConfig;
  writings: ReturnType<typeof getWritingsByCategory>;
}

export function CategoryPageClient({
  category,
  categoryConfig,
  writings,
}: CategoryPageClientProps) {
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <main className="container">
      <PageWrapper>
        <BackLink href="/writings">← Back to Writings</BackLink>

        <Layout>
          {/* ── Table of Contents ── */}
          <TOCSidebar>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
              }}
            >
              <TOCLabel>all {categoryConfig.label.toLowerCase()}</TOCLabel>
              <TOCMobileToggle onClick={() => setTocOpen(!tocOpen)}>
                {tocOpen ? 'Hide' : 'Contents'}
              </TOCMobileToggle>
            </div>
            <TOCList $open={tocOpen}>
              {writings.map((piece) => (
                <TOCItem key={piece.slug} $active={false}>
                  <Link
                    href={`/writings/${category}/${piece.slug}`}
                    prefetch={false}
                  >
                    <TOCButton $active={false} as="span">
                      {piece.title}
                    </TOCButton>
                  </Link>
                </TOCItem>
              ))}
            </TOCList>
          </TOCSidebar>

          {/* ── Writings list ── */}
          <Content>
            <Header>
              <CategoryTitle>{categoryConfig.label}</CategoryTitle>
              <Subtitle>{categoryConfig.description}</Subtitle>
            </Header>
            {writings.map((piece) => (
              <WritingListItem key={piece.slug}>
                <Link
                  href={`/writings/${category}/${piece.slug}`}
                  prefetch={true}
                >
                  <DateDisplay>{formatDate(piece.date)}</DateDisplay>
                  <Title>{piece.title}</Title>
                  <Excerpt>{piece.excerpt}</Excerpt>
                </Link>
              </WritingListItem>
            ))}
          </Content>
        </Layout>
      </PageWrapper>
    </main>
  );
}

function formatDate(dateStr: string): string {
  return Date.parse(dateStr)
    ? new Date(dateStr).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : dateStr;
}
