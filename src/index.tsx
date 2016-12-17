import * as React from 'react';
import * as ReactDom from 'react-dom';


// Pure
class Hello extends React.PureComponent<{ }, { }> {
    render( ) {
        return (<div>
            <h1>123123</h1>
        </div>)
    }
}


ReactDom.render(
    <Hello />,
    document.getElementById('sss')
)



