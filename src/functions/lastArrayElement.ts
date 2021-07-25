export default function  lastArrayElement <TArrayType> (array: Array<TArrayType> ): TArrayType {
    return array[array.length - 1]
}