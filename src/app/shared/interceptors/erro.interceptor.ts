import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage = 'Ocorreu um erro inesperado. Tente novamente mais tarde.';

                if (error.status === 0) {
                    errorMessage = 'Falha de conexão com o servidor. Verifique sua conexão e tente novamente.';
                } else if (error.status === 500) {
                    errorMessage = 'Erro no servidor. Por favor, tente novamente mais tarde.';
                } else if (error.status === 401) {
                    errorMessage = 'Sessão expirada. Faça login novamente.';
                    this.router.navigate(['/login']);
                }

                alert(errorMessage); // Exibe a mensagem de erro amigável
                return throwError(errorMessage); // Retorna o erro tratado
            })
        );
    }
}