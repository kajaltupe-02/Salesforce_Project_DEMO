import { api, LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    @api name = 'Kajal';
    @api age = 22;
}