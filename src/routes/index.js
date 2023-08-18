import express from 'express'
import shipRoutes from './ShipRoutes.js'
import equipmentRoutes from './EquipmentRoutes.js'
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('OK')
    })

    app.use(
        express.json(),
        shipRoutes,
        equipmentRoutes
    )
}

export default routes