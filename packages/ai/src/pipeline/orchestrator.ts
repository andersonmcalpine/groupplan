// Model selection via ANTHROPIC_MODEL_REASONING and ANTHROPIC_MODEL_FAST env vars
import { dealbreakerDetector } from '../stages/dealbreaker-detector';
import { implicitInference } from '../stages/implicit-inference';
import { constraintExtractor } from '../stages/constraint-extractor';
import { menuPhantom } from '../stages/menu-phantom';
import { deterministicScorer } from '../stages/deterministic-scorer';
import { vibeEmbedder } from '../stages/vibe-embedder';
import { reranker } from '../stages/reranker';
import { fairnessChecker } from '../stages/fairness-checker';
import { reasoningEngine } from '../stages/reasoning-engine';
import { criticVerifier } from '../stages/critic-verifier';
import { narrativeGenerator } from '../stages/narrative-generator';
import { runParallel } from './parallel-runner';
import { PipelineResult, PipelineError } from './types';

void dealbreakerDetector;
void implicitInference;
void constraintExtractor;
void menuPhantom;
void deterministicScorer;
void vibeEmbedder;
void reranker;
void fairnessChecker;
void reasoningEngine;
void criticVerifier;
void narrativeGenerator;
void runParallel;

export async function runPipeline(eventId: string): Promise<PipelineResult> {
  void eventId;
  throw new PipelineError('load-event-data', new Error('not implemented'));
}
