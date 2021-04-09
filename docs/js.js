$(document).ready(function () {
    $("#button_ts").click(function () {
        var error = false
        var minutes = parseInt($("#minute").val())
        var bc = $("#bc").val();
        var echelon = $("#echelon").val()

        var prix_minute;
        var echelle = parseInt(bc + echelon);

        switch (echelle) {
            case 12:
                prix_minute = 0.2614
                break;
            case 13:
                prix_minute = 0.2657
                break;
            case 14:
                prix_minute = 0.2701
                break;
            case 15:
                prix_minute = 0.2744
                break;
            case 16:
                prix_minute = 0.2788
                break;
            case 17:
                prix_minute = 0.2831
                break;
            case 18:
                prix_minute = 0.2875
                break;
            case 22:
                prix_minute = 0.2704
                break;
            case 23:
                prix_minute = 0.2749
                break;
            case 24:
                prix_minute = 0.2794
                break;
            case 25:
                prix_minute = 0.2839
                break;
            case 26:
                prix_minute = 0.2884
                break;
            case 27:
                prix_minute = 0.2929
                break;
            case 28:
                prix_minute = 0.2974
                break;
            case 32:
                prix_minute = 0.2795
                break;
            case 33:
                prix_minute = 0.2842
                break;
            case 34:
                prix_minute = 0.2889
                break;
            case 35:
                prix_minute = 0.2935
                break;
            case 36:
                prix_minute = 0.2982
                break;
            case 37:
                prix_minute = 0.3029
                break;
            case 38:
                prix_minute = 0.3075
                break;
            case 42:
                prix_minute = 0.2886
                break;
            case 43:
                prix_minute = 0.2934
                break;
            case 44:
                prix_minute = 0.2983
                break;
            case 45:
                prix_minute = 0.3030
                break;
            case 46:
                prix_minute = 0.3079
                break;
            case 47:
                prix_minute = 0.3127
                break;
            case 48:
                prix_minute = 0.3175
                break;
            case 52:
                prix_minute = 0.2978
                break;
            case 53:
                prix_minute = 0.3028
                break;
            case 54:
                prix_minute = 0.3077
                break;
            case 55:
                prix_minute = 0.3127
                break;
            case 56:
                prix_minute = 0.3177
                break;
            case 57:
                prix_minute = 0.3227
                break;
            case 58:
                prix_minute = 0.3276
                break;
            case 63:
                prix_minute = 0.3101
                break;
            case 64:
                prix_minute = 0.3152
                break;
            case 65:
                prix_minute = 0.3204
                break;
            case 66:
                prix_minute = 0.3255
                break;
            case 67:
                prix_minute = 0.3308
                break;
            case 68:
                prix_minute = 0.3359
                break;
            case 74:
                prix_minute = 0.3234
                break;
            case 75:
                prix_minute = 0.3288
                break;
            case 76:
                prix_minute = 0.3342
                break;
            case 77:
                prix_minute = 0.3396
                break;
            case 78:
                prix_minute = 0.3449
                break;
            case 84:
                prix_minute = 0.3354
                break;
            case 85:
                prix_minute = 0.3409
                break;
            case 86:
                prix_minute = 0.3465
                break;
            case 87:
                prix_minute = 0.3521
                break;
            case 88:
                prix_minute = 0.3577
                break;
            default:
                var error = true;
                console.log(`Désole BC${bc} avec echelon ${echelon}`);
        }


        function calcul_ts(minutes, prix_minute) {

            return Math.round((minutes * prix_minute) * 100) / 100

        }

        if (isNaN(minutes)) error = true

        if (error) {
            $("#error").removeClass('hidden')
            $("#resultat").addClass('hidden')

            if (isNaN(minutes)) {
                $("#error").html(
                    "Veuillez entrer un nombre valide sans virgule ni point"
                );
            } else {
                $("#error").html(
                    `Désole BC${bc} avec echelon ${echelon} n'existe pas `
                );
            }
        } else {

            $("#error").addClass('hidden')
            $("#resultat").removeClass('hidden')
            $("#resultat").html(
                `Pour <span>${minutes}</span> minutes vous percevrez <span>${calcul_ts(minutes, prix_minute)}</span> euros`
            );
        }

    });
});