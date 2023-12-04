// Cria 20 elementos, cada um representando um quadrado numerado
const quadrados = Array.from({ length: 20 }, (_, index) => ({ numero: index + 1, reservado: false, nome: "", cor: "" }));

// Responsável pela reserva
function toggleReserva(index) {
  quadrados[index].reservado = !quadrados[index].reservado;

  if (quadrados[index].reservado) {
    quadrados[index].nome = document.getElementById("nome").value;
    quadrados[index].cor = getRandomColorRGB();
  } else {
    quadrados[index].nome = "";
    quadrados[index].cor = "";
  }

  updateDisplay();
}

// Gera uma cor aleatória no formato RGB
function getRandomColorRGB() {
  let color = 'rgb(';
  for (let i = 0; i < 3; i++) {
    color += Math.floor(Math.random() * 256);
    if (i < 2) {
      color += ', ';
    }
  }
  color += ')';
  return color;
}

// Atualiza a exibição dos quadrados
function updateDisplay() {
  const quadradosContainer = document.getElementById("quadrados-container");
  quadradosContainer.innerHTML = "";

  quadrados.forEach((quad, index) => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.textContent = quad.numero;

    if (quad.reservado) {
      square.innerHTML += `<br><strong>${quad.nome}</strong>`;
      square.style.backgroundColor = quad.cor;
    }

    if (quad.reservado) {
      square.classList.add("reservado");
    }

    square.addEventListener("click", () => toggleReserva(index));

    quadradosContainer.appendChild(square);
  });
}

// Verifica se o número é válido
function reservar() {
  const numero = parseInt(document.getElementById("numero").value);
  
  if (numero >= 1 && numero <= 20) {
    toggleReserva(numero - 1);
  } else {
    alert("Digite um número válido entre 1 e 20.");
  }
}

updateDisplay();
