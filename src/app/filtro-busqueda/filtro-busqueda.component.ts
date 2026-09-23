import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-filtro-busqueda',
  standalone: true,
  imports: [],
  templateUrl: './filtro-busqueda.component.html',
  styleUrl: './filtro-busqueda.component.scss',
})
export class FiltroBusquedaComponent {
  termino = signal<string>('');
  actualizarTermino(event: Event) {
    const input = event.target as HTMLInputElement;
    this.termino.set(input.value);
  }
  limpiar() {
    this.termino.set('');
  }
}
