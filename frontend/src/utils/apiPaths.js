export const server = import.meta.env.VITE_BACKEND_URL;


export const API_PATHS = {
    DOCUMENTS: {
        GET: '/document/all',
        GETBYID:(id)=> `/document/${id}`,
        CREATE:'/document/upload',
        SEARCH:(q)=>`/document/search?${q}`
    
    }
}