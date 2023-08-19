<script lang="ts" setup>
const props = defineProps({
  movie: {
    type: Object as PropType<IMovie>,
  }
});

const config = useRuntimeConfig();
const imgUrl = computed(() => props.movie.poster_path != null ? `${config.public.imgBaseUrl}/${props.movie.poster_path}` : 'https://via.placeholder.com/300x500')

</script>

<template>
  <NuxtLink :to="`/movies/${movie.id}`" class="h-128 w-64 border flex flex-col text-center">
    <div class="mb-5 bg-green-600 inline-block">
      <img class="transform hover:translate-x-3 hover:-translate-y-3 delay-50 duration-100 inline-block" :src="imgUrl" />
    </div>
    <div class="text-lg">
      {{ movie.title }}
    </div>
    <p class="text-m text-gray-500 break-words text-wrap truncate overflow-hidden px-2">
      {{ movie.overview }}
    </p>
  </NuxtLink>
</template>