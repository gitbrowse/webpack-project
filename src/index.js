import _ from 'lodash';

import './index.css';
import print from './print';
import { cube } from './math'

function component() {

    const x = async () => {
        console.log(1);
        return 1;
    }

    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = 'root' + cube(2);
    element.classList.add('root')

    print();

    return element;
}

document.body.appendChild(component());
