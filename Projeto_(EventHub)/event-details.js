// Multiplica o preço unitário em centavos pela quantidade escolhida.
function calculateTicketTotal(unitPriceInCents, quantity) {
    return unitPriceInCents * quantity;
}

// Aguarda o HTML ser carregado antes de buscar os elementos do seletor e do total.
document.addEventListener('DOMContentLoaded', () => {
    const quantitySelect = document.querySelector('#ticket-quantity');
    const totalPrice = document.querySelector('#multiple-ticket-total');
    // O preço vem do atributo data-unit-price no HTML e é mantido em centavos.
    const unitPriceInCents = Number(totalPrice.dataset.unitPrice);
    // Formata o resultado como moeda brasileira (R$).
    const currency = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    // Sempre que a quantidade muda, calcula e atualiza o total exibido.
    quantitySelect.addEventListener('change', () => {
        const quantity = Number(quantitySelect.value);
        totalPrice.textContent = currency.format(
            calculateTicketTotal(unitPriceInCents, quantity) / 100
        );
    });
});
