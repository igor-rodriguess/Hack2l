/* WHO Platform TypeScript Types */

// ===== User Types =====
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'talent' | 'company';
  avatar?: string;
}

export interface Talent extends User {
  role: 'talent';
  skills: Skill[];
  videos: Video[];
  tools: string[];
  availability: string;
  summary: string;
  safetyPractices: string[];
  projects: Project[];
  equipment: string[];
  certifications: string[];
}

export interface Company extends User {
  role: 'company';
  companyName: string;
  industry: string;
  size: 'startup' | 'pequena' | 'media' | 'grande';
  demands: Demand[];
}

// ===== Content Types =====
export interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: number;
  area: string;
  skills: string[];
  status: 'uploading' | 'processing' | 'ready' | 'error';
  createdAt: string;
  views: number;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: 1 | 2 | 3 | 4 | 5;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  area: string;
  duration: string;
}

// ===== Demand Types =====
export interface Demand {
  id: string;
  title: string;
  description: string;
  transcription: string;
  area: string;
  requiredSkills: string[];
  status: 'draft' | 'analyzing' | 'matching' | 'active' | 'closed';
  createdAt: string;
  matches: Match[];
}

// ===== Matching Types =====
export interface Match {
  id: string;
  talentId: string;
  demandId: string;
  score: number;
  strengths: string[];
  limitations: string[];
  evidence: string[];
  justification: string;
  skills: MatchDimension;
  tools: MatchDimension;
  availability: MatchDimension;
  communication: MatchDimension;
  safety: MatchDimension;
  precision: MatchDimension;
  speed: MatchDimension;
  innovation: MatchDimension;
  revealed: boolean;
  invited: boolean;
  status: 'pending' | 'revealed' | 'invited' | 'accepted' | 'rejected' | 'hired';
}

export interface MatchDimension {
  score: number;
  label: string;
  details: string;
}

export interface BlindProfile {
  profileNumber: number;
  score: number;
  skills: Skill[];
  tools: string[];
  strengths: string[];
  limitations: string[];
  evidence: string[];
  justification: string;
  videoSnippet: string;
  transcriptExcerpt: string;
}

// ===== Processing Types =====
export interface ProcessingStep {
  id: string;
  label: string;
  status: 'pending' | 'processing' | 'complete';
  progress: number;
}

// ===== Demand Flow Types =====
export interface DemandQuestion {
  id: string;
  question: string;
  answer: string;
  required: boolean;
}

export interface PipelineStage {
  id: string;
  label: string;
  candidates: string[];
}

// ===== UI Types =====
export interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration: number;
}

export interface SelectOption {
  value: string;
  label: string;
}

// ===== Utility Types =====
export type UserRole = 'talent' | 'company';
export type RecordingState = 'idle' | 'preparing' | 'recording' | 'paused' | 'finished' | 'uploading' | 'processing' | 'complete';
export type InputMethod = 'audio' | 'text';
export type DemandStatus = 'draft' | 'analyzing' | 'matching' | 'active' | 'closed';
export type MatchStatus = 'pending' | 'revealed' | 'invited' | 'accepted' | 'rejected' | 'hired';
export type CompanySize = 'startup' | 'pequena' | 'media' | 'grande';
