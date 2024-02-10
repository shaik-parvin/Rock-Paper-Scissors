import {OptionListItem, GameOptionButton, OptionImage} from './styledComponents'

const GameOptions = props => {
  const {optionDetails, onClickSetUserChoice} = props
  const {imageUrl, id} = optionDetails
  const userChoice = () => {
    onClickSetUserChoice(id)
  }

  return (
    <OptionListItem>
      <GameOptionButton
        data-testid={`${id.toLowerCase()}Button`}
        type="button"
        onClick={userChoice}
      >
        <OptionImage src={imageUrl} alt={id} />
      </GameOptionButton>
    </OptionListItem>
  )
}

export default GameOptions
