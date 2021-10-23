import DatabaseConnectionAdpter from "./DatabaseConnectionAdpter";


describe('Test DatabaseConnection', () => {

    test.skip('Shuold create a connection with database', async() => {
        const databaseConnection = new DatabaseConnectionAdpter();
        const items = await databaseConnection.query('select * from ccca.item', []);
        expect(items).toHaveLength(3);
    })

});