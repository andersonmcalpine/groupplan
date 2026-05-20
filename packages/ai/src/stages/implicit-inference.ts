import { PipelineError } from '../pipeline/types';

export function implicitInference(): never {
  throw new PipelineError('implicit-inference', new Error('not implemented'));
}
