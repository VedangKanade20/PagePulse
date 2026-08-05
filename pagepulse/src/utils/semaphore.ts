export class Semaphore {
  private permits: number;

  private waiting: Array<() => void> = [];

  constructor(maxConcurrency: number) {
    this.permits = maxConcurrency;
  }

  async acquire() {
    if (this.permits > 0) {
      this.permits--;
      return;
    }

    await new Promise<void>((resolve) => {
      this.waiting.push(resolve);
    });
  }

  release() {
    if (this.waiting.length > 0) {
      const next = this.waiting.shift();

      next?.();

      return;
    }

    this.permits++;
  }
}
