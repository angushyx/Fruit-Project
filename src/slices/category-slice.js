import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: [
    {
      id: '1',
      category: 'Korean',
      image:
        ' https://images.unsplash.com/photo-1619179834700-7a886aac80cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    },
    {
      id: '2',
      category: 'American',
      image:
        ' https://images.unsplash.com/photo-1626836014893-37663794dca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNhJTIwZmxhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '3',
      category: 'Japanese',
      image:
        ' https://images.unsplash.com/photo-1559613966-ddf859988e3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: '4',
      category: 'Thai',
      image:
        'https://images.unsplash.com/photo-1645351592983-e9fa41172191?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: '5',
      category: 'Italia',
      image:
        'https://images.unsplash.com/photo-1567613814045-a5263064bef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbGlhbiUyMGZsYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '6',
      category: 'Health',
      image:
        'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ],
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
})

export default categorySlice.reducer
