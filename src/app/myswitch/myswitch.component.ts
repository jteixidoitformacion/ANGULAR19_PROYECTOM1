import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-myswitch',
  standalone: true,
  imports: [],
  templateUrl: './myswitch.component.html',
  styleUrl: './myswitch.component.scss'
})
export class MyswitchComponent {
  color = signal('rojo');

  cambiarColor(nueva: string) {
    this.color.set(nueva);
  }
}
