export default defineEventHandler(async (event) => {
  const { query, page } = getQuery(event);
  const config = useRuntimeConfig();  

  return await $fetch(`${config.apiBaseUrl}/search/movie?query=${query}&page=${page}`, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${config.apiToken}`
    }
  })
})