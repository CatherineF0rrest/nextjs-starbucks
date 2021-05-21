// next.js components 
import Head from 'next/head'

//custom components
import Layout from '../components/layout'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About | Catherine Forrest</title>
                <meta name="description" content="An about page"/>
            </Head>
            <h1>About</h1>

        </Layout>
    )

}