import Item from "./Item";

export default interface ItemRepository {
    findById(idItem: number): Promise<Item>;
}