import styled from 'styled-components'

import {BsSearch} from 'react-icons/bs'

export const BgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PlayListBackgroundImageCard = styled.div`
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding-left: 30px;
`

export const PlayListSearchCard = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 600;
  font-size: 25px;
`

export const ParaGraph = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 400;
  font-size: 20px;
`

export const SearchCard = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  margin: 0px;
`

export const SearchInput = styled.input`
  width: 90%;
  height: 30px;
  background-color: transparent;
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;
  border: none;
  outline: none;
  padding-left: 10px;
`
export const SearchIcon = styled(BsSearch)`
  height: 15px;
  width: 15px;
  color: #ffffff;
`

export const PlayListBody = styled.div`
  width: 90%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PlayListCard = styled.ul`
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  overflow-y: auto;
  height: 500px;
`
