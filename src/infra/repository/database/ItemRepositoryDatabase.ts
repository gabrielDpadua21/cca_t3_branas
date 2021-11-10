
import Item from "../../../domain/entity/Item";
import ItemRepository from "../../../domain/repository/ItemRepository";
import DatabaseConnection from "../../database/DatabaseConnection";


export default class ItemRepositoryDatabase implements ItemRepository {
    
    constructor (
        readonly databaseConnection: DatabaseConnection
    ) {}
    
    async findById(idItem: number): Promise<Item> {
       const [itemData] = await this.databaseConnection.query('select * from ccca_item where item_id = $1', [idItem]);
       return new Item(itemData.item_id, itemData.category, itemData.description, itemData.price);
    }

}