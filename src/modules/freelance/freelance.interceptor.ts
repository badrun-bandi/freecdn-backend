import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class FreelanceInterceptor implements NestInterceptor {
  private readonly logger = new Logger(FreelanceInterceptor.name);
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next .handle()
      .pipe(
        tap(() => {
          this.logger.log(`request received in: ${Date.now() - now}ms`);
        }),
        catchError(err =>
          throwError(() => new HttpException(err, HttpStatus.BAD_GATEWAY))
        ));
  }
}
