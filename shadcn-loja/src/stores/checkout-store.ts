import { StepAddress } from './../components/checkout/step-address';
import { create } from "zustand";


type States= {
    name :string,
    address:{
        street : string,
        number : string,
        complement? : string | undefined,
        district : string,
        city : string,
        state : string,
    }
}

type Actions = {
    setName: (name: States['name']) => void;
    setAddress: (address: States['address']) => void;
}

const initiaState :States={
    name :'',
    address: {
        street : '',
        number : '',
        complement: '',
        district: '',
        city: '',
        state: '',
    }
}
export const useCheckoutStore = create<States & Actions>()(set => ({
    ...initiaState,
    setName:(name) => set(state => ({ ...state, name})),
    setAddress: (address)=> set(state=> ({...state, address}))
}))