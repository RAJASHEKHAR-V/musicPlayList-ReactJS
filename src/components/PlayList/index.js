import {Component} from 'react'
import PlayItem from '../PlayListItem'

import {
  BgContainer,
  PlayListBackgroundImageCard,
  PlayListSearchCard,
  Heading,
  ParaGraph,
  SearchCard,
  SearchInput,
  SearchIcon,
  PlayListBody,
  PlayListCard,
} from './componentStyle'

class PlayList extends Component {
  constructor(props) {
    super(props)
    this.state = {playList: props.initialTracksList, inputChange: ''}
  }

  onDelateOf = deleteId => {
    this.setState(prevState => ({
      playList: prevState.playList.filter(eachItem => eachItem.id !== deleteId),
    }))
  }

  onInputChange = event => {
    this.setState({
      inputChange: event.target.value,
    })
  }

  onFilter = () => {
    const {playList, inputChange} = this.state
    console.log(inputChange)
    const filterList = playList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(inputChange.toLowerCase()),
    )
    return filterList
  }

  render() {
    const {inputChange} = this.state
    const getFilterList = this.onFilter()

    return (
      <BgContainer>
        <PlayListBackgroundImageCard>
          <Heading>Ed Sheeran</Heading>
          <ParaGraph>Singer</ParaGraph>
        </PlayListBackgroundImageCard>
        <PlayListSearchCard>
          <Heading>Songs Playlist</Heading>
          <SearchCard>
            <SearchInput
              placeholder="Search"
              type="search"
              value={inputChange}
              onChange={this.onInputChange}
            />
            <SearchIcon />
          </SearchCard>
        </PlayListSearchCard>
        <PlayListBody>
          {getFilterList.length > 0 ? (
            <PlayListCard>
              {getFilterList.map(eachItem => (
                <PlayItem
                  key={eachItem.id}
                  playItem={eachItem}
                  onDelateOf={this.onDelateOf}
                />
              ))}
            </PlayListCard>
          ) : (
            <Heading as="p">No Songs Found</Heading>
          )}
        </PlayListBody>
      </BgContainer>
    )
  }
}

export default PlayList
