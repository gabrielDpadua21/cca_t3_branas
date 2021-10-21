import Cpf from './Cpf';
import Cupom from './Cupom';
import Item from './Item';
import OrderItem from './OrderItem';

export default class Order {
    cpf: Cpf;
    cupom: Cupom | undefined;
    orderItems: OrderItem[];

    constructor(cpf: string) {
        this.cpf = new Cpf(cpf);
        this.orderItems = [];
    }

    addItem(item: Item, quantity: number) {
        this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
    }

    addCupom(cupom: Cupom) {
        this.cupom = cupom;
    }

    getTotal() {
        let total = 0;
        for (const orderItem of this.orderItems) {
            total += orderItem.getTotal();
        }
        if(this.cupom) total -= total * (this.cupom.percentage / 100);
        return total
    }
}