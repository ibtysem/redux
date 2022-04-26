import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itek: [
    {
      id: 1,
      name: "iphone 13 pro",
      img: "./images/Iphone.png",
      desc: "L'iPhone passe à l'étape suivante avec une dalle de 120 Hz, une batterie plus grande et un système de caméra amélioré. Dans notre examen, l'iPhone 13 Pro a mérité non seulement des superlatifs mais aussi quelques points de critique",
      price: 1800,
      rate: 0,
    },
    {
      id: 2,
      name: "apple watch ",
      img: "./images/watch.png",
      desc: "apple watch serie 7",
      price: 475,
      rate: 0,
    },
    {
      id: 3,
      name: "Casque Sans Fil JBL ",
      img: "./images/casque.png",
      desc: "Casque supra-auriculaire sans fil à réduction de bruit active. Réduction de Bruit Active Son Pure Bass JBL Jusqu’à 44 heures d’autonomie avec la RBA activée",
      price: 75,
      rate: 0,
    },
    {
      id: 4,
      name: "Macbook pro",
      img: "./images/macbook.png",
      desc: "MacBook Pro 16 Puce Apple M1 Pro 10core CPU 16core GPU 512Go SSD - Space Grey",
      price: 2999,
      rate: 0,
    },
  ],
  myList: [],
};

export const itekSlice = createSlice({
  name: "itek",
  initialState,
  reducers: {
    count: (state, action) => {
      let item = state.itek.findIndex((el) => el.id === action.payload);

      state.itek[item] = {
        ...state.itek[item],
        rate: state.itek[item].rate + 1,
      };
    },
    addtolist: (state, action) => {
      state.myList.push(action.payload);
    },
    addnewarticle:(state,action)=>{
      state.itek.push(action.payload);

    }
  },
});

// Action creators are generated for each case reducer function
export const { count, addtolist,addnewarticle } = itekSlice.actions;

export default itekSlice.reducer;
