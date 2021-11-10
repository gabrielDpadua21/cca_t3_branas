import pgPromise from "pg-promise";
import DatabaseConnection from "./DatabaseConnection";

export default class DatabaseConnectionAdpter implements DatabaseConnection {
    pgPromise: any;
    
    constructor() {
        this.pgPromise = pgPromise()('postgres://root:Toor@1234@localhost:5432/ccat3')
    }
    
    query(statement: string, params: any) {
       return this.pgPromise.query(statement, params);
    }

}