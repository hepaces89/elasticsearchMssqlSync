const mssql = require('mssql')
const elastic = require('elasticsearch')

const sqlPool = new mssql.ConnectionPool(config).connect();

async () => {
    await sqlPool;
    try{
        const request = sqlPool.request();
        const result = request.query('select 1 as number');
        
    } catch(error){
        console.error(error);
    }
}