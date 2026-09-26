'use client';

import { MDXContent } from '@/components/mdx-component/mdx-components';
import {
  BackLink,
  Content,
  DateDisplay,
  Header,
  Layout,
  PageWrapper,
  Title,
} from '../../writings.styles';
import type { WritingCategory, WritingSummary } from '@/lib/writing-categories';
import { WritingTOC } from './WritingTOC';

interface WritingClientProps {
  category: WritingCategory;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tocWritings: WritingSummary[];
}

export function WritingClient({
  category,
  slug,
  title,
  date,
  content,
  tocWritings,
}: WritingClientProps) {
  return (
    <main className="container">
      <PageWrapper>
        <BackLink href={`/writings/${category}`}>← Back to {category}</BackLink>

        <Layout>
          <WritingTOC
            category={category}
            currentSlug={slug}
            writings={tocWritings}
          />
          <Content>
            <Header>
              <DateDisplay>{formatDate(date)}</DateDisplay>
              <Title>{title}</Title>
            </Header>
            <MDXContent code={content} />
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
