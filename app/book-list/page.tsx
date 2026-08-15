'use client';

import Link from 'next/link';
import styled from 'styled-components';

interface Book {
  title: string;
  author: string;
}

const CURRENTLY_READING: Book[] = [
  { title: 'Message in a Bottle', author: 'Nicholas Sparks' },
  { title: 'The Mountain Is You', author: 'Brianna Wiest' },
  { title: 'Everything Is F*cked: A Book About Hope', author: 'Mark Manson' },
  { title: 'The Lean Startup', author: 'Eric Ries' },
  { title: 'The Complete Book of Five Rings', author: 'Miyamoto Musashi' },
  { title: 'Wonder Woman: Warbringer', author: 'Leigh Bardugo' },
  { title: 'The Odyssey', author: 'Homer (Translated by Robert Fagles)' },
];

const BOOKS_READ: Book[] = [
  { title: 'Atomic Habits', author: 'James Clear' },
  { title: 'Deep Work', author: 'Cal Newport' },
];

const BOOKS_TO_READ: Book[] = [
  { title: 'The Count of Monte Cristo', author: 'Alexandre Dumas' },
  { title: 'A Little Life', author: 'Hanya Yanagihara' },
  { title: 'I Want to Die but I Want to Eat Tteokbokki', author: 'Baek Sehee' },
  { title: 'The Alchemist', author: 'Paulo Coelho' },
  {
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
  },
  { title: 'The Art of War', author: 'Sun Tzu' },
  { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman' },
  { title: 'Zero to One', author: 'Peter Thiel' },
  {
    title: 'A Philosophy of Software Design',
    author: 'John Ousterhout',
  },
  { title: "Man's Search for Meaning", author: 'Viktor E. Frankl' },
  { title: 'Rich Dad Poor Dad', author: 'Robert T. Kiyosaki' },
  { title: "Can't Hurt Me", author: 'David Goggins' },
  { title: 'Show Your Work!', author: 'Austin Kleon' },
  { title: 'Think and Grow Rich', author: 'Napoleon Hill' },
  { title: 'The 4-Hour Workweek', author: 'Timothy Ferriss' },
  { title: 'Money: Master the Game', author: 'Tony Robbins' },
  {
    title: 'Influence: The Psychology of Persuasion',
    author: 'Robert B. Cialdini',
  },
  { title: 'Never Split the Difference', author: 'Chris Voss' },
  { title: 'How to Win Friends and Influence People', author: 'Dale Carnegie' },
  { title: 'The 48 Laws of Power', author: 'Robert Greene' },
  { title: 'The Personal MBA', author: 'Josh Kaufman' },
  { title: 'The Intelligent Investor', author: 'Benjamin Graham' },
  { title: 'Reality Transurfing', author: 'Vadim Zeland' },
  {
    title: 'Misbehaving: The Making of Behavioral Economics',
    author: 'Richard H. Thaler',
  },
  { title: 'The Creature from Jekyll Island', author: 'G. Edward Griffin' },
  { title: 'The House of Morgan', author: 'Ron Chernow' },
  {
    title: 'Devil Take the Hindmost: A History of Financial Speculation',
    author: 'Edward Chancellor',
  },
  { title: 'The Pathless Path', author: 'Paul Millerd' },
  { title: 'Someday Is Today', author: 'Matthew Dicks' },
  { title: 'Beyond Wealth', author: 'Alexander Green' },
  { title: 'The 3 Alarms', author: 'Eric Partaker' },
  { title: 'The Art and Business of Online Writing', author: 'Nicolas Cole' },
  {
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey',
  },
  { title: 'Scorecard Marketing', author: 'Daniel Priestley' },
  { title: 'What We Owe the Future', author: 'William MacAskill' },
  { title: 'The Go-Giver', author: 'Bob Burg & John David Mann' },
  { title: 'The Luck Factor', author: 'Richard Wiseman' },
  { title: 'The Way of the Superior Man', author: 'David Deida' },
  { title: '$100M Offers', author: 'Alex Hormozi' },
  {
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
  },
  { title: 'The Surrender Experiment', author: 'Michael A. Singer' },
  { title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid' },
  { title: 'Neuromancer', author: 'William Gibson' },
  { title: 'The Last Flight', author: 'Julie Clark' },
];

// ─── Styles ───────────────────────────────────────────────────────────────────

const PageWrapper = styled.main`
  padding-top: 6rem;
  padding-bottom: 5rem;
`;

const Inner = styled.div`
  width: 90%;
  margin: 0 auto;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 70%;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  color: #3b82f6;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  margin-bottom: 2.75rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.75;
  }
`;

const PageTitle = styled.h1`
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

const Subtitle = styled.p`
  --min: 0.9em;
  --val: 2.5vw;
  --max: 1.05em;
  color: #9ca3af;
  font-family: ${({ theme }) => theme.fonts.inter};
  margin-bottom: 3.75rem;
`;

const BookSection = styled.div`
  margin-bottom: 3.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionLabel = styled.h2`
  --min: 0.7em;
  --val: 1.8vw;
  --max: 0.82em;
  font-family: ${({ theme }) => theme.fonts.bunch};
  text-transform: uppercase;
  color: violet;
  font-weight: 500;
  letter-spacing: 0.18em;
  margin-bottom: 1rem;
`;

const BookList = styled.ul``;

const BookItem = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1.25rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);

  &:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.07);
  }
`;

const BookTitle = styled.span`
  color: #ffffff;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  font-weight: 400;
`;

const BookAuthor = styled.span`
  color: #6b7280;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: clamp(0.775rem, 1.8vw, 0.875rem);
  text-align: right;
  flex-shrink: 0;
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function BookListPage() {
  return (
    <PageWrapper>
      <Inner>
        <BackLink href="/">← back home</BackLink>

        <PageTitle>book list</PageTitle>
        <Subtitle>Books I&apos;ve read and plan to read.</Subtitle>

        <BookSection>
          <SectionLabel>currently reading</SectionLabel>
          <BookList>
            {CURRENTLY_READING.map((book) => (
              <BookItem key={book.title}>
                <BookTitle>{book.title}</BookTitle>
                <BookAuthor>{book.author}</BookAuthor>
              </BookItem>
            ))}
          </BookList>
        </BookSection>

        <BookSection>
          <SectionLabel>read</SectionLabel>
          <BookList>
            {BOOKS_READ.map((book) => (
              <BookItem key={book.title}>
                <BookTitle>{book.title}</BookTitle>
                <BookAuthor>{book.author}</BookAuthor>
              </BookItem>
            ))}
          </BookList>
        </BookSection>

        <BookSection>
          <SectionLabel>want to read</SectionLabel>
          <BookList>
            {BOOKS_TO_READ.map((book) => (
              <BookItem key={book.title}>
                <BookTitle>{book.title}</BookTitle>
                <BookAuthor>{book.author}</BookAuthor>
              </BookItem>
            ))}
          </BookList>
        </BookSection>
      </Inner>
    </PageWrapper>
  );
}
