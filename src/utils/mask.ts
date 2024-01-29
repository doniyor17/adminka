import { maskTransform } from 'v-slim-mask';

export function phoneMask (value: string) {
  return maskTransform(value, '+NNN (NN)-NNN-NN-NN');
}