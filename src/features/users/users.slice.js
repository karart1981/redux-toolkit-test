import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items:[
        {id:1, name:"Tiko", gender:"male", salary:200000},
        {id:2, name:"Armine", gender:"female", salary:300000},
        {id:3, name:"Ashot", gender:"male", salary:450000},
        {id:4, name:"Artak", gender:"male", salary:500000},
        {id:5, name:"Lusine", gender:"female", salary:220000}
    ]
}

export const UserSlice = createSlice({
    name: "Users",
    initialState,
    reducers: {
      salaryUp: function(state, action){
        const person = state.items.find(user=> user.id == action.payload)
        if(person){
            person.salary += 50000
        }
      }, 
      salaryDown: function(state, action){
        const person = state.items.find(user => user.id == action.payload)
        if(person){
          if(person.salary >= 100000){
            person.salary -= 50000
          }
        }
      },
      personDelete: function(state, action){
        state.items = state.items.filter(user => user.id != action.payload)
      },
      personSwipeUp:function(state, action){
        const personId = action.payload
        console.log(personId)
          if(personId-1 < state.items.length-1){
            const person = state.items[personId-1];
            if(personId-1 !=0){
              state.items[personId-1] = state.items[personId-2]
              state.items[personId-2] = person
            }
          }
      },
      personSwipeDown: function(state, action){   
          const personId = action.payload
          if(personId-1 < state.items.length-1){
            const person = state.items[personId-1];
            state.items[personId-1] = state.items[personId]
            state.items[personId] = person
          }
      }
      
    }
})

export const reducer = UserSlice.reducer
export const { salaryUp, salaryDown, personDelete,personSwipeDown,personSwipeUp } = UserSlice.actions