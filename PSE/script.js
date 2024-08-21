//Color Coding
document.addEventListener('DOMContentLoaded', function() {
    loadSettings();

    document.getElementById('colorCoding').addEventListener('change', function() {
        const colorCoding = this.value;
        applyColorCoding(colorCoding);
        saveSettings(colorCoding);
    });
});

const elementTypes = {
    'H': 'non-metal',
    'He': 'non-metal',
    'Li': 'metal',
    'Be': 'metal',
    'B': 'metalloid',
    'C': 'non-metal',
    'N': 'non-metal',
    'O': 'non-metal',
    'F': 'non-metal',
    'Ne': 'non-metal',
    'Na': 'metal',
    'Mg': 'metal',
    'Al': 'metal',
    'Si': 'metalloid',
    'P': 'non-metal',
    'S': 'non-metal',
    'Cl': 'non-metal',
    'Ar': 'non-metal',
    'K': 'metal',
    'Ca': 'metal',
    'Sc': 'metal',
    'Ti': 'metal',
    'V': 'metal',
    'Cr': 'metal',
    'Mn': 'metal',
    'Fe': 'metal',
    'Co': 'metal',
    'Ni': 'metal',
    'Cu': 'metal',
    'Zn': 'metal',
    'Ga': 'metal',
    'Ge': 'metalloid',
    'As': 'metalloid',
    'Se': 'non-metal',
    'Br': 'non-metal',
    'Kr': 'non-metal',
    'Rb': 'metal',
    'Sr': 'metal',
    'Y': 'metal',
    'Zr': 'metal',
    'Nb': 'metal',
    'Mo': 'metal',
    'Tc': 'metal',
    'Ru': 'metal',
    'Rh': 'metal',
    'Pd': 'metal',
    'Ag': 'metal',
    'Cd': 'metal',
    'In': 'metal',
    'Sn': 'metal',
    'Sb': 'metalloid',
    'Te': 'metalloid',
    'I': 'non-metal',
    'Xe': 'non-metal',
    'Cs': 'metal',
    'Ba': 'metal',
    'La': 'metal',
    'Ce': 'metal',
    'Pr': 'metal',
    'Nd': 'metal',
    'Pm': 'metal',
    'Sm': 'metal',
    'Eu': 'metal',
    'Gd': 'metal',
    'Tb': 'metal',
    'Dy': 'metal',
    'Ho': 'metal',
    'Er': 'metal',
    'Tm': 'metal',
    'Yb': 'metal',
    'Lu': 'metal',
    'Hf': 'metal',
    'Ta': 'metal',
    'W': 'metal',
    'Re': 'metal',
    'Os': 'metal',
    'Ir': 'metal',
    'Pt': 'metal',
    'Au': 'metal',
    'Hg': 'metal',
    'Tl': 'metal',
    'Pb': 'metal',
    'Bi': 'metal',
    'Po': 'metalloid',
    'At': 'metalloid',
    'Rn': 'non-metal',
    'Fr': 'metal',
    'Ra': 'metal',
    'Ac': 'metal',
    'Th': 'metal',
    'Pa': 'metal',
    'U': 'metal',
    'Np': 'metal',
    'Pu': 'metal',
    'Am': 'metal',
    'Cm': 'metal',
    'Bk': 'metal',
    'Cf': 'metal',
    'Es': 'metal',
    'Fm': 'metal',
    'Md': 'metal',
    'No': 'metal',
    'Lr': 'metal',
    'Rf': 'metal',
    'Db': 'metal',
    'Sb': 'metalloid',
    'Mt': 'metal',
    'Ds': 'metal',
    'Rg': 'metal',
    'Cn': 'metal',
    'Nh': 'metal',
    'Fl': 'metal',
    'Mc': 'metal',
    'Lv': 'metal',
    'Ts': 'metalloid',
    'Og': 'unknown',
    'Sg': 'unknown',
    'Bh': 'unknown',
    'Hs': 'unknown',

    // Lanthanides
    'La': 'metal',
    'Ce': 'metal',
    'Pr': 'metal',
    'Nd': 'metal',
    'Pm': 'metal',
    'Sm': 'metal',
    'Eu': 'metal',
    'Gd': 'metal',
    'Tb': 'metal',
    'Dy': 'metal',
    'Ho': 'metal',
    'Er': 'metal',
    'Tm': 'metal',
    'Yb': 'metal',
    'Lu': 'metal',

    // Actinides
    'Ac': 'metal',
    'Th': 'metal',
    'Pa': 'metal',
    'U': 'metal',
    'Np': 'metal',
    'Pu': 'metal',
    'Am': 'metal',
    'Cm': 'metal',
    'Bk': 'metal',
    'Cf': 'metal',
    'Es': 'metal',
    'Fm': 'metal',
    'Md': 'metal',
    'No': 'metal',
    'Lr': 'metal'
  };

  function applyColorCoding(colorCoding) {
      const legend = document.querySelector('.legend');

      document.querySelectorAll('.element').forEach(element => {
          element.classList.remove('metal', 'non-metal', 'metalloid', 'unknown');

          if (colorCoding === 'type') {
              const type = elementTypes[element.id];
              if (type) {
                  element.classList.add(type);
              }
              legend.style.display = 'flex';  // Legende anzeigen
          } else {
              legend.style.display = 'none';  // Legende ausblenden
          }
      });
  }

function saveSettings(colorCoding) {
    localStorage.setItem('colorCoding', colorCoding);
}

function loadSettings() {
    const colorCoding = localStorage.getItem('colorCoding') || 'none';
    document.getElementById('colorCoding').value = colorCoding;
    applyColorCoding(colorCoding);
}

//Preise
async function fetchGoldPrice() {
  const url = 'https://api.coingecko.com/api/v3/simple/price?ids=gold&vs_currencies=usd';

  try {
    const response = await fetch(url);
    const data = await response.json();
    const goldPrice = data.gold.usd;
    document.getElementById('goldPrice').innerText = `${goldPrice} $/oz`;
  } catch (error) {
    document.getElementById('goldPrice').innerText = 'Fehler beim Laden des Goldpreises';
    console.error('Fehler:', error);
  }
}

// Initialer Abruf des Goldpreises
fetchGoldPrice();

// Wiederhole den Abruf alle 60 Sekunden (60000 Millisekunden)
setInterval(fetchGoldPrice, 60000);

// Such- und Filterfunktion
function filterElements() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const elements = document.querySelectorAll('.element');

    elements.forEach(element => {
        // Prüfe, ob das Element ein Symbol und einen Namen hat, um Fehler zu vermeiden
        const nameElement = element.querySelector('.name');
        const symbolElement = element.querySelector('.symbol');
        const numberElement = element.querySelector('.number');

        if (nameElement && symbolElement && numberElement) {
            const name = nameElement.textContent.toLowerCase();
            const symbol = symbolElement.textContent.toLowerCase();
            const number = numberElement.textContent.toLowerCase();

            const matches = name.includes(searchValue) || symbol.includes(searchValue) || number.includes(searchValue);

            element.classList.toggle('hidden', !matches);
        }
    });
}

// Dark Mode Umschaltung
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
