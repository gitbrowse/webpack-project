import _ from 'lodash';

import './index.css';
import print from './print';
import { cube } from './math';


interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: {color: string}) {
    config.color = '1';
}

const config = { color: 'red', width: 100, a: 'red' };

createSquare(config);

function f(param: { a: string }) {}
const x = {a: '1', b: 1};
f(x);
