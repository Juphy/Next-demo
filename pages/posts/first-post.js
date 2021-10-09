import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost(){
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a className="foo" rel="noopener noreferrer">Back to home</a>
                </Link>
            </h2>
        </Layout>    
    )
}