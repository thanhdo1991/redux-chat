const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        {
          text: action.item.text,
          name: action.item.name,
          photoUrl: action.item.photoUrl
        }
      ]
    case 'ADD_IMAGE':
      return [
        ...state,
        {
          imageUrl: action.item.imageUrl,
          name: action.item.name,
          photoUrl: action.item.photoUrl
        }
      ]
    default:
      return state
  }
}

export default messages
