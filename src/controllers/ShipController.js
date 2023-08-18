import ShipSchema from "../models/Ship.js"
export default class ShipController {
    static listar = async (req, res, next) => {
        try {
            const rows = ShipSchema.find();
            const count = ShipSchema.countDocuments();

            req.rows = rows;
            req.count = count;
            next()
        } catch (error) {
            res.status(500).send('Erro')
        }
    }
    static cadastrar = async (req, res, next) => {
        try {
            const shipCreated = await ShipSchema.create(req.body)
            res.status(200).json(shipCreated)
        } catch (error) {
            res.status(500).send('Erro')
        }
    }
    static atualizar = async (req, res, next) => {
        try {
            const id = req.params.id
            const obj = {
                'ship_nm': req.body['ship_nm'],
                'ship_sg': req.body['ship_sg'],

            };
            const update = await ShipSchema.findByIdAndUpdate(id, obj)
            res.status(200).json(update)
        } catch (error) {
            res.status(500).send('Erro')
        }
    }
    static excluir = async (req, res, next) => {
        try {

            const {
                id
            } = req.params;
            if (id) {
                const finded = await ShipSchema.findByIdAndDelete(id, {
                    $set: req.body
                });
                res.status(200).send('Excluido com sucesso')

            }
        } catch (error) {
            res.status(500).send('Erro')

        }

    }

    static excluirMuitos = async (req, res, next) => {
        try {
            const {
                ids
            } = req.body

            if (Array.isArray(ids)) {
                const result  = await ShipSchema.deleteMany({
                    _id:{ $in:ids}
                })
                res.status(200).json({ message: `${result.deletedCount} registros deletados.` });

            }
        } catch (error) {
            res.status(500).send('Erro')

        }
    }
    static listarAgrupado = async (req, res, next) => {
        try {
            const result = await ShipSchema.aggregate([
                {
                    $group: {
                        _id: null,
                        ship_nm: { $addToSet: "$ship_nm" },
                        ship_sg: { $addToSet: "$ship_sg" }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        ship_nm: 1,
                        ship_sg: 1
                    }
                }
            ]);

            res.status(200).json(result[0]);

        } catch (error) {
            res.status(500).send('Erro');
        }
    }
}