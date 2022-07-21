module.exports = {
  HOST: 'WCKR00150662A',
  PORT: '49170',
  USER: 'sa',
  PASSWORD: 'user001',
  DB: 'bezkoder_db',
  dialect: 'mssql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
