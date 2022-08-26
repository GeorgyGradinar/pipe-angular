import { ReduceNumberPipe } from './reduce-number.pipe';

describe('ReduceNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new ReduceNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
