<script setup lang="ts">
import type { IMovie } from 'types/IMovie';

const route = useRoute();
const config = useRuntimeConfig();
const movieId = computed(() => route.params.id);

const { data } = await useFetch<IMovie>(`/api/movies/${movieId.value}`);

const imgUrl = computed(() => data.value?.poster_path ?
  `${config.public.imgBaseUrl}/${data.value.poster_path}` : 'https://via.placeholder.com/300x500')
</script>

<template>
  <div class="flex flex-col px-20 mt-10">
    <div class="grid grid-cols-7 gap-1">
      <img :src="imgUrl" alt="" class="col-span-2">
      <div class="flex flex-col col-span-3">{{ data?.title }}
        <div class="flex">
          <div class="px-4 py-2 bg-gray-200 text-gray-800 rounded mr-2 mb-2" v-for="(genre, index) in data?.genres"
            :key="genre.name">{{ genre.name }}</div>
        </div>
        <div class="text-lg my-2">Release Date: {{ data?.release_date }}</div>
        <div class="text-lg mb-2">Duration {{ data?.runtime }}</div>
        <div class="text-gray-699 text-m">{{ data?.overview }}</div>
      </div>
    </div>
  </div>
</template>