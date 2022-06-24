import React,{useState,useEffect} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css"
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import "../../styles/datatable.css"

const TableList = () => {
  const [datalist,setDatalist]=useState([])
  const Api="https://jsonplaceholder.typicode.com/users";

  
  const columns = [{
    dataField: 'id',
    text: 'Product ID',
    width:'20px',
    headerStyle: (colum, colIndex) => {
      return { width: '10px', textAlign: 'center' };
    }
 
    
  }, {
    dataField: 'name',
    text: 'Name',
    sort:true,
    headerStyle: (colum, colIndex) => {
      return { width: '0px', textAlign: 'center' ,};
    },
  

    filter:textFilter()
  }, {
    dataField: 'username',
    text: 'Username',
    sort:true,
    filter:textFilter(),
    headerStyle: (colum, colIndex) => {
      return { width: '100px', textAlign: 'center' };
    }
  },
  {
    dataField: 'email',
    text: 'Email',
    sort:true,
    headerStyle: (colum, colIndex) => {
      return { width: '90px', textAlign: 'center' };
    },
    filter:textFilter(),
  
  }

];
   const paigination=paginationFactory(
     {
       page:1,
       sizePerPage:5,
       lastPageText:">>",
       firstPageText:"<<",
       nextPageText:"Next",
       prePageText:"Pre",
       showTotal:true,
       alwaysShowAllBtns:true,
       onPageChange:function(page,sizePerpage){
           console.log("page",page)
           console.log("sizeperpage",sizePerpage)
       },
       onSizePerPageChange:function(page,sizePerpage){
        console.log("page",page)
        console.log("sizeperpage",sizePerpage)
       }
           
     }
   )

  useEffect(()=>{
 
    fetch(Api)
    .then(response => response.json())
    .then(data =>setDatalist(data))
    .catch((err)=>{
         console.log(err)
    })

  },[])

  return (
    <>
       <div  style={{width:"1200px",margin:'auto'}}>
          <BootstrapTable 
      
           bootstrap4 
      keyField='id'   
        columns={columns} 
         data={datalist} 
       pagination={paigination}
       filter={filterFactory()}
       headerClasses='sticky-header'

       />
      
      </div>
      
          
    </>
  )
}

export default TableList