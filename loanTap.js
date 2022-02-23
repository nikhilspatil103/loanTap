const cardEvents = [
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '2ace1ea9-b57e-4d0c-926c-d570450d17c6',
        type: 'RESERVATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '98d4608c-862a-4b46-9839-2faa30a65d30',
        type: 'CANCELLATION'
    },
    {
        amount: 33333,
        cardId: 'ALICE',
        id: 'db811933-8f69-4640-8c95-2ef369629534',
        type: 'RESERVATION'
    },
    {
        amount: 55555,
        cardId: 'BOB',
        id: 'd28c2b4a-17f6-4f95-b9df-5f68b452aaac',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '2ace1ea9-b57e-4d0c-926c-d570450d17c6',
        type: 'RESERVATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '98d4608c-862a-4b46-9839-2faa30a65d30',
        type: 'CANCELLATION'
    },
    {
        amount: 33333,
        cardId: 'ALICE',
        id: 'db811933-8f69-4640-8c95-2ef369629534',
        type: 'RESERVATION'
    },
    {
        amount: 55555,
        cardId: 'BOB',
        id: 'd28c2b4a-17f6-4f95-b9df-5f68b452aaac',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '2ace1ea9-b57e-4d0c-926c-d570450d17c6',
        type: 'RESERVATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '98d4608c-862a-4b46-9839-2faa30a65d30',
        type: 'CANCELLATION'
    },
    {
        amount: 33333,
        cardId: 'ALICE',
        id: 'db811933-8f69-4640-8c95-2ef369629534',
        type: 'RESERVATION'
    },
    {
        amount: 55555,
        cardId: 'BOB',
        id: 'd28c2b4a-17f6-4f95-b9df-5f68b452aaac',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '2ace1ea9-b57e-4d0c-926c-d570450d17c6',
        type: 'RESERVATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '98d4608c-862a-4b46-9839-2faa30a65d30',
        type: 'CANCELLATION'
    },
    {
        amount: 33333,
        cardId: 'ALICE',
        id: 'db811933-8f69-4640-8c95-2ef369629534',
        type: 'RESERVATION'
    },
    {
        amount: 55555,
        cardId: 'BOB',
        id: 'd28c2b4a-17f6-4f95-b9df-5f68b452aaac',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '2ace1ea9-b57e-4d0c-926c-d570450d17c6',
        type: 'RESERVATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '98d4608c-862a-4b46-9839-2faa30a65d30',
        type: 'CANCELLATION'
    },
    {
        amount: 33333,
        cardId: 'ALICE',
        id: 'db811933-8f69-4640-8c95-2ef369629534',
        type: 'RESERVATION'
    },
    {
        amount: 55555,
        cardId: 'BOB',
        id: 'd28c2b4a-17f6-4f95-b9df-5f68b452aaac',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '2ace1ea9-b57e-4d0c-926c-d570450d17c6',
        type: 'RESERVATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '98d4608c-862a-4b46-9839-2faa30a65d30',
        type: 'CANCELLATION'
    },
    {
        amount: 33333,
        cardId: 'ALICE',
        id: 'db811933-8f69-4640-8c95-2ef369629534',
        type: 'RESERVATION'
    },
    {
        amount: 55555,
        cardId: 'BOB',
        id: 'd28c2b4a-17f6-4f95-b9df-5f68b452aaac',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '2ace1ea9-b57e-4d0c-926c-d570450d17c6',
        type: 'RESERVATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '98d4608c-862a-4b46-9839-2faa30a65d30',
        type: 'CANCELLATION'
    },
    {
        amount: 33333,
        cardId: 'ALICE',
        id: 'db811933-8f69-4640-8c95-2ef369629534',
        type: 'RESERVATION'
    },
    {
        amount: 55555,
        cardId: 'BOB',
        id: 'd28c2b4a-17f6-4f95-b9df-5f68b452aaac',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '2ace1ea9-b57e-4d0c-926c-d570450d17c6',
        type: 'RESERVATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '98d4608c-862a-4b46-9839-2faa30a65d30',
        type: 'CANCELLATION'
    },
    {
        amount: 33333,
        cardId: 'ALICE',
        id: 'db811933-8f69-4640-8c95-2ef369629534',
        type: 'RESERVATION'
    },
    {
        amount: 55555,
        cardId: 'BOB',
        id: 'd28c2b4a-17f6-4f95-b9df-5f68b452aaac',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '2ace1ea9-b57e-4d0c-926c-d570450d17c6',
        type: 'RESERVATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '98d4608c-862a-4b46-9839-2faa30a65d30',
        type: 'CANCELLATION'
    },
    {
        amount: 33333,
        cardId: 'ALICE',
        id: 'db811933-8f69-4640-8c95-2ef369629534',
        type: 'RESERVATION'
    },
    {
        amount: 55555,
        cardId: 'BOB',
        id: 'd28c2b4a-17f6-4f95-b9df-5f68b452aaac',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '2ace1ea9-b57e-4d0c-926c-d570450d17c6',
        type: 'RESERVATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '98d4608c-862a-4b46-9839-2faa30a65d30',
        type: 'CANCELLATION'
    },
    {
        amount: 33333,
        cardId: 'ALICE',
        id: 'db811933-8f69-4640-8c95-2ef369629534',
        type: 'RESERVATION'
    },
    {
        amount: 55555,
        cardId: 'BOB',
        id: 'd28c2b4a-17f6-4f95-b9df-5f68b452aaac',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '2ace1ea9-b57e-4d0c-926c-d570450d17c6',
        type: 'RESERVATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '98d4608c-862a-4b46-9839-2faa30a65d30',
        type: 'CANCELLATION'
    },
    {
        amount: 33333,
        cardId: 'ALICE',
        id: 'db811933-8f69-4640-8c95-2ef369629534',
        type: 'RESERVATION'
    },
    {
        amount: 55555,
        cardId: 'BOB',
        id: 'd28c2b4a-17f6-4f95-b9df-5f68b452aaac',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '2ace1ea9-b57e-4d0c-926c-d570450d17c6',
        type: 'RESERVATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '98d4608c-862a-4b46-9839-2faa30a65d30',
        type: 'CANCELLATION'
    },
    {
        amount: 33333,
        cardId: 'ALICE',
        id: 'db811933-8f69-4640-8c95-2ef369629534',
        type: 'RESERVATION'
    },
    {
        amount: 55555,
        cardId: 'BOB',
        id: 'd28c2b4a-17f6-4f95-b9df-5f68b452aaac',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 9999,
        cardId: 'CHARLIE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
        type: 'RESERVATION'
    },
    {
        amount: 11111,
        cardId: 'ALICE',
        id: '0a646991-4898-4751-8bf6-c266a6728885',
        type: 'CONFIRMATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '2ace1ea9-b57e-4d0c-926c-d570450d17c6',
        type: 'RESERVATION'
    },
    {
        amount: 22222,
        cardId: 'BOB',
        id: '98d4608c-862a-4b46-9839-2faa30a65d30',
        type: 'CANCELLATION'
    }
]


function confirmed(arr) {
    let obj = {}
    let output = {}
    for (i in arr) {
        obj.hasOwnProperty(arr[i].cardId) ? obj[arr[i].cardId].push(arr[i]) : obj[arr[i].cardId] = [arr[i]]
    }


    for (i in obj) {

        let unique = obj[i]
        let len = unique.length
        for (k = 0; k < len; k++) {


            if ((unique[k].type === 'RESERVATION') && (unique[k + 1].type === 'CONFIRMATION')) {
                output.hasOwnProperty(unique[k].cardId) ? output[unique[k].cardId].push(unique[k], unique[k + 1]) : output[unique[k].cardId] = [unique[k], unique[k + 1]]
                break
            }

        }

        for (k = 0; k < len; k++) {


            if ((unique[k].type === 'RESERVATION') && (unique[k + 1].type === 'CANCELLATION')) {
                output.hasOwnProperty(unique[k].cardId) ? output[unique[k].cardId].push(unique[k], unique[k + 1]) : output[unique[k].cardId] = [unique[k], unique[k + 1]]
                break
            }

        }


    }
    return output
}

console.log(confirmed(cardEvents))