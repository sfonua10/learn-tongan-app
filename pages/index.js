import Head from 'next/head'
import Flags from 'country-flag-icons/react/3x2'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex px-4 justify-between py-4 border-b-2">
        <Flags.TO title="United States" className="h-8" />
        <div>
          CROWN
        </div>
        <div>
          FIRE
        </div>
        <div>
          GEM
        </div>
        <div>
          ...
        </div>
      </header>
      <main>
        Intro
      </main>

      <footer >
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  )
}
