import { PipelineError } from '../pipeline/types';

export async function vibeEmbedder(): Promise<never> {
  throw new PipelineError('vibe-embedder', new Error('not implemented'));
}
