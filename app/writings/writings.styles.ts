import Link from 'next/link';
import styled from 'styled-components';

export const PageWrapper = styled.section``;

export const BackLink = styled(Link)`
  display: inline-block;
  color: #3b82f6;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  margin-bottom: 1rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.75;
  }
`;

export const Header = styled.div`
  margin-bottom: 2rem;
`;

export const PageTitle = styled.h1`
  --min: 2.75em;
  --val: 8vw;
  --max: 4.5em;
  font-family: ${({ theme }) => theme.fonts.bunch};
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 700;
  line-height: 0.95;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
`;

export const Subtitle = styled.p`
  --min: 0.9em;
  --val: 2.5vw;
  --max: 1.05em;
  color: #9ca3af;
  font-family: ${({ theme }) => theme.fonts.inter};
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
    gap: 5rem;
  }
`;

export const TOCSidebar = styled.aside`
  width: 100%;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 200px;
    flex-shrink: 0;
    position: sticky;
    top: 7rem;
    align-self: flex-start;
  }
`;

export const TOCMobileToggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #6b7280;
  font-family: ${({ theme }) => theme.fonts.firaCode};
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  padding: 0.25rem 0;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const TOCLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.firaCode};
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #4b5563;
`;

export const TOCList = styled.ul<{ $open?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
  }
`;

export const TOCItem = styled.li<{ $active: boolean }>`
  border-left: 2px solid
    ${({ $active }) => ($active ? 'violet' : 'rgba(255,255,255,0.08)')};
  padding: 0.45rem 0 0.45rem 0.875rem;
  transition: border-color 0.25s ease;
`;

export const TOCButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;
  width: 100%;
  color: ${({ $active }) => ($active ? '#ffffff' : '#6b7280')};
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: clamp(0.775rem, 1.8vw, 0.84rem);
  line-height: 1.45;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ $active }) => ($active ? '#ffffff' : '#d1d5db')};
  }
`;

export const Content = styled.div`
  flex: 1;
  min-width: 0;
`;

/* ── Category Tabs ── */

export const CategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const CategoryTab = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  background: ${({ $active }) =>
    $active ? 'rgba(139, 92, 246, 0.15)' : 'transparent'};
  border: 1px solid
    ${({ $active }) => ($active ? '#8b5cf6' : 'rgba(255, 255, 255, 0.08)')};
  border-radius: 0.25rem;
  color: ${({ $active }) => ($active ? '#8b5cf6' : '#9ca3af')};
  font-family: ${({ theme }) => theme.fonts.firaCode};
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ $active }) => ($active ? '#8b5cf6' : '#8b5cf6')};
    color: ${({ $active }) => ($active ? '#8b5cf6' : '#e5e7eb')};
  }
`;

/* ── Writings List ── */

export const WritingListItem = styled.article`
  padding: 2rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.01);
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const WritingMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
`;

export const CategoryBadge = styled.span<{ category: string }>`
  display: inline-flex;
  align-items: center;
  padding: 0.15rem 0.5rem;
  background: ${({ category }) => getCategoryColor(category)};
  color: #ffffff;
  font-family: ${({ theme }) => theme.fonts.firaCode};
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 4px;
`;

function getCategoryColor(category: string): string {
  switch (category) {
    case 'blogs':
      return '#3b82f6';
    case 'reflections':
      return '#f59e0b';
    case 'notes':
      return '#10b981';
    case 'journal':
      return '#8b5cf6';
    case 'poems':
      return '#ec4899';
    default:
      return '#6b7280';
  }
}

export const DateDisplay = styled.time`
  font-family: ${({ theme }) => theme.fonts.firaCode};
  font-size: 0.72rem;
  color: #6b7280;
  letter-spacing: 0.04em;
`;

export const Title = styled.h2`
  --min: 1.15em;
  --val: 2.8vw;
  --max: 1.45em;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
  line-height: 1.35;
  transition: color 0.2s ease;

  ${WritingListItem}:hover & {
    color: #8b5cf6;
  }
`;

export const Excerpt = styled.p`
  --min: 0.9em;
  --val: 2.5vw;
  --max: 1em;
  font-family: ${({ theme }) => theme.fonts.inter};
  color: #9ca3af;
  line-height: 1.7;
  font-weight: 400;
  margin-bottom: 0.75rem;
`;

export const ReadLink = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: #8b5cf6;
  font-family: ${({ theme }) => theme.fonts.firaCode};
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 500;
  transition:
    gap 0.2s ease,
    opacity 0.2s ease;

  ${WritingListItem}:hover & {
    gap: 0.5rem;
  }
`;

/* ── Category Index Styles (for category pages) ── */

export const CategoryCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1rem;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    border-color: rgba(139, 92, 246, 0.4);
    background: rgba(139, 92, 246, 0.05);
  }
`;

export const CategoryIcon = styled.div`
  display: inline-flex;
  color: #8b5cf6;
  margin-bottom: 0.5rem;
`;

export const CategoryLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.firaCode};
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #8b5cf6;
`;

export const CategoryTitle = styled.h2`
  --min: 1.5em;
  --val: 3.5vw;
  --max: 2.25em;
  font-family: ${({ theme }) => theme.fonts.bunch};
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0;
`;

export const CategoryDescription = styled.p`
  --min: 0.95em;
  --val: 2.2vw;
  --max: 1.1em;
  color: #9ca3af;
  font-family: ${({ theme }) => theme.fonts.inter};
  line-height: 1.6;
  margin: 0;
`;
