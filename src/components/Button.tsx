import React from 'react'
import { Pressable, Text } from 'react-native'
import { globalStyles } from '../theme';

interface props{
   onClick: () => void;
   type: 'primary' | 'secondary' | 'tertiary';
   label: string;
}

export const Button = ( { onClick, label, type }: props ) => {

   return (
      <Pressable onPress={onClick} style={ [ globalStyles.btn, globalStyles[type] ] }>
         <Text style={ globalStyles.btnText }> { label } </Text>
      </Pressable>
   )
}
