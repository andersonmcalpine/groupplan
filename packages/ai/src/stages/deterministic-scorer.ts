import { PipelineError } from '../pipeline/types';

export function score(): never {
  throw new PipelineError('deterministic-scorer', new Error('not implemented'));
}

export const deterministicScorer = score;
