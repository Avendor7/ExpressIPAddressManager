import db from './../models';

const ipaddressController = {};

//post
ipaddressController.post = (req, res) =>{
    const{
        hostname,
        ipv4,
        ipv6,
        container,
        docker,
        vm,
        operating_system,
        description

    } = req.body;
    
    //validation either text or link, not both
    const ipaddress = new db.IpAddress({
        hostname,
        ipv4,
        ipv6,
        container,
        docker,
        vm,
        operating_system,
        description
    });

    ipaddress.save().then((newipaddress) => {
        return res.status(200).json({
            success: true,
            data: newipaddress
        });
    }).catch((err) => {
        return res.status(500).json({
            message: err,
        });
    })
};
//getAll
ipaddressController.getAll = (req, res) => {
    db.IpAddress.find({}).then((ipaddresss) => {
    return res.status(200).json({
            success: true,
            data: ipaddresss
        });
    }).catch((err) => {
        return res.status(500).json({
            message: err,
        });
    })
};

export default ipaddressController;