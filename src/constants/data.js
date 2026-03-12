import friends from "/images/friends-group.png";
import emma from "/images/emma.png";
import john from "/images/john-doe.png";
import will from "/images/will-smith.png"
import alex from "/images/alex-mercer.png"
import kirmada from "/images/kirmada.png"
import generic_user from "/images/generic-user.png";
console.log(generic_user)

const comments = [
  {
    id: 1,
    profile: john,
    username: "john_doe",
    comment: "Man, this beach trip was exactly what we needed after so long. Miss you guys already!"
  },
  {
    id: 2,
    profile: will,
    username: "will_smith",
    comment: "Best reunion ever! The sunset at the beach was absolutely beautiful."
  },
  {
    id: 3,
    profile: alex,
    username: "alex_mercer_28",
    comment: "Next time we need to stay longer. One day at the beach was not enough!"
  },
  {
    id: 4,
    profile: kirmada,
    username: "kirmada",
    comment: "Loved the bonfire night and all the crazy stories we shared."
  }
];

export {friends, emma, john, generic_user, comments};