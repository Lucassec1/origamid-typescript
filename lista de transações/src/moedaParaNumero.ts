/**
 * Recebe string '1.700,87' retorna number: 1700.87
 */

export default function moedaParaNumero(moeda: string): number | null {
    const numero = Number(moeda.replaceAll(".", "").replace(",", "."));
    return isNaN(numero) ? null : numero;
}