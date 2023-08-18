import express from 'express'
import ShipController from '../controllers/ShipController.js';
import paginar from '../middlewares/pagination.js';

const router = express.Router();

router.get('/ships',ShipController.listar,paginar)
router.post('/ships',ShipController.cadastrar)
router.put('/ships/:id',ShipController.atualizar)
router.delete('/ships/:id',ShipController.excluir)
router.post('/ships/deleteMany',ShipController.excluirMuitos)
router.get('/ships/uniqueAttributes',ShipController.listarAgrupado)

export default router;
