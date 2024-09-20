function recomendarPerfume() {
    const genero = document.getElementById('genero').value;
    const aroma = document.getElementById('aroma').value;
    const natureza = document.getElementById('natureza').value;
    const ocasiao = document.getElementById('ocasiao').value;
    const intensidade = document.getElementById('intensidade').value;

    const combinacao = `${genero}-${aroma}-${natureza}-${ocasiao}-${intensidade}`;

    const perfumesRecomendados = {
        // Feminino
        "Feminino-Adocicado-Sim-Dia a dia-Suave": [
            { nome: "Kriska Drama", img: "images/kriska-drama.jpg" },
            { nome: "Essencial Exclusivo Feminino", img: "images/essencial-exclusivo-feminino.jpg" }
        ],
        "Feminino-Amadeirado-Não-Noite-Forte": [
            { nome: "Una Artisan", img: "images/una-artisan.jpg" },
            { nome: "Natura Homem Essence", img: "images/natura-homem-essence.jpg" }
        ],
        "Feminino-Cítrico-Sim-Dia a dia-Suave": [
            { nome: "Ekos Frescor Maracujá", img: "images/ekos-frescor-maracuja.jpg" },
            { nome: "Kaiak Clássico", img: "images/kaiak-classico.jpg" }
        ],
        "Feminino-Floral-Sim-Eventos especiais-Moderada": [
            { nome: "Luna Radiante", img: "images/luna-radiante.jpg" },
            { nome: "Una Blush", img: "images/una-blush.jpg" }
        ],
        "Feminino-Frutal-Sim-Dia a dia-Suave": [
            { nome: "Ekos Açaí", img: "images/ekos-acai.jpg" },
            { nome: "Humor a Dois", img: "images/humor-a-dois.jpg" }
        ],

        // Masculino
        "Masculino-Adocicado-Sim-Eventos especiais-Forte": [
            { nome: "Essencial Oud Masculino", img: "images/essencial-oud-masculino.jpg" },
            { nome: "Kaiak Ultra", img: "images/kaiak-ultra.jpg" }
        ],
        "Masculino-Amadeirado-Sim-Dia a dia-Moderada": [
            { nome: "Essencial Exclusivo Masculino", img: "images/essencial-exclusivo-masculino.jpg" },
            { nome: "Natura Homem Sagaz", img: "images/natura-homem-sagaz.jpg" }
        ],
        "Masculino-Cítrico-Sim-Noite-Suave": [
            { nome: "Kaiak Oceano", img: "images/kaiak-oceano.jpg" },
            { nome: "Natura Homem Clássico", img: "images/natura-homem-classico.jpg" }
        ],
        "Masculino-Floral-Não-Eventos especiais-Forte": [
            { nome: "Luna Absoluta", img: "images/luna-absoluta.jpg" },
            { nome: "Essencial Exclusivo Masculino", img: "images/essencial-exclusivo-masculino.jpg" }
        ],
        "Masculino-Frutal-Sim-Dia a dia-Moderada": [
            { nome: "Ekos Frescor Maracujá", img: "images/ekos-frescor-maracuja.jpg" },
            { nome: "Kaiak Aventura", img: "images/kaiak-aventura.jpg" }
        ],

        // Tanto faz
        "Os dois-Adocicado-Não-Noite-Forte": [
            { nome: "Kriska Drama", img: "images/kriska-drama.jpg" },
            { nome: "Essencial Oud Masculino", img: "images/essencial-oud-masculino.jpg" }
        ],
        "Os dois-Amadeirado-Sim-Eventos especiais-Moderada": [
            { nome: "Una Artisan", img: "images/una-artisan.jpg" },
            { nome: "Essencial Exclusivo Masculino", img: "images/essencial-exclusivo-masculino.jpg" }
        ],
        "Os dois-Cítrico-Sim-Dia a dia-Suave": [
            { nome: "Ekos Frescor Maracujá", img: "images/ekos-frescor-maracuja.jpg" },
            { nome: "Kaiak Clássico", img: "images/kaiak-classico.jpg" }
        ],
        "Os dois-Floral-Sim-Eventos especiais-Moderada": [
            { nome: "Luna Radiante", img: "images/luna-radiante.jpg" },
            { nome: "Una Blush", img: "images/una-blush.jpg" }
        ],
        "Os dois-Frutal-Sim-Noite-Suave": [
            { nome: "Ekos Açaí", img: "images/ekos-acai.jpg" },
            { nome: "Humor a Dois", img: "images/humor-a-dois.jpg" }
        ]
    };

    const recomendacoes = perfumesRecomendados[combinacao];

    const resultadoContainer = document.getElementById('resultado-container');
    const resultadoDiv = document.getElementById('resultado');

    resultadoDiv.innerHTML = '';
    recomendacoes.forEach(perfume => {
        const perfumeDiv = document.createElement('div');
        perfumeDiv.classList.add('perfume-item');
        
        const img = document.createElement('img');
        img.src = perfume.img;
        img.alt = perfume.nome;
        
        const nome = document.createElement('p');
        nome.textContent = perfume.nome;

        perfumeDiv.appendChild(img);
        perfumeDiv.appendChild(nome);
        resultadoDiv.appendChild(perfumeDiv);
    });

    resultadoContainer.style.display = 'block';
}
