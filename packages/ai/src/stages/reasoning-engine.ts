import { PipelineError } from '../pipeline/types';

export async function reasoningEngine(): Promise<never> {
  throw new PipelineError('reasoning-engine', new Error('not implemented'));
}
