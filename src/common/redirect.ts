import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RedirectMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (!req.secure)
    {
        const httpsUrl = `https://${req.hostname}${req.originalUrl}`;
        // res.redirect(HttpStatus.PERMANENT_REDIRECT, httpsUrl);
        next();
    }
    else
    {
        next();
    }
  }
}
