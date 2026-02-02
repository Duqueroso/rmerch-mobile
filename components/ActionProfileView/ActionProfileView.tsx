
import { StyleSheet, Text, View } from 'react-native'

interface ActionBar {
    borderTop?: boolean,
    borderBottom?: boolean
}

export const ActionProfileView = ({borderBottom=false, borderTop=false}: ActionBar) => {
  return (
    <View style={[
        Style.ActionBar,
        borderBottom && {borderBottomLeftRadius:50, borderBottomRightRadius:50},
        borderTop && {borderTopLeftRadius:50, borderTopRightRadius:50}
    ]}>
        <Text>HOLA</Text>
    </View>
  )
}


const Style = StyleSheet.create({
    ActionBar:{
        backgroundColor:"#ffffff"
    }
})
