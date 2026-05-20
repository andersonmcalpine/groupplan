import { PipelineError } from '../pipeline/types';

export async function criticVerifier(): Promise<never> {
  throw new PipelineError('critic-verifier', new Error('not implemented'));
}
