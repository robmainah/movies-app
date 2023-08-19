<script lang="ts" setup>
import { IApiResponse } from 'types/ApiResponse';

const searchTerm = ref<string>("");
const page = ref(1);

const disablePrevious = computed(() => page.value === 1);
const disableNext = computed(() => page.value + 1 === data.value?.total_pages);

const debouncedSearchTerm = refDebounced(searchTerm, 700);

const url = computed(() => {
  return `api/movies/search?query=${debouncedSearchTerm.value}&page=${page.value}`;
});

const { data } = await useFetch<IApiResponse>(url);
</script>

<template>
  <div>
    <div class="flex flex-col py-10">
      <div>
        <h2 class="text-2xl font-bold text-center">Nuxt Movies App</h2>
      </div>
      <div class="flex justify-center items-center h-32">
        <input type="text" class="px-2 py-1 border border-gray-800 rounded-md min-w-64" v-model="searchTerm"
          placeholder="...Search">
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 self-center gap-x-10 gap-y-19 mb-10">
        <div v-for="(movie, index) in data?.results" :key="index">
          <MovieCard :movie="movie" />
        </div>
      </div>
      <div class="flex justify-center" v-if="data?.results.length">
        <button v-if="!disablePrevious" @click="page--" class="px-4 py-2 text-m borer rounded-lg">Previous</button>
        <button class="px-4 py-2 text-m borer rounded-lg">{{ page }}</button>
        <button v-if="!disableNext" @click="page++" class="px-4 py-2 text-m borer rounded-lg">Next</button>
      </div>
    </div>
  </div>
</template>