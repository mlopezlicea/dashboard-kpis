export interface Ticket {
  id: number;
  nombre: string;
  estado: string;
  fechaCreacion: Date;
  fechaCierre?: Date; // Opcional, porque puede no estar cerrado
}

export const TICKETS: Ticket[] = [
  {
    id: 1,
    nombre: 'Integración API',
    estado: 'Abierto',
    fechaCreacion: new Date('2025-04-25T09:00:00'),
  },
  {
    id: 2,
    nombre: 'Servicio SMC Down',
    estado: 'Cerrado',
    fechaCreacion: new Date('2025-04-25T11:00:00'),
    fechaCierre: new Date('2025-04-25T12:00:00'),
  },
  {
    id: 3,
    nombre: 'Error Gestor Documental',
    estado: 'En progreso',
    fechaCreacion: new Date('2025-04-26T08:30:00'),
  },
];
