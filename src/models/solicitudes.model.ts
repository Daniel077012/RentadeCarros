import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Cliente} from './cliente.model';
import {Asesor} from './asesor.model';
import {Administrador} from './administrador.model';
import {Vehiculo} from './vehiculo.model';

@model()
export class Solicitudes extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  tipodealquiler: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'number',
    required: true,
  })
  estado: number;

  @property({
    type: 'string',
    required: true,
  })
  departamento: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @belongsTo(() => Cliente)
  clienteId: string;

  @belongsTo(() => Asesor)
  asesorId: string;

  @belongsTo(() => Administrador)
  administradorId: string;

  @belongsTo(() => Vehiculo)
  vehiculoId: string;

  constructor(data?: Partial<Solicitudes>) {
    super(data);
  }
}

export interface SolicitudesRelations {
  // describe navigational properties here
}

export type SolicitudesWithRelations = Solicitudes & SolicitudesRelations;
