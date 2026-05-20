import { PipelineError } from '../pipeline/types';

export async function constraintExtractor(): Promise<never> {
  throw new PipelineError('constraint-extractor', new Error('not implemented'));
}
