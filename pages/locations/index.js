//custom components
import Layout from '../../components/layout'
import Section from '../../components/section'
import Row from '../../components/row'
import Col from '../../components/col'
import Card from '../../components/card'


import {getLocations} from '../../lib/api'

export async function getStaticProps() {

    const locations = await getLocations()

    return {
        props: { locations }
    }
}

export default function Locations({ locations }) {
    return (
        <Layout>
            <Section title="Locations">
            <Row justifyContentCenter>
            {locations.edges.map(edge => {
                const {title} = edge.node;
                return <Col sm={6} md = {4} lg = {3}>
                    <Card node={edge.node} parentPath = "locations"/>
                </Col>
            })}
             </Row>
        </Section>
    </Layout>
    )
}
