import express from 'express'
import EquipmentController from '../controllers/EquipmentController.js';
import paginar from '../middlewares/pagination.js';

const router = express.Router();

router.get('/equipments',EquipmentController.listar,paginar)
router.post('/equipments',EquipmentController.cadastrar)
router.put('/equipments/:id',EquipmentController.atualizar)
router.delete('/equipments/:id',EquipmentController.excluir)
router.post('/equipments/deleteMany',EquipmentController.excluirMuitos)
router.get('/equipments/uniqueAttributes',EquipmentController.listarAgrupado)

export default router;
