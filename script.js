// Por enquanto, apenas uma estrutura básica
console.log("Portfólio Arena Breakout carregado!");
// Array com os nomes das suas imagens de fundo
const backgroundImages = [
    'img.jpg/fundoarena1.jpg',
    'img.jpg/fundoarena2.jpg',
    'img.jpg/fundoarena3.jpg',
    'img.jpg/fundoarena4.jpg',
    'img.jpg/fundoarena5.jpg'
];

let currentImageIndex = 0;
const body = document.body; // Pega o elemento <body>

// Define a primeira imagem de fundo ao carregar a página
body.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;

// Calcula a altura total do conteúdo que será rolado
// Isso é importante para distribuir as trocas de imagem ao longo da rolagem
const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

// Define quantos pixels de rolagem para cada imagem
// Dividimos a altura total da rolagem pelo número de imagens menos 1 (para o último segmento)
const scrollSegment = totalScrollHeight / (backgroundImages.length - 1);

window.addEventListener('scroll', () => {
    // Pega a posição atual de rolagem
    const scrollPosition = window.scrollY;

    // Calcula qual segmento de imagem deve ser exibido
    // Usa Math.floor para garantir que seja um número inteiro
    let newImageIndex = Math.floor(scrollPosition / scrollSegment);

    // Garante que o índice não ultrapasse o número de imagens
    if (newImageIndex >= backgroundImages.length) {
        newImageIndex = backgroundImages.length - 1;
    }

    // Se o índice da imagem mudou, atualiza o background
    if (newImageIndex !== currentImageIndex) {
        currentImageIndex = newImageIndex;
        body.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
    }
});

// Opcional: Pré-carregar as imagens para evitar flashes brancos na troca
backgroundImages.forEach(imagePath => {
    const img = new Image();
    img.src = imagePath;
});
