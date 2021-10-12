export function fetcheather(type) {
    if (type === 'comida') return fetchDrinksRecommendations();
    if (type === 'bebida') return fetchMealsRecommendations();
  }