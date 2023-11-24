import createOauthRequest from "@/helpers/createOauthRequest";


export const KatalogModule = {
    state: () => ({
        categories: [],
        selectedCategory: null,
        sortOptions: [
            { id: 1, order: 'asc', orderBy: 'price', name: 'По возрастанию цены' },
            { id: 2, order: 'desc', orderBy: 'price', name: 'По убыванию цены' },
            { id: 3, order: 'desc', orderBy: 'popularity', name: 'По популярности' },
        ],
        selectedSortOption: { id: 3, order: 'desc', orderBy: 'popularity', name: 'По популярности' },
        searchText: '',
        currentPage: 1,
        totalPages: 1
    }),
    getters: {
        requestParams(state, getters) {
            let params = {
                category: state.selectedCategory ? state.selectedCategory.id : null,
                order: state.selectedSortOption.order,
                orderby: state.selectedSortOption.orderBy,
                search: state.searchText != '' ? state.searchText : null,
                per_page: 16,
                page: state.currentPage
            }
            return params
        },
    },
    mutations: {
        setCategories(state, categories) {
            state.categories = categories;
        },
        setSelectedCategory(state, category) {
            state.selectedCategory = category;
        },
        setSortOptions(state, sortOptions) {
            state.sortOptions = sortOptions;
        },
        setSelectedSortOption(state, sortOption) {
            state.selectedSortOption = sortOption;
        },
        setSearchText(state, text) {
            state.searchText = text;
        },
        setCurrentPage(state, currentPage) {
            state.currentPage = currentPage;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
    },
    actions: {
        async getCategories({ commit, state }) {
            let categories = await createOauthRequest({
                url: 'products/categories',
                method: 'GET',
            })

            categories = categories.filter(item => item.name != 'Uncategorized')

            let transfomedCategories = []

            for (const category of categories) {

                if (category.parent == 0) {
                    transfomedCategories.push(category);
                    continue;
                }

                let parentIndex = categories.findIndex(item => item.id == category.parent)

                if (categories[parentIndex].children == undefined) {
                    categories[parentIndex].children = [];
                }

                categories[parentIndex].children.push(category);
            }
            commit('setCategories', transfomedCategories);
        }
    },
    namespaced: true
}
