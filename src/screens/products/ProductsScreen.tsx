import { useNavigation } from "@react-navigation/native"
import { FlatList, FlatListProps, Text, View } from "react-native"
import { globalStyles } from "../../theme"
import { Button } from "../../components"

const items = [
   {  id: 1, name: 'takos 1' },
   {  id: 2, name: 'takos 2' },
   {  id: 3, name: 'takos 3' },
   {  id: 4, name: 'takos 4' },
   {  id: 5, name: 'takos 5' },
   {  id: 6, name: 'takos 6' },
   {  id: 7, name: 'takos 7' },
]



interface renderProp { 
   item: { id: number; name: string; };
   index: number;
   reparators: {
      highlight: () => void;
      unhighlight: () => void;
      updateProps: ( select: 'leading' | 'trailing', newProps: any) => void;
   }
};

const ProductsScreen = () => {
   
   const navigation = useNavigation()

   const handleRenderItem = ({ item }: { item: { id: number; name: string; } } ) => {

      return <View>

         <Button 
            type={'primary'} 
            onClick={() => navigation.navigate( "Product" as never )} 
            label={ item.name } 
         />

      </View>
   }

   return (
      <View style={ globalStyles.container }>
         <Text style={{ marginBottom: 10, textAlign: 'center', fontSize: 25, fontWeight: '500' }}> Productos </Text>
         
         <FlatList
            data={ items }
            renderItem={ handleRenderItem }
             keyExtractor={(item) => item.id.toString()}
         />

         

         <Button 
            type={'primary'} 
            onClick={() => navigation.navigate( "Settings" as never )} 
            label={ "Settings" } 
         />

      </View>
   )
}

export default ProductsScreen;