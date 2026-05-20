import { PipelineError } from '../pipeline/types';

export async function reranker(): Promise<never> {
  throw new PipelineError('reranker', new Error('not implemented'));
}
