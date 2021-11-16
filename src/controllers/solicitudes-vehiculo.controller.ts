import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Solicitudes,
  Vehiculo,
} from '../models';
import {SolicitudesRepository} from '../repositories';

export class SolicitudesVehiculoController {
  constructor(
    @repository(SolicitudesRepository)
    public solicitudesRepository: SolicitudesRepository,
  ) { }

  @get('/solicitudes/{id}/vehiculo', {
    responses: {
      '200': {
        description: 'Vehiculo belonging to Solicitudes',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Vehiculo)},
          },
        },
      },
    },
  })
  async getVehiculo(
    @param.path.string('id') id: typeof Solicitudes.prototype.id,
  ): Promise<Vehiculo> {
    return this.solicitudesRepository.vehiculo(id);
  }
}
