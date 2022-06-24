import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import CreateForm from '../components/presentational/createForm'
import Styles from "../styles/create.module.scss"
import Create from './create'
const CreateMultipleNft = (props) => {
    const {id}=useParams()
    const {data}=props
    const filter=data.filter(e => e.id === id)
   
  return (
    <>
        <div className="container">
          <div className="col-sm-9 col-md-7">
                  <CreateForm  title={filter} />
          </div>
        </div>

          
    </>
  )
}

export default CreateMultipleNft
