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
import { WritingTOC } from './WritingTOC';

interface WritingClientProps {
  category: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export function WritingClient({
  category,
  slug,
  title,
  date,
  content,
}: WritingClientProps) {
  return (
    <PageWrapper className="container">
      <BackLink href={`/writings/${category}`}>← Back to {category}</BackLink>

      <Layout>
        <WritingTOC category={category as any} currentSlug={slug} />
        <Content>
          <Header>
            <DateDisplay>{formatDate(date)}</DateDisplay>
            <Title>{title}</Title>
          </Header>
          <MDXContent code={content} />
        </Content>
      </Layout>
    </PageWrapper>
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
