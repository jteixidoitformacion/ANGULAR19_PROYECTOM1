import { Component, signal } from '@angular/core';
import { PerfMonitorComponent } from './perf-monitor/perf-monitor.component';
import { UserLoaderComponent } from './user-loader/user-loader.component';
import { DashboardIntegradorComponent } from './dashboard-integrador/dashboard-integrador.component';

@Component({
  selector: 'app-root',
  imports: [PerfMonitorComponent, UserLoaderComponent, DashboardIntegradorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly title = 'Laboratorio Angular 19';
  readonly exerciseId = signal<'signals' | 'resource' | 'linked-signal'>('signals');

  readonly exercises = [
    {
      id: 'signals',
      number: '01',
      label: 'Signals y computed',
      objective: 'Diagnostica el rendimiento en tiempo real.',
      concepts: ['signal()', 'computed()'],
    },
    {
      id: 'resource',
      number: '02',
      label: 'Resource API',
      objective: 'Carga datos asíncronos de forma declarativa.',
      concepts: ['resource()', '@if'],
    },
    {
      id: 'linked-signal',
      number: '03',
      label: 'Reto integrador',
      objective: 'Coordina un panel distribuido con linkedSignal.',
      concepts: ['linkedSignal()', 'computed()'],
    },
  ] as const;

  selectExercise(exerciseId: 'signals' | 'resource' | 'linked-signal'): void {
    this.exerciseId.set(exerciseId);
  }
}
