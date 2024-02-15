// models/CarsModel.js
const Cars = require('./CarsModel.js');

class CarsModel {
        static async getCars() {
                try {
                        const Carss = await Cars.findAll();
                        return Carss;
                } catch (error) {
                        console.error('Error fetching Carss:', error);
                        throw error;
                }
        }

        static async createCars(CarsData) {
                try {
                        console.log('Adding Cars with data:', CarsData);
                        const newCars = await Cars.create(CarsData);
                        console.log('Cars added successfully:', newCars);
                        return newCars;
                } catch (e) {
                        console.error('Error adding Cars:', e);
                        throw e;
                }
        }


        static async deleteCars(id) {
                try {
                        const Cars = await Cars.destroy({
                                where: { id: id }
                        });

                        return Cars;
                } catch (error) {

                }
        }
}

module.exports = CarsModel;
