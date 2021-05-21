// next.js components 
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../components/container'
// custom componets
import Layout, { siteTitle } from '../components/layout'
import Button from '../components/button'

// styles


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
  
      <Container>
         <Link href="/">
            <a>
            <Image
                        src="/images/drink-lineup.jpg"
                        width={520}
                        height={300}
                       
                        alt="Starbucks Lineup" 
                    />
                </a> 
            </Link>
          </Container>
   

      <section>
        
        <Button 
          label="View Portfolio" 
          path="/portfolio"
          type="primary"
          />

        <Button 
          label="About Me" 
          path="/about"
          type="secondary"
          />
        
        <Button 
          label="View Menu" 
          path="/menu"
          type="primary"
          />

        <Button 
          label="View Locations" 
          path="/locations"
          type="secondary"
          />

        <Button 
          label="View People" 
          path="/people"
          type="primary"
          />

          
      </section>
    </Layout>
  )
}