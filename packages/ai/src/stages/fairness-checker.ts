import { PipelineError } from '../pipeline/types';

export function fairnessChecker(): never {
  throw new PipelineError('fairness-checker', new Error('not implemented'));
}
