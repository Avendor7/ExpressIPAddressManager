const basicController = {};

basicController.get = (req, res) =>{
    res.json({
        message: 'Woo API, express is working'
    });
};

export default basicController;