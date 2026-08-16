'use client';

import {
  WRITINGS,
  WRITING_CATEGORIES,
  type WritingCategory,
} from '@/lib/writings';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  BackLink,
  CategoryBadge,
  CategoryTab,
  CategoryTabs,
  Content,
  DateDisplay,
  Excerpt,
  Header,
  Layout,
  PageTitle,
  PageWrapper,
  ReadLink,
  Subtitle,
  Title,
  WritingListItem,
  WritingMeta,
} from './writings.styles';
import {
  SectionDetails,
  SectionTitle,
} from '@/components/ui/section-heading/section-heading.styles';

// Type for the filtered writings (WRITINGS doesn't have content)
type WritingSummary = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  category: WritingCategory;
};

export default function WritingsPage() {
  const [activeCategory, setActiveCategory] = useState<WritingCategory | 'all'>(
    'all'
  );

  const filteredWritings = useMemo(() => {
    if (activeCategory === 'all') return WRITINGS as WritingSummary[];
    return (WRITINGS as WritingSummary[]).filter(
      (w: WritingSummary) => w.category === activeCategory
    );
  }, [activeCategory]);

  // Sort by date descending
  const sortedWritings = useMemo(
    () =>
      [...filteredWritings].sort(
        (a: WritingSummary, b: WritingSummary) =>
          Date.parse(b.date) - Date.parse(a.date)
      ),
    [filteredWritings]
  );

  const tabs = ['all', ...WRITING_CATEGORIES.map((c) => c.key)] as const;

  return (
    <PageWrapper className="container">
      <BackLink href="/">← Back Home</BackLink>

      <Header>
        <SectionTitle $number={''}>writings</SectionTitle>
        <SectionDetails>
          A collection of reflections, blogs, journals, notes, and poems.
        </SectionDetails>
      </Header>

      {/* Category Tabs */}
      <CategoryTabs role="tablist" aria-label="Writing categories">
        {tabs.map((tab) => {
          const config = WRITING_CATEGORIES.find((c) => c.key === tab);
          return (
            <CategoryTab
              key={tab}
              role="tab"
              aria-selected={activeCategory === tab}
              aria-controls={`panel-${tab}`}
              id={`tab-${tab}`}
              $active={activeCategory === tab}
              onClick={() => setActiveCategory(tab as WritingCategory | 'all')}
            >
              {tab === 'all' ? 'All' : config?.label || tab}
            </CategoryTab>
          );
        })}
      </CategoryTabs>

      <Layout>
        <Content
          role="tabpanel"
          id={`panel-${activeCategory}`}
          aria-labelledby={`tab-${activeCategory}`}
        >
          {sortedWritings.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                color: '#6b7280',
                padding: '3rem',
              }}
            >
              No writings in this category yet.
            </div>
          ) : (
            sortedWritings.map((piece) => (
              <WritingListItem key={piece.slug}>
                <Link
                  href={`/writings/${piece.category}/${piece.slug}`}
                  prefetch={true}
                >
                  <WritingMeta>
                    <CategoryBadge category={piece.category}>
                      {getCategoryLabel(piece.category)}
                    </CategoryBadge>
                    <DateDisplay>{formatDate(piece.date)}</DateDisplay>
                  </WritingMeta>
                  <Title>{piece.title}</Title>
                  <Excerpt>{piece.excerpt}</Excerpt>
                  <ReadLink>Read →</ReadLink>
                </Link>
              </WritingListItem>
            ))
          )}
        </Content>
      </Layout>
    </PageWrapper>
  );
}

function getCategoryLabel(category: WritingCategory): string {
  const config = WRITING_CATEGORIES.find((c) => c.key === category);
  return config?.label || category;
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
