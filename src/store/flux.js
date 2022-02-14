const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      table_data: null,
      search_tags_result: null,
      favorites: [],
      chartName: "",
    },
    actions: {
      getAllTags: async () => {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/causes/getAllCauses`
        );
        const data = await response.json();
        setStore({table_data: data})
      },
      searchTag: async (criteria) => {
        try {
          if (criteria !== "") {
            const response = await fetch(
              `${process.env.REACT_APP_API_URL}/api/search/tag?name=${criteria}`
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
        setStore({ favorites: filteredItems , chartData: undefined, chartName: ''});
      },
      fetchPrices: async (name, slug, year) => {
        try {
          const res = await fetch(
            `${process.env.REACT_APP_API_URL}/api/causes/findByTag?tagsArray=${slug}&year=${year}`
          );
          const data = await res.json();
          setStore({
            chartData: {
              labels: [
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre",
              ],
              datasets: [
                {
                  label: "Futuro",
                  data: data.map((value) => value[slug]),
                  backgroundColor: "rgb(113, 171, 217)",
                  borderColor: "rgba(255, 99, 132, 1)",
                },
              ],
            },
            chart: {name, year},
          });
        } catch (error) {
          throw error
        }
      },
    },
  };
};
export default getState;
