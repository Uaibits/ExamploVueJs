<template>
<h1>Home</h1>

  <ListaAnime :animes="listaAnimes"></ListaAnime>

  <ListaAnime :animes="listaAnimes"></ListaAnime>

  <ListaAnime :animes="listaAnimes"></ListaAnime>

  <ListaAnime :animes="listaAnimes"></ListaAnime>

  <CardAnime :anime_individual="listaAnimes[0]"></CardAnime>
</template>

<script>

import ListaAnime from "@/components/ListaAnime.vue";
import CardAnime from "@/components/CardAnime.vue";

export default {
  components: {CardAnime, ListaAnime},
  data() {
    return {
      listaAnimes: [
        {
          nome: "Naruto",
          descricao: "A história de um jovem ninja em busca de se tornar o Hokage e conquistar o respeito de todos.",
          imagem: "https://img.omdbapi.com/?apikey=a8c1eb21&t=Naruto", // Substitua a8c1eb21 pela sua chave da API
          link: "https://www.imdb.com/title/tt0409591/" // Link para o IMDb
        },
        {
          nome: "One Piece",
          descricao: "Luffy e seus amigos embarcam em uma jornada épica para encontrar o lendário tesouro One Piece.",
          imagem: "https://img.omdbapi.com/?apikey=a8c1eb21&t=One+Piece",
          link: "https://www.imdb.com/title/tt0388629/"
        },
        {
          nome: "Attack on Titan",
          descricao: "A humanidade luta pela sobrevivência contra titãs gigantes que ameaçam sua existência.",
          imagem: "https://img.omdbapi.com/?apikey=a8c1eb21&t=Attack+on+Titan",
          link: "https://www.imdb.com/title/tt2560140/"
        },
        {
          nome: "Death Note",
          descricao: "Um estudante descobre um caderno sobrenatural que permite matar qualquer pessoa cujo nome seja escrito nele.",
          imagem: "https://img.omdbapi.com/?apikey=a8c1eb21&t=Death+Note",
          link: "https://www.imdb.com/title/tt0434665/"
        },
        {
          nome: "Dragon Ball Z",
          descricao: "Goku e seus amigos protegem a Terra de poderosos inimigos intergalácticos.",
          imagem: "https://img.omdbapi.com/?apikey=a8c1eb21&t=Dragon+Ball+Z",
          link: "https://www.imdb.com/title/tt0214341/"
        },
        {
          nome: "Fullmetal Alchemist: Brotherhood",
          descricao: "Dois irmãos tentam restaurar seus corpos após uma tentativa fracassada de alquimia.",
          imagem: "https://img.omdbapi.com/?apikey=a8c1eb21&t=Fullmetal+Alchemist",
          link: "https://www.imdb.com/title/tt1533375/"
        },
        {
          nome: "Demon Slayer",
          descricao: "Um jovem se torna um caçador de demônios para vingar sua família e salvar sua irmã.",
          imagem: "https://img.omdbapi.com/?apikey=a8c1eb21&t=Demon+Slayer",
          link: "https://www.imdb.com/title/tt9335498/"
        }
      ]

    }
  }
}

</script>