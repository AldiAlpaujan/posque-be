import express from 'express';
import { UserController } from '../controllers/user-controller';
import { publicApiPaths } from './paths';

export const publicRouter = express.Router();

publicRouter.post(publicApiPaths.register, UserController.register);