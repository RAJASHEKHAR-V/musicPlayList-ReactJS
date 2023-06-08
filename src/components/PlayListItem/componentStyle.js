import styled from 'styled-components'

import {AiOutlineDelete} from 'react-icons/ai'

export const PlayListItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const PlayImageDetailsCard = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
`
export const PlayImage = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 10px;
`
export const DetailCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const Name = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 500;
  font-size: 20px;
  margin: 0px;
`
export const Genre = styled.p`
  font-family: 'Roboto';
  color: #3b82f6;
  font-weight: 500;
  font-size: 20px;
  margin: 0px;
`
export const DurationDeleteCard = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Duration = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 500;
  font-size: 20px;
`
export const Button = styled.button`
  width: 80px;
  height: 30px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
`
export const DeleteIcon = styled(AiOutlineDelete)`
  height: 20px;
  width: 20px;
  color: #ffffff;
`
