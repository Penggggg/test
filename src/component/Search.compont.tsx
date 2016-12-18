import * as React from 'react';

import Seletor from '../selector';
import SearchInput from '../rice/SearchInput.component';
import List from '../rice/List.component';

import { SearchDecorate } from '../decorator/Search.decorate';

@SearchDecorate
export default class Search extends React.PureComponent< IProps, { }> {

    render( ) {
        return (
            <Seletor {...this.props}>
                <h1>{this.props.fetchUrl}</h1>
                <SearchInput />
                <List />
            </Seletor>
        )
    }
}



interface IProps {
    fetchUrl: string
}

