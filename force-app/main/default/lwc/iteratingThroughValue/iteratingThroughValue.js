import { LightningElement } from 'lwc';

export default class IteratingThroughValue extends LightningElement {
    Contacts=[
        { id: 1, name: 'Tom', age: 20, city: 'London' },
        { id: 2, name: 'Jerry', age: 25, city: 'New York' },
        { id: 3, name: 'Spike', age: 30, city: 'Paris' },
        { id: 4, name: 'Tyke', age: 35, city: 'Tokyo' },
        { id: 5, name: 'Spike', age: 40, city: 'Berlin' },
        { id: 6, name: 'Tyke', age: 45, city: 'Sydney' },
        { id: 7, name: 'Spike', age: 50, city: 'Rio de Janeiro' },
        { id: 8, name: 'Tyke', age: 55, city: 'Cairo' },
        { id: 9, name: 'Spike', age: 60, city:'Mumbai'}
    ]
    handleClick(){
        this.Contacts.push({ id: 10, name: 'Tom', age: 20, city: 'London' });
    }
}

