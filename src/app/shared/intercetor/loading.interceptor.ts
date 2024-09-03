import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoadingService } from '../../services/loading.service';

var pendingReq = 0;
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.showLoading();
    pendingReq = pendingReq + 1;
    return next.handle(request).pipe(
      tap({
        next: (event: HttpEvent<unknown>) => {
          if (event.type === HttpEventType.Response) {
            this.handleHideLoading();
          }
        },
        error: (_) => {
          this.handleHideLoading();
        }
      })
    );
  }
 private handleHideLoading() {
    pendingReq = pendingReq - 1;
    if (pendingReq === 0) {
      this.loadingService.hideLoading();
    }
  }
}


