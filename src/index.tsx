import * as React from 'react';
import * as ReactDom from 'react-dom';

import Search from './component/Search.compont';


class Hello extends React.PureComponent<{ }, { }> {
    render( ) {
        return (<div>
            <h1>Search component deom</h1>
            <Search fetchUrl="123" />
        </div>)
    }
}


ReactDom.render(
    <Hello />,
    document.getElementById('sss')
)



