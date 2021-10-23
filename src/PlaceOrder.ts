import Order from "./Order";
import ItemRepository from "./ItemRepository";
import OrderRepository from "./OrderRepository";

export default class PlaceOrder {
    constructor(
        readonly itemRepository: ItemRepository,
        readonly orderRepository: OrderRepository
    ) {}

    async execute(input: any): Promise<any> {
        const order = new Order(input.cpf);
        for (const orderItem of input.orderItems) {
            const item = await this.itemRepository.findById(orderItem.idItem);
            order.addItem(item, orderItem.quantity);
        }
        this.orderRepository.save(order);
        return {
            total: order.getTotal()
        }
    }

}