export default defineEventHandler(async (event) => {
  const { query } = getQuery(event);
  const config = useRuntimeConfig();  

  return await $fetch(`${config.apiBaseUrl}/search/movie?query=${query}`, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${config.apiToken}`
    }
  })
})