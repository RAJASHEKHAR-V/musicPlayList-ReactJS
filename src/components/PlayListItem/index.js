import {
  PlayListItem,
  PlayImageDetailsCard,
  PlayImage,
  DetailCard,
  Name,
  Genre,
  DurationDeleteCard,
  Duration,
  Button,
  DeleteIcon,
} from './componentStyle'

const PlayItem = props => {
  const {playItem, onDelateOf} = props
  const {id, imageUrl, name, genre, duration} = playItem
  const onDelete = () => {
    onDelateOf(id)
  }

  return (
    <PlayListItem>
      <PlayImageDetailsCard>
        <PlayImage src={imageUrl} alt="track" />
        <DetailCard>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </DetailCard>
      </PlayImageDetailsCard>
      <DurationDeleteCard>
        <Duration>{duration}</Duration>
        <Button type="button" data-testid="delete" onClick={onDelete}>
          <DeleteIcon />
        </Button>
      </DurationDeleteCard>
    </PlayListItem>
  )
}

export default PlayItem
