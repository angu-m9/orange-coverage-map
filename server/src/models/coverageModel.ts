import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/server'; // Importa tu instancia de sequelize

class Coverage extends Model {
    public province!: string;
    public quality!: number;
}

Coverage.init(
    {
        province: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        },
        quality: {
        type: DataTypes.FLOAT, // Ajusta el tipo de dato según tus necesidades
        allowNull: false,
        },
    },
    {
        sequelize,
    modelName: 'coverage',
    }
);

export default Coverage;
