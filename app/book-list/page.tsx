'use client';

import {
  SectionDetails,
  SectionTitle,
} from '@/components/ui/section-heading/section-heading.styles';
import {
  BackLink,
  BookAuthor,
  BookItem,
  BookList,
  BookSection,
  BookTitle,
  Header,
  PageWrapper,
  SectionLabel,
} from './booklist.styles';

interface Book {
  title: string;
  author: string;
}

const CURRENTLY_READING: Book[] = [
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
  { title: 'Message in a Bottle', author: 'Nicholas Sparks' },
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

export default function BookListPage() {
  return (
    <main className="container">
      <PageWrapper>
        <BackLink href="/">← back home</BackLink>

        <Header>
          <SectionTitle $number="">book list</SectionTitle>
          <SectionDetails>
            Books I&apos;ve read and plan to read.
          </SectionDetails>
        </Header>

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
      </PageWrapper>
    </main>
  );
}
