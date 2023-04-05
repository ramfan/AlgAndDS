export function assert(isTrue: boolean, message: string): asserts isTrue {
    if(!isTrue){
        throw new Error(message);
    }
}