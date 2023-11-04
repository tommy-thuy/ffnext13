import CardRoot from './CardRoot'
import { CardNoneClickRoot } from './CardNoneClickRoot'
import CardTitle from './CardTitle'
import CardActions from './CardActions'
import CardLinkAction from './CardLinkAction'
import CardContainer from './CardContainer'
import { CardFavoriteStarAction } from "./CardFavoriteStarAction";

const Card = {
  Root: CardRoot,
  Container: CardContainer,
  Title: CardTitle,
  Actions: CardActions,
  Link: CardLinkAction,
  Favorite: CardFavoriteStarAction,
  NoneClickRoot: CardNoneClickRoot,
}

export default Card
