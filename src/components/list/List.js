import React from 'react';
import {handleResponse} from '../../helpers'
import {API_URL} from '../../config'
import Loading from '../common/Loading'
import Pagination from './Pagination'
import Table from './Table'

class List extends React.Component {
    state = {
        loading: false,
        currencies: [],
        error: null,
        totalPages: 0,
        page: 1
    }

    componentDidMount() {
        this.setState({loading: true})
        this.fetchCorruncies();
    }

    fetchCorruncies() {
        const {page } = this.state
        fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`).then(handleResponse).then((data) => {
                const {currencies, totalPages} = data
            this.setState({
                currencies,
                totalPages,
                loading: false
            })
        }).catch((error) => {
            this.setState({
                error: error.errorMessage, 
                loading: false
            })
        });
    }

    handlePaginationClick = (direction) => {
        let nextPage = this.state.page;

        nextPage = direction === 'next' ? nextPage + 1 : nextPage-1;

        this.setState({page: nextPage}, () => {
            this.fetchCorruncies();
        })
    }

    render () {
        const {loading, error, currencies, page, totalPages } = this.state

        if(loading){
            return <div className="loading-container"><Loading></Loading></div>
        }

        if(error){
            return <div className="error">{error}</div>
        }

        return (
            <div>
                <Table 
                    currencies={currencies}
                />
                <Pagination 
                    page={page}
                    totalPages={totalPages}
                    handlePaginationClick={this.handlePaginationClick}
                />
             </div>
        )
    }
}

export default List;