import { PipelineError } from '../pipeline/types';

export async function narrativeGenerator(): Promise<never> {
  throw new PipelineError('narrative-generator', new Error('not implemented'));
}
