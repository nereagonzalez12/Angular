export const productList: Product[] = [
    { id: 1, name: 'Lavandina', price: 10, description: 'Botella de 1 Litro' },
    { id: 2, name: 'Detergente', price: 5, description: 'Dura 120 lavados' },
    { id: 3, name: 'Escoba', price: 3, description: 'Tus vidrios transparentes' },
    { id: 4, name: 'Quita Grasa', price: 6, description: 'Cocina tranquilo' },
    { id: 5, name: 'Ambientador', price: 9 },

];

export interface Product {
    id: number | string;
    name: string;
    price: number;
    // Descripcion opcional
    description?: string;
}