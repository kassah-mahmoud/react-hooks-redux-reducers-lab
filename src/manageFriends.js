export function manageFriends(state = {
  friends: []
}, action) {
  switch (action.type) {
    case "friends/add":
      return {
        ...state,
        friends: [...state.friends, action.payload]
      }
    case "friends/remove":
      return {
        ...state,
        friends: state.friends.filter(friend => friend.id !== action.payload)
      }
    default:
      return state;
  }
}
