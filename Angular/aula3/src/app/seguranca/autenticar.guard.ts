import { CanActivateFn, Router } from '@angular/router';

export const autenticarGuard: CanActivateFn = (route, state) => {
  
  // importar a classe router
  const rota = new Router;

  // validaçao
  if(localStorage.getItem('email') == undefined) {
    rota.navigateByUrl('/login');
  }
  
  // Retorno
  return true;
};
