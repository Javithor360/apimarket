import { config } from 'dotenv'
config()

export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.MYSQLHOST || 'mysql.railway.internal'
export const DB_PORT = process.env.MYSQLPORT || 3306
export const DB_USER = process.env.MYSQLUSER || 'root'
export const DB_PASSWORD = process.env.MYSQLPASSWORD || 'szgJFkfmagMrDcQQsLgNURiNZlbqopzI'
export const DB_DATABASE = process.env.MYSQLDATABASE || 'railway'
