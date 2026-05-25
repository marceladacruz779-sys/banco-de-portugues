const areaModel = require('../Models/areaModels')

async function filtragem (req, res) {
    try{
        const Filtro = await areaModel.filtragem();
        res.status(200).json(Filtro);

    }catch(erro){
        res.status(500).json({
            
        })
    }
    
}