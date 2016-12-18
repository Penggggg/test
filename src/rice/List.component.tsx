import * as React from 'react';

export default class List extends React.PureComponent< IProps, { }> {

    static needProps = ['data']


    render( ) {
        return <div>{ this.props.data }</div>
    }
}

interface IProps {
    data?: any
}