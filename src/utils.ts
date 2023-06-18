export function assert(isError: boolean, msg: string): asserts isError {
    if (isError) throw new Error(msg);
}
