import React, { useState } from 'react'
import { View, Button, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const Search = () => {

    const navigation = useNavigation();

    const [searchQuery, setSearchQuery] = useState('');

    return (
        <View className="p-1 flex flex-row">
            <View className="p-1 w-3/4">
                <TextInput
                    placeholder="Search "
                    autoCapitalize="none"
                    autoCorrect={false}
                    enablesReturnKeyAutomatically
                    className="border border-l-black p-2 h-10 rounded-lg"
                    onChangeText={(value) => setSearchQuery(value)}
                />
            </View>
            <View className="p-1">
                <Button
                    title="search"
                    onPress={() => navigation.navigate('Result', {
                        search_query: searchQuery
                    })}
                />
            </View>
        </View>
    )
}

