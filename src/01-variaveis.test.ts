import { describe, expect, it } from 'vitest';

import {
  calcularQuadrado,
  calcularQuadradoForEach,
  concatenarArray,
  doisPrimeiros,
  extrairPares,
  ordenar,
} from './01-variaveis.js';

describe('01-variaveis', () => {
	it('calcula quadrados com for', () => {
		expect(calcularQuadrado([3, 5, 7])).toEqual([9, 25, 49]);
	});

	it('calcula quadrados com forEach', () => {
		expect(calcularQuadradoForEach([3, 5, 7])).toEqual([9, 25, 49]);
	});

	it('concatena strings com espaco', () => {
		expect(concatenarArray(['Arrays', 'com', 'TypeScript'])).toBe(
			'Arrays com TypeScript',
		);
	});

	it('ordena strings em ordem decrescente', () => {
		expect(ordenar(['carro', 'boneco', 'ave', 'lapis'])).toEqual([
			'ave',
			'boneco',
			'carro',
			'lapis',
		]);
	});

	it('retorna os dois primeiros elementos', () => {
		expect(doisPrimeiros([2, 4, 6, 2, 8, 9, 5])).toEqual([2, 4]);
	});

	it('extrai os numeros pares', () => {
		expect(extrairPares([8, 3, 9, 5, 6, 12])).toEqual([8, 6, 12]);
	});
});
