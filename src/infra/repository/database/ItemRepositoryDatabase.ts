
import Item from "../../../domain/entity/Item";
import ItemRepository from "../../../domain/repository/ItemRepository";
import DatabaseConnection from "../../database/DatabaseConnection";


export default class ItemRepositoryDatabase implements ItemRepository {
    
    constructor (
        readonly databaseConnection: DatabaseConnection
    ) {}
    
    async findById(idItem: number): Promise<Item> {
       const [itemData] = await this.databaseConnection.query('select * from ccca_item where id_item = $1', [idItem]);
       return new Item(itemData.id_item, itemData.category, itemData.description, itemData.price);
    }

}