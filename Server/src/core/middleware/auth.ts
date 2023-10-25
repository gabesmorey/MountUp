import {Router, Request, Response, NextFunction} from 'express';
import { UnauthorizedError } from '../errors/user';

export const isLoggedIn = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const me = req.session.Me;

        if(me && me.username.length > 0){
            next();
        }else{
            throw new UnauthorizedError("You are not logged in");
        }
    }catch(err: any){
        req.session.destroy((err)=>{console.log("Session destruction error: ", err)});
        next(err);
    }
}

export const isAdmin = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const me = req.session.Me;

        if(me && me.isAdmin && me.username.length > 0){
            next();
        }else{
            throw new UnauthorizedError("You are not an admin");
        }
    }catch(err: any){
        req.session.destroy((err)=>{console.log("Session destruction error: ", err)});
        next(err);
    }
}