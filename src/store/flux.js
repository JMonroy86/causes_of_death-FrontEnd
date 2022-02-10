const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: { search_tags_result: null, favorites: [] },
    actions: {
      searchTag: async (criteria) => {
        try {
          if (criteria !== "") {
            const response = await fetch(
              `http://localhost:5000/api/search/tag?name=${criteria}`
            );
            const data = await response.json();
            setStore({ search_tags_result: data });
          } else {
            setStore({ search_tags_result: null });
          }
        } catch (error) {
          throw error;
        }
      },
      add_to_favorite: (item) => {
        const store = getStore();
        setStore({ ...store }, store.favorites.push(item));
      },
      remove_from_favorite: (valueToRemove) => {
        const store = getStore();
        const filteredItems = store.favorites.filter(
          (item) => item !== valueToRemove
        );
        setStore({ favorites: filteredItems });
      },
    },
  };
};
export default getState;
