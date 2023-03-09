/**
 * based on grid2d layout.
 */
import { render } from 'amis'
type CardType = React.FC<any>
type CardsType = Array<Array<CardType>>
type CardBodyType = Array<React.FC<any>>
interface CardLayoutProps {
  gap: number
  gapRow: number
  cards: CardsType
}
interface CardProps {
  x: number
  y: number
  h: number
  w: number
  body: CardBodyType
}
const Card: React.FC<CardProps> = ({ x, y, h, w, body }) => {
  return render({
    type: 'page',
    x,
    y,
    h,
    w,
    body: (
      <>
        {body.map(Cmp => (
          <Cmp />
        ))}
      </>
    )
  })
}
const CardLayout: React.FC<CardLayoutProps> = ({ gap, gapRow, cards }) => {
  return render({
    type: 'grid-2d',
    gap,
    gapRow,
    grids: [],
    cards
  })
}
export default CardLayout
