import Pagination from 'react-bootstrap/Pagination'
import React from 'react'


const PaginationBasic = (props) => {
    return <>
        <Pagination>
            <Pagination.First onClick={() => props.onPageChanged(1)} />
            <Pagination.Prev onClick={() => 
                { 
                    if (props.currentPage > 1) props.onPageChanged(props.currentPage - 1) 
                    }} />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next onClick={() => { 
                if (props.currentPage <= props.totalPages) props.onPageChanged(props.currentPage + 1) }} />
            <Pagination.Last />
        </Pagination>
    </>
}


export default PaginationBasic