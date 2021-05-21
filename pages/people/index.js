//custom components
import Layout from '../../components/layout'
import Section from '../../components/section'
import Row from '../../components/row'
import Col from '../../components/col'
import Card from '../../components/card'


import {getPeople} from '../../lib/api'

export async function getStaticProps() {

    const people = await getPeople()

    return {
        props: { people }
    }
}

export default function People({ people }) {
    return (
        <Layout>
            <Section title="People">
            <Row justifyContentCenter>
            {people.edges.map(edge => {
                const {title} = edge.node;
                return <Col sm={6} md = {4} lg = {3}>
                    <Card node={edge.node} parentPath = "people"/>
                </Col>
            })}
             </Row>
        </Section>
    </Layout>
    )
}
