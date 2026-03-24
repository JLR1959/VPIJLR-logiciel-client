// Ajout de l'événement pour l'achat
$(document).ready(function () {
    // Initialiser Stripe
    const stripe = Stripe('votre_clé_publique_stripe'); // Remplacez par votre clé publique Stripe

    // Sélectionner la licence choisie
    $('#type-licence').change(function () {
        const selectedOption = $(this).find(":selected");
        const price = selectedOption.data('price');
        $('#prix-licence').text(`Prix: ${price}`);
    });

    // Lors de l'appui sur le bouton de paiement
    $('#payButton').click(function () {
        const selectedOption = $('#type-licence').val();
        const price = $('#prix-licence').text().replace('Prix: ', '');

        // Créez un checkout session côté serveur
        $.ajax({
            url: '/create-checkout-session', // Endpoint pour créer une session de paiement
            method: 'POST',
            data: JSON.stringify({ typeLicence: selectedOption, price: price }),
            contentType: 'application/json',
            success: function (sessionId) {
                stripe.redirectToCheckout({ sessionId: sessionId })
                    .then(function (result) {
                        if (result.error) {
                            alert(result.error.message);
                        }
                    });
            },
            error: function (error) {
                console.log("Erreur lors de la création de la session de paiement: ", error);
            }
        });
    });
});
