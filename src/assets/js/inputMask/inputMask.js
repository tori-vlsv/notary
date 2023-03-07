import Inputmask from 'inputmask';

function inputMask() {
  let input =  $('input[type="tel"]');
  Array.from(input).forEach(function(element) {
    let mask = new Inputmask('+7 (999) 999-99-99');
    mask.mask(element);
  });
}
inputMask();