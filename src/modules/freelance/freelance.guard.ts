import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FreelanceService } from './freelance.service';

@Injectable()
export class FreelanceGuard implements CanActivate {
  constructor(private readonly freelanceService: FreelanceService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    return this.freelanceService.authenticate(request);
  }
}
