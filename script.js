function CalcImc() {
  const height = parseFloat(document.getElementById("input-number-field-metric-height").value);
  const weight = parseFloat(document.getElementById("input-number-field-metric-weight").value);

  const imc = weight / (height * height);

  document.getElementById('result').textContent = imc.toFixed(2);

  let classification = ' '
  let IdealWeight = ' '

  if (imc < 18.5) {
    classification = 'under weight'
  } else if (imc < 25) {
    classification = 'normal weight'
  } else if (imc < 30) {
    classification = 'over weight'
  } else if (imc < 35) {
    classification = 'obesity level I'
  } else if (imc < 41) {
    classification = 'obesity level II'
  } else {
    classification = 'obesity level III'
  }

  if (height < 1.5) {
    IdealWeight = '45kgs - 55kgs'
  } else if (height < 1.59) {
    IdealWeight = '50kgs - 60kgs'
  } else if (height < 1.69) {
    IdealWeight = '55kgs - 65kgs'
  } else if (height < 1.79) {
    IdealWeight = '60kgs - 70kgs'
  } else if (height < 1.89) {
    IdealWeight = '65kgs - 75kgs'
  } else {
    IdealWeight = '70kgs - 80kgs'
  }
  document.getElementById('text-result-imc').textContent = classification;
  document.getElementById('text-result-ideal-weight').textContent = IdealWeight;

}
document.getElementById("input-number-field-metric-height").addEventListener("input", CalcImc);
document.getElementById("input-number-field-metric-weight").addEventListener("input", CalcImc);
