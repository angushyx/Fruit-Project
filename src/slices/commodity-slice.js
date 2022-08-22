import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  commodity: [
    {
      id: 'a1',
      name: 'Hamburger',
      amount: 1,
      price: 149,
      category: 'American',
      description: 'THIS IS GREAT',
      image:
        'https://images.unsplash.com/photo-1602030638412-bb8dcc0bc8b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
    {
      id: 'a2',
      name: 'Sandwich',
      amount: 1,
      price: 99.9,
      category: 'American',
      description: 'THIS IS GREAT',
      image:
        'https://images.unsplash.com/photo-1559054663-e8d23213f55c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687',
    },
    {
      id: 'a3',
      name: 'Pasta',
      amount: 1,
      price: 199,
      category: 'Italia',
      description: 'THIS IS GREAT',
      image:
        'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      id: 'a4',
      name: 'Pizza',
      amount: 1,
      price: 129,
      category: 'Italia',
      description: 'this is good',
      image:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aXRhbGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'a5',
      name: 'Sushi',
      amount: 1,
      price: 89,
      category: 'Japanese',
      description: 'THIS IS GREAT',
      image:
        'https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    },
    {
      id: 'a6',
      name: 'Ramen',
      amount: 1,
      price: 99.9,
      category: 'Japanese',
      description: 'THIS IS GREAT',
      image:
        'https://images.unsplash.com/photo-1614563637806-1d0e645e0940?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
    },
    {
      id: 'a7',
      name: 'Fruit salad',
      amount: 1,
      price: 199,
      category: 'Health',
      description: 'THIS IS GREAT',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 'a8',
      name: 'Vege Noodles',
      amount: 1,
      price: 129,
      category: 'Health',
      description: 'this is good',
      image:
        'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 'a9',
      name: 'Curry',
      amount: 1,
      price: 199,
      category: 'Thai',
      description: 'THIS IS GREAT',
      image:
        'https://images.unsplash.com/photo-1618449840665-9ed506d73a34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: 'a10',
      name: 'Basil Rice',
      amount: 1,
      price: 129,
      category: 'Thai',
      description: 'this is good',
      image:
        'https://images.unsplash.com/photo-1627308595186-e6bb36712645?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    },
    {
      id: 'a11',
      name: 'Rice Cake',
      amount: 1,
      price: 199,
      category: 'Korean',
      description: 'THIS IS GREAT',
      image:
        'https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 'a12',
      name: 'Fried chicken',
      amount: 1,
      price: 129,
      category: 'Korean',
      description: 'this is good',
      image:
        'https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80',
    },
  ],
}

export const commoditySlice = createSlice({
  name: 'commodityList',
  initialState,
})

export default commoditySlice.reducer
