import {Component} from 'san';
import './style.css';

class HelloComponent extends Component {

  constructor(options) {
        super(options);
    }

    static template = '<div>Hello, <span class="hello">{{name}}</span></div>';

    initData() {
      return {name: 'San !!!'}
    }

}

new HelloComponent().attach(document.body);