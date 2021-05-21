import Layout from '../../components/layout'

import Image from 'next/image'

import Link from 'next/link'

import Row from '../../components/row'

import Col from '../../components/col'


import {getAllPeopleSlugs, getPersonBySlug} from '../../lib/api'

export async function getStaticPaths() {

    const allPeopleSlugs = await getAllPeopleSlugs()


    const paths = allPeopleSlugs.edges.map(edge => {
        const { slug } = edge.node
        return {
            params: {
                id : slug
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const peopleData = await getPersonBySlug(params.id)

    return {
        props : {
            peopleData
        }
    }
}

export default function PeopleData({ peopleData }) {

    const {title, featuredImage, content} = peopleData

    const {sourceUrl, mediaDetails, altText} = featuredImage.node

    const {width, height} = mediaDetails;

    return (
        <Layout>
            <Row>
                <Col>
                    <Link href="/people">
                        <a>
                        Back to People 
                        </a>
                    </Link>
                </Col>
            </Row>
        
            <Image
                src={sourceUrl}
                width={width}
                height={height}
                alt={altText}
            />
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content}}/>
        </Layout>
    )
}