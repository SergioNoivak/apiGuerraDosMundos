

export default async function paginar(req,res,next){
    let {limit=5,page=1}  = req.query;
    limit = parseInt(limit);
    page = parseInt(page);
    const count = await req.count;
    const resultado = await req.rows.find()
    .skip((page - 1) * limit)
    .limit(limit)
    .exec()

    res.status(200).json({
        count:count,
        rows:resultado
    })
}