import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Expense Tracker</title>
        <meta name="description" content="Expense Tracker Application" />
        {/* Add any other meta tags or links to external resources here */}
      </Head>
      <div>{children}</div>
    </>
  );
}
