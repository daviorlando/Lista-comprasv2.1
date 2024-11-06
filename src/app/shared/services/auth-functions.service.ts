import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthFunctionsService {
    constructor(private auth: AuthService) { }

    // Função para obter o user ID como uma Promise
    async getUserId(): Promise<string | undefined> {
        const user = await firstValueFrom(this.auth.user$);
        return user?.sub;
    }

    // Outras funções relacionadas ao Auth0 podem ser adicionadas aqui
}
