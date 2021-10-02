import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

// eslint-disable-next-line max-len
exports.scheduledFunction = functions.pubsub.schedule('every 15 seconds').onRun( async(context) => {
  // get the current game
  const current_game_ref = await admin.database().ref('/games/roulette/current').once('value')
  const current_game = current_game_ref.val()

  console.log(current_game)

  return null
})
