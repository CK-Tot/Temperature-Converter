const $ = id => document.getElementById(id);
const toUnitEl = $('to-unit');
const fromUnitEl = $('from-unit'); // fixed typo
const tempInputEl = $('temp-input');
const resultEl = $('result');
const convertBtn = $('convert-btn');

function ConvertTemp() {
    const temp = parseFloat(tempInputEl.value);

    if (isNaN(temp)) {
        resultEl.textContent = 'Please enter a valid number';
        resultEl.style.color = 'red';
        return;
    }

    const fromUnit = fromUnitEl.value;
    const toUnit = toUnitEl.value;

    // Convert to Celsius first
    let celsius;
    switch (fromUnit) {
        case 'celsius':
            celsius = temp;
            break;
        case 'fahrenheit':
            celsius = (temp - 32) * 5 / 9;
            break;
        case 'kelvin':
            celsius = temp - 273.15;
            break;
        default:
            celsius = temp;
    }

    // Convert from Celsius to target unit
    let result;
    switch (toUnit) {
        case 'celsius':
            result = celsius;
            break;
        case 'fahrenheit':
            result = (celsius * 9 / 5) + 32;
            break;
        case 'kelvin':
            result = celsius + 273.15;
            break;
    }

    if (result === undefined) {
        resultEl.textContent = 'Conversion error. Please check units.';
        resultEl.style.color = 'red';
        return;
    }

    resultEl.textContent = `${temp.toFixed(2)}° ${fromUnit.charAt(0).toUpperCase()} = ${result.toFixed(2)}° ${toUnit.charAt(0).toUpperCase()}`;
    resultEl.style.color = '#333';
}

convertBtn.addEventListener('click', ConvertTemp);
