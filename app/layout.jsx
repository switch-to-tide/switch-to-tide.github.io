import './globals.css';

export const metadata = {
  title: 'tide - the terminal ide',
  description:
    'A terminal IDE with a mouse-driven editor, real shells, git decorations and '
    + 'side by side diffs. No dependencies, one command to install.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
