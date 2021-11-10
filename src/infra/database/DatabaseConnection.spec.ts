import DatabaseConnectionAdpter from "./DatabaseConnectionAdpter";


describe('Test DatabaseConnection', () => {

    test('Shuold create a connection with database', async() => {
        const databaseConnection = new DatabaseConnectionAdpter();
        const items = await databaseConnection.query('select * from item', []);
        expect(items).toHaveLength(3);
    })

});