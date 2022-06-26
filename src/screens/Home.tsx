import React, { FC } from 'react'
import { FlatList} from 'react-native'
import Box from '../atoms/Box'
import Card from '../atoms/Card'
import { Header } from '../atoms/Header'
import Text from '../atoms/Text'

type listProps = {
  id:number,
  text:string
}

const renderItem = (item:listProps) => {
  return(
    <Card borderRadius={5} mt='m' px='m' py='s' variant='secondary'>
      <Text variant='body'>{item.text}</Text>
    </Card>
  )
 }

export const Home = () => {

  const listData:Array<listProps> = [
    { id:1, text:'Hello'},
    { id:2, text:'How'},
    { id:3, text:'Are'},
    { id:4, text:'You'},
  ]

  return (
    <Box flex={1} bg='mainBackground' px='m'>
       <Header 
        title='Home' 
        backgroundColor={'primaryBackground'} 
        mx='-m' 
        px='m'
        pb='s'
        alignItems='center'
        />
        <FlatList
          data={listData}
          renderItem={({item})=>renderItem(item)}
          keyExtractor={item=>item.id.toString()}
        />
    </Box>
  )
}