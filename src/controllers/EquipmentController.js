import EquipmentSchema from "../models/Equipment.js"
export default class EquipmentController {
    static listar = async (req, res, next) => {
        try {
            let {
                limit = 5, page = 1
            } = req.query;
            limit = parseInt(limit);
            page = parseInt(page);
            const rows = await EquipmentSchema
                .aggregate([{
                        $lookup: {
                            from: 'ships',
                            localField: 'ship_id',
                            foreignField: '_id',
                            as: 'ship'
                        }
                    },
                    {
                        $unwind: '$ship'
                    },
                    {
                        $project: {
                            _id: 1,
                            equipment: 1,
                            ship_nm: '$ship.ship_nm',
                            ship_id: '$ship_id',
                            createdAt: 1, // Adicionando createdAt no retorno
                            updatedAt: 1, // Adicionando updatedAt no retorno
                        }
                    }
                ]).skip((page - 1) * limit)
                .limit(limit)
                .exec()

            const countRes = await EquipmentSchema.countDocuments()

            res.status(200).json({
                count: countRes,
                rows: rows
            })
        } catch (error) {
            res.status(500).send('Erro')
        }

    }
    static cadastrar = async (req, res, next) => {
        try {
            const currentTime = new Date().toISOString(); // Obtém a data e hora atual

            const equipment = await EquipmentSchema.create({
                ...req.body
            });
            res.status(200).json(equipment)

            next()
        } catch (error) {
            res.status(500).send('Erro')
        }

    }
    static atualizar = async (req, res, next) => {
        try {
            const id = req.params.id
            const obj = {
                'equipment': req.body['equipment'],
                'ship_id': req.body['ship_id'],
            };
            const update = await EquipmentSchema.findByIdAndUpdate(id, obj)
            res.status(200).json(update)
        } catch (error) {
            res.status(500).send('Erro')
        }
    }
    static excluir = async (req, res, next) => {
        try {
            const id = req.params.id
            const update = await EquipmentSchema.findByIdAndDelete(id)
            res.status(200).json(update)
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
                const result  = await EquipmentSchema.deleteMany({
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
            const result = await EquipmentSchema.aggregate([
                {
                    $lookup: {
                        from: 'ships', // Nome da coleção de navios
                        localField: 'ship_id',
                        foreignField: '_id',
                        as: 'shipDetails'
                    }
                },
                {
                    $group: {
                        _id: null,
                        ship_nm: { $push: "$shipDetails.ship_nm" },
                        equipment: { $addToSet: "$equipment" }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        ship_nm: 1,
                        equipment: 1
                    }
                }
            ]);

            const shipNames = result[0].ship_nm.reduce((acc, curr) => acc.concat(curr), []);

            res.status(200).json({
                ship_nm: shipNames,
                equipment: result[0].equipment
            });
        } catch (error) {
            res.status(500).send('Erro');
        }
    }
}