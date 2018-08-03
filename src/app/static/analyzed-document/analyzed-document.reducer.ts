export const analyzedDocuments = (state = [], action) => {
    switch (action.type) {
      case 'ADD_ANALYZED_DOCUMENT':
        return [...state, action.payload];
      default:
        return state;
    }
};
