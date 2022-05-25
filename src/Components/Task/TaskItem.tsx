import React, { FC } from 'react'

interface IProps{
  name: string,
  description: string,
  id: number,
  state: boolean
}

export const TaskItem: FC<IProps> = ({name, description, id, state}) => {
  return (
    <div>
      <h3>{name}</h3>
      <h2>{description}</h2>
    </div>
  )
}
