import Image from 'next/image';
import { ReactNode } from 'react';
import * as runtime from 'react/jsx-runtime';

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const linkTransition = {
  transition: 'color 0.2s ease, text-decoration-color 0.2s ease',
};

// Create dark styles
const createDarkStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    :root {
      --bg-primary: #0f172a;
      --bg-secondary: #1e293b;
      --bg-tertiary: rgba(30, 41, 59, 0.5);
      --bg-code: rgba(30, 41, 59, 0.7);
      --text-primary: #ffffff;
      --text-secondary: #f3f4f6;
      --text-tertiary: #d1d5db;
      --text-muted: #9ca3af;
      --text-code: #f87171;
      --border-primary: #374151;
      --border-secondary: #4b5563;
      --accent-blue: #60a5fa;
      --accent-blue-hover: #93c5fd;
      --accent-red: #f87171;
      --accent-green: #34d399;
      --accent-yellow: #fbbf24;
      --shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    }
  `;

  // Inject the style into the document head if not already present
  if (typeof document !== 'undefined') {
    const existingStyle = document.querySelector('style[data-mdx-dark-styles]');
    if (!existingStyle) {
      style.setAttribute('data-mdx-dark-styles', 'true');
      document.head.appendChild(style);
    }
  }
};

// Call this function on the client side
if (typeof window !== 'undefined') {
  createDarkStyles();
}

const components = {
  // Heading styles with improved spacing and responsive sizing
  h1: ({ children, ...props }: { children: ReactNode }) => (
    <h1
      style={{
        fontSize: 'clamp(1.875rem, 5vw, 2.5rem)', // Responsive font size
        fontWeight: '800', // Extra bold for main headings
        letterSpacing: '-0.025em', // tracking-tight
        marginTop: '2.5rem', // mt-10
        marginBottom: '1.5rem', // mb-6
        scrollMarginTop: '7rem',
        lineHeight: '1.2', // Tighter line height for headings
        color: 'var(--text-primary)',
      }}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: { children: ReactNode }) => (
    <h2
      style={{
        fontSize: 'clamp(1.5rem, 4vw, 2rem)', // Responsive font size
        fontWeight: '700', // Bold
        letterSpacing: '-0.025em', // tracking-tight
        marginTop: '3rem', // mt-12
        marginBottom: '1rem', // mb-4
        scrollMarginTop: '7rem',
        borderBottom: '1px solid var(--border-primary)', // Adaptive border
        paddingBottom: '0.5rem', // pb-2
        lineHeight: '1.3',
        color: 'var(--text-secondary)',
      }}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: { children: ReactNode }) => (
    <h3
      style={{
        fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', // Responsive font size
        fontWeight: '600', // font-semibold
        letterSpacing: '-0.025em', // tracking-tight
        marginTop: '2.5rem', // mt-10
        marginBottom: '0.75rem', // mb-3
        scrollMarginTop: '7rem',
        lineHeight: '1.4',
        color: 'var(--text-tertiary)',
      }}
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: { children: ReactNode }) => (
    <h4
      style={{
        fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', // Responsive font size
        fontWeight: '600', // font-semibold
        letterSpacing: '-0.015em', // Slightly tighter tracking
        marginTop: '2rem', // mt-8
        marginBottom: '0.75rem', // mb-3
        scrollMarginTop: '7rem',
        color: 'var(--text-tertiary)',
      }}
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({ children, ...props }: { children: ReactNode }) => (
    <h5
      style={{
        fontSize: '1.125rem', // text-lg
        fontWeight: '600', // font-semibold
        letterSpacing: '-0.015em', // Slightly tighter tracking
        marginTop: '1.75rem', // mt-7
        marginBottom: '0.5rem', // mb-2
        scrollMarginTop: '7rem',
        color: 'var(--text-tertiary)',
      }}
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({ children, ...props }: { children: ReactNode }) => (
    <h6
      style={{
        fontSize: '1rem', // text-base
        fontWeight: '600', // font-semibold
        letterSpacing: '-0.01em', // Very slight tracking adjustment
        marginTop: '1.75rem', // mt-7
        marginBottom: '0.5rem', // mb-2
        scrollMarginTop: '7rem',
        color: 'var(--text-tertiary)',
      }}
      {...props}
    >
      {children}
    </h6>
  ),
  // Enhanced link with hover effect for adaptive theme
  /* all a element have this style */
  a: ({ children, ...props }: { children: ReactNode }) => (
    <a
      style={{
        fontWeight: '500', // font-medium
        color: 'var(--accent-blue)',
        textDecoration: 'underline', // underline
        textDecorationColor: 'rgba(var(--accent-blue), 0.4)', // Subtle underline
        textUnderlineOffset: '0.2em', // underline-offset
        ...linkTransition,
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.color = 'var(--accent-blue-hover)';
        e.currentTarget.style.textDecorationColor = 'var(--accent-blue-hover)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.color = 'var(--accent-blue)';
        e.currentTarget.style.textDecorationColor =
          'rgba(var(--accent-blue), 0.4)';
      }}
      {...props}
    >
      {children}
    </a>
  ),
  // Enhanced paragraph with better readability
  p: ({ children, ...props }: { children: ReactNode }) => (
    <p
      style={{
        fontSize: '1.075rem',
        lineHeight: '1.75', // leading-7
        marginTop: '1.25rem', // Slightly reduced from 1.5rem
        marginBottom: '1.25rem', // Added bottom margin
        color: 'var(--text-tertiary)',
      }}
      {...props}
    >
      {children}
    </p>
  ),
  // Enhanced lists with better spacing
  ul: ({ children, ...props }: { children: ReactNode }) => (
    <ul
      style={{
        marginTop: '1.25rem', // mt-5
        marginBottom: '1.25rem', // mb-5
        paddingLeft: '1.5rem', // pl-6
        listStyleType: 'disc', // list-disc
        color: 'var(--text-tertiary)',
      }}
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: { children: ReactNode }) => (
    <ol
      style={{
        marginTop: '1.25rem', // mt-5
        marginBottom: '1.25rem', // mb-5
        paddingLeft: '1.5rem', // pl-6
        listStyleType: 'decimal', // list-decimal
        color: 'var(--text-tertiary)',
      }}
      {...props}
    >
      {children}
    </ol>
  ),
  // Enhanced list item
  li: ({ children, ...props }: { children: ReactNode }) => (
    <li
      style={{
        marginTop: '0.5rem', // mt-2
        marginBottom: '0.5rem', // mb-2
        paddingLeft: '0.5rem', // Add some padding
        lineHeight: '1.625', // Better line height for list items
        listStyle: 'inherit',
      }}
      {...props}
    >
      {children}
    </li>
  ),
  // Enhanced blockquote with better styling
  blockquote: ({ children, ...props }: { children: ReactNode }) => (
    <blockquote
      className="mdx-blockquote"
      style={{
        marginTop: '1.5rem', // mt-6
        marginBottom: '1.5rem', // mb-6
        borderLeft: '5px solid #374151', // Adaptive border
        padding: '0 .65rem 0 1rem',
        fontStyle: 'italic', // italic
        color: 'var(--text-primary)',
        fontWeight: '500',
      }}
      {...props}
    >
      {children}
    </blockquote>
  ),
  // Enhanced horizontal rule
  hr: ({ ...props }) => (
    <hr
      style={{
        height: '2px', // Slightly thicker
        marginTop: '2rem', // mt-8
        marginBottom: '2rem', // mb-8
        backgroundColor: 'var(--border-primary)',
        border: 'none', // Remove default border
        borderRadius: '1px', // Slightly rounded edges
      }}
      {...props}
    />
  ),
  // Enhanced table with better styling
  /* there's an issue somewhere here... (i don't have the time to fix it. lmao and i don't need the table anyway, fuck tables!) */
  table: ({ children, ...props }: { children: ReactNode }) => (
    <div
      style={{
        marginTop: '1.5rem',
        marginBottom: '1.5rem',
        width: '100%',
        overflowX: 'auto',
        borderRadius: '0.375rem',
        border: '1px solid var(--border-primary)',
        boxShadow: 'var(--shadow)',
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse' }} {...props}>
        {children}
      </table>
    </div>
  ),

  // Table header row
  thead: ({ children, ...props }: { children: ReactNode }) => (
    <thead
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '2px solid var(--border-primary)',
      }}
      {...props}
    >
      {children}
    </thead>
  ),

  // Table body
  tbody: ({ children, ...props }: { children: ReactNode }) => (
    <tbody {...props}>{children}</tbody>
  ),

  // Table row with zebra striping
  tr: ({
    children,
    index,
    ...props
  }: {
    children: ReactNode;
    index: number;
  }) => (
    <tr
      style={{
        borderTop: '1px solid var(--border-primary)',
        backgroundColor: index % 2 === 1 ? 'var(--bg-tertiary)' : 'transparent',
      }}
      {...props}
    >
      {children}
    </tr>
  ),

  th: ({ children, ...props }: { children: ReactNode }) => {
    let align: 'left' | 'center' | 'right' = 'left';
    let headerContent: ReactNode = children;

    if (typeof children === 'string') {
      if (children.startsWith(':') && children.endsWith(':')) {
        align = 'center';
        headerContent = children.slice(1, -1);
      } else if (children.startsWith(':')) {
        align = 'left';
        headerContent = children.slice(1);
      } else if (children.endsWith(':')) {
        align = 'right';
        headerContent = children.slice(0, -1);
      }
    }

    return (
      <th
        style={{
          border: '1px solid var(--border-primary)',
          padding: '0.75rem 1rem',
          textAlign: align,
          fontWeight: '700',
          color: 'var(--text-secondary)',
          backgroundColor: 'var(--bg-secondary)',
        }}
        {...props}
      >
        {headerContent}
      </th>
    );
  },

  td: ({ children, ...props }: { children: ReactNode }) => {
    let align: 'left' | 'center' | 'right' = 'left';
    let cellContent: ReactNode = children;

    if (typeof children === 'string') {
      if (children.startsWith(':') && children.endsWith(':')) {
        align = 'center';
        cellContent = children.slice(1, -1);
      } else if (children.startsWith(':')) {
        align = 'left';
        cellContent = children.slice(1);
      } else if (children.endsWith(':')) {
        align = 'right';
        cellContent = children.slice(0, -1);
      }
    }

    return (
      <td
        style={{
          border: '1px solid var(--border-primary)',
          padding: '0.75rem 1rem',
          textAlign: align,
          color: 'var(--text-tertiary)',
        }}
        {...props}
      >
        {cellContent}
      </td>
    );
  },
  // Enhanced code block with syntax highlighting support
  pre: ({ children, ...props }: { children: ReactNode }) => (
    <pre
      style={{
        marginTop: '1.5rem', // mt-6
        marginBottom: '1.5rem', // mb-6
        overflowX: 'auto', // overflow-x-auto
        borderRadius: '0.5rem', // rounded-lg (increased)
        border: '1px solid var(--border-secondary)', // Adaptive border
        backgroundColor: 'var(--bg-primary)', // Adaptive background
        padding: '1.25rem', // p-5
        color: 'var(--text-primary)',
        fontFamily:
          '"JetBrains Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', // Better monospace fonts
        fontSize: '0.875rem', // text-sm
        lineHeight: '1.7', // Improved line height for code
        boxShadow: 'var(--shadow)', // Adaptive shadow
      }}
      {...props}
    >
      {children}
    </pre>
  ),
  // Inline code with improved styling
  code: ({
    children,
    className,
    ...props
  }: {
    children: ReactNode;
    className?: string;
  }) => {
    // Check if this is an inline code or a code block
    const isInline = !className || !className.includes('language-');

    return isInline ? (
      <code
        style={{
          position: 'relative', // relative
          borderRadius: '0.25rem', // rounded
          backgroundColor: 'var(--bg-code)', // Adaptive background
          padding: '0.15rem 0.4rem', // Adjusted padding
          fontFamily:
            '"JetBrains Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', // Better monospace fonts
          fontSize: '0.875rem', // text-sm
          color: 'var(--text-code)',
          wordBreak: 'break-word', // Prevent overflow
          fontWeight: '500', // Medium weight for better readability
        }}
        {...props}
      >
        {children}
      </code>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  // Next.js Image component
  Image,
  // Mark (highlight) text
  mark: ({ children, ...props }: { children: ReactNode }) => (
    <mark
      style={{
        backgroundColor: 'var(--bg-highlight)', // Adaptive highlight color
        padding: '0 0.25rem',
        borderRadius: '0.125rem',
        color: 'var(--text-primary)', // Adaptive text color
      }}
      {...props}
    >
      {children}
    </mark>
  ),
  // Superscript
  sup: ({ children, ...props }: { children: ReactNode }) => (
    <sup
      style={{
        fontSize: '0.75rem',
        lineHeight: '0',
        position: 'relative',
        verticalAlign: 'baseline',
        top: '-0.5em',
        color: 'var(--text-tertiary)',
      }}
      {...props}
    >
      {children}
    </sup>
  ),
  // Subscript
  sub: ({ children, ...props }: { children: ReactNode }) => (
    <sub
      style={{
        fontSize: '0.75rem',
        lineHeight: '0',
        position: 'relative',
        verticalAlign: 'baseline',
        bottom: '-0.25em',
        color: 'var(--text-tertiary)',
      }}
      {...props}
    >
      {children}
    </sub>
  ),
  // Strong Element
  strong: ({ children, ...props }: { children: ReactNode }) => (
    <strong
      style={{
        fontWeight: '700', // Bold
        color: 'var(--text-primary)', // Adaptive text color
      }}
      {...props}
    >
      {children}
    </strong>
  ),
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
