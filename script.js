function MC(number) {
        let val = document.getElementById('exampleFormControlSelect2').value;
        if (val == 'Tether TRC20 (USDT)' || val == 'Tether ERC20 (USDT)' || val == 'Tether BEP20 (USDT)' ) {
         document.getElementById('num2').innerHTML = String((number/59.5).toFixed(2)) + ' USDT';
        }
        else if (val == 'BUSD ERC20' || val == 'BUSD BEP20') {
         document.getElementById('num2').innerHTML = String((number/56).toFixed(2)) + ' BUSD';
        }
        else {
         document.getElementById('num2').innerHTML = String((number/1350000).toFixed(6)) + ' BTC';
        }
      }