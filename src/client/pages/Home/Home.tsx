import Head from 'next/head'
import Link from 'next/link'

export function Home() {
    return (
        <div>
            <Head>
                <title>RPS</title>
            </Head>

            <main>
                <h1>Rock Paper Scissors</h1>
                <Link href="/game">Play!</Link>
            </main>
        </div>
    )
}
