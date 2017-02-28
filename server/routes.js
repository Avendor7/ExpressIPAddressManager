import express from 'express';

//controller imports
import basicController from './controllers/basicController';
import ipaddressController from './controllers/ipaddressController';



const routes = express();
//Basic Routes
routes.get('/', basicController.get);

//IP Address Routes
routes.post('/ipaddress', ipaddressController.post);
routes.get('/ipaddress', ipaddressController.getAll);

export default routes; 