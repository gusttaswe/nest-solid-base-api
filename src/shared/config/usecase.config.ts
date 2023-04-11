import { Result } from './neverthrow.config';

export abstract class UseCase<T, R, E> {
  public abstract execute(dto: T): Promise<Result<R, E>>;
}
