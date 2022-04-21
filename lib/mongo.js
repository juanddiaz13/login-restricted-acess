const mongodb = require('mongodb');
const uri = "mongodb+srv://jd_diazc:vfBMS08WauJNpivI@cluster0.ybu0i.mongodb.net/db_test?retryWrites=true&w=majority";
const dataBase = "db_test";
let db;

const client = new mongodb.MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connect = async (dbName = dataBase) => {
  const conn = await client.connect();
  db = conn.db(dbName);
  console.log('<===== Database connected =====>');
};

const getDbRef = () => {
  return db ? db : new Error('Connection error');
};

module.exports = { connect, getDbRef };
