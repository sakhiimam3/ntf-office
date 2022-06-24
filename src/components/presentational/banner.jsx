import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import Styles from "../../styles/banner.module.scss"
const banner = () => {
  return (
       <section className={Styles.banner}>
           <Container  fluid  >
               <Row>
                    <Col>
                       <h2  >explore collection</h2>
                    </Col>
              </Row> 

           </Container>
       </section>
  )
}

export default banner