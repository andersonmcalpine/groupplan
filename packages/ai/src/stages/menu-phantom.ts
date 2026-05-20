import { PipelineError } from '../pipeline/types';

export async function enrich(): Promise<never> {
  throw new PipelineError('menu-phantom', new Error('not implemented'));
}

export const menuPhantom = enrich;
