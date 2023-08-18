import { log } from "console";

export default defineEventHandler(async (event) => {  
  if (event.node.req.url === undefined) {
    throw new Error("Failed to fetch request");    
  }

  const id = [...event.node.req.url.split('/')].pop();
  const config = useRuntimeConfig();  

  return await $fetch(`${config.apiBaseUrl}/movie/${id}`, {
    method: 'GET',
    headers: {
      "Authorization": "Bearer " + config.apiToken
    }
  })
})