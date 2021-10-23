import Item from './Item';
import ItemRepository from './ItemRepository';

export default class ItemRepositoryMemory implements ItemRepository {
    items: Item[];
    
    constructor() {
        this.items = [
            new Item(1, 'Tecnologia', 'Iphone', 5000),
            new Item(2, 'Tecnologia', 'AirPods', 1500),
            new Item(3, 'Tecnologia', 'Macbook', 15000)
        ]
    }
    
    async findById(idItem: number): Promise<Item> {
        const item = await this.items.find(item => item.idItem === idItem);
        if(!item) throw new Error('Item not found');
        return item;
    }
}