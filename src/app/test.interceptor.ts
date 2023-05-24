import { HttpInterceptorFn } from '@angular/common/http';

export const testInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('testInterceptor', req.url);

  const clonedReq = req.clone({
    setHeaders: {
      'X-Test-Header': 'test',
    },
  });

  return next(clonedReq);
};
