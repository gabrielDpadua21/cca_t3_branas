import Cpf from './Cpf';
import Cupom from './Cupom';
import Item from './Item';
import OrderItem from './OrderItem';

export default class Order {
    private cpf: Cpf;
    private cupom: Cupom | undefined;
    private orderItems: OrderItem[];
    private freight: number

    constructor(cpf: string, readonly issueDate: Date = new Date()) {
        this.cpf = new Cpf(cpf);
        this.orderItems = [];
        this.freight = 0;
    }

    addItem(item: Item, quantity: number) {
        this.freight = item.getFreight() * quantity;
        this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
    }

    addCupom(cupom: Cupom) {
        if (cupom.isExpired(this.issueDate)) return
        this.cupom = cupom;
    }

    getFreight() {
        return this.freight;
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