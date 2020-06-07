module.exports = {
    dialect: "postgres",
    host: 'localhost',
    username: 'fabriz_pedro',
    password: 'medicine',
    database: 'sqlNode',
    define: {
        timestamps: true,
        underscore: true,
        "createdAt": "created_at",
        "updatedAt": "updated_at"
    },
};