import '../scripts/flexiblecssjs.js';//导入手淘适配解决方案
import './main.less';

import React from 'react';
import Index from './Index/index';
import Hello from './Hello/Hello';

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
            	<Hello/>
               {this.props.children || <Index/>}
            </div>
        );
    }
}