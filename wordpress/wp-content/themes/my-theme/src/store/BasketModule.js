export const BasketModule = {
    state: () => ({
        elements: [],
        currentPaymentID: '',
    }),
    getters: {
        countBasket(state) {
            return state.elements.length
        },
        basketItems(state){
            return state.elements
        },
    },
    mutations: {
        setBasketElements(state, newValue) {
            state.elements = newValue
        },
        addBasketELement(state, newBasketElement) {
            let sameElementIndex = state.elements.findIndex(item => item.product.id == newBasketElement.product.id)
            if (sameElementIndex != -1) {
                return state.elements[sameElementIndex] = newBasketElement;
            }
            state.elements.push(newBasketElement)
        },
        updateBasketElement(state, basketElement) {
            let elementInArrayIndex = state.elements.findIndex(item => item.product.id == basketElement.product.id)
            state.elements[elementInArrayIndex] = basketElement;
        },
        deleteBasketElement(state, basketElement) {
            state.elements = state.elements.filter(item => item.product.id != basketElement.product.id)
        }
    },
    actions: {

    },
    namespaced: true
}
