import { PipelineError } from '../pipeline/types';

export async function dealbreakerDetector(): Promise<never> {
  throw new PipelineError('dealbreaker-detector', new Error('not implemented'));
}
