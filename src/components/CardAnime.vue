<template>
  <div class="card" style="width: 18rem;" v-if='anime_individual.nome.length > 7'>
    <img :src="anime_individual.imagem" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ anime_individual.nome }}</h5>
      <p class="card-text">{{ anime_individual.descricao }}</p>
    </div>
  </div>
  <div class="card" style="width: 18rem;" v-else>
    <img :src="anime_individual.imagem" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ anime_individual.nome }} (pequeno)</h5>
      <p class="card-text">{{ anime_individual.descricao }}</p>
    </div>
  </div>
</template>
<script>

export default {
  props: [
    'anime_individual'
  ],
}
</script>

<style scoped>
.card {
  margin-top: 20px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-title {
  font-size: 1.5rem;
}

.card-text {
  font-size: 1rem;
}

.btn-primary {
  margin-top: 10px;
}

</style>