import type Lenis from 'lenis';

// Module-level holder so non-provider components (e.g. the mobile nav drawer)
// can pause/resume momentum scrolling without prop drilling or context.
let instance: Lenis | null = null;

export function setLenis(next: Lenis | null): void {
  instance = next;
}

export function getLenis(): Lenis | null {
  return instance;
}
