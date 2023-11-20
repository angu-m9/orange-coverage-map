import { DataTypes } from 'sequelize';
import sequelize from '../data/db'; // Asegúrate de que la ruta de importación sea correcta

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_lastname: { // Cambiado de 'surname' a 'user_lastname' para ser consistente con tu controlador
    type: DataTypes.STRING,
    allowNull: false
  },
  postal_code: { // Cambiado de 'zip_code' a 'postal_code' para ser consistente con tu controlador
    type: DataTypes.STRING,
    allowNull: false
  },
  company_id: { // Este campo reemplaza el antiguo 'cellular_carrier'
    type: DataTypes.INTEGER,
    allowNull: false, // Asegúrate de si quieres que este campo sea obligatorio o no
    references: {
      model: 'Company', // Asegúrate de que este nombre coincida exactamente con el nombre de la tabla de compañías en tu base de datos
      key: 'company_id'
    }
  },
}, {
  tableName: 'Users',
  timestamps: false // Asegúrate si quieres o no manejar los timestamps automáticamente
});

export default User;
