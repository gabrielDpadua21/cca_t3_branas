import DatabaseConnection from "./DatabaseConnection";
import Item from "./Item";
import ItemRepository from "./ItemRepository";


export default class ItemRepositoryDatabase implements ItemRepository {
    
    constructor (
        readonly databaseConnection: DatabaseConnection
    ) {}
    
    async findById(idItem: number): Promise<Item> {
       const [itemData] = await this.databaseConnection.query('select * from ccca_item where id_item = $1', [idItem]);
       return new Item(itemData.id_item, itemData.category, itemData.description, itemData.price);
    }

}