import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, Text, TouchableOpacity} from 'react-native';
import CovidIndonesiaApi from '../api/covidIndonesia';

export default function Dashboard({navigation}) {

    const scv = [
        {id: 1, type: 'Jumlah Kasus', value: 0},
        {id: 2, type: 'Meninggal', value: 0},
        {id: 3, type: 'Sembuh', value: 0},
        {id: 4, type: 'Perawatan', value: 0},
    ];

    const [summaryCovidData, setSummaryCovid] = useState([scv]);

    useEffect(() => {
        async function getCovidData() {
            try {
                const response = await CovidIndonesiaApi.get('/');
                let sc = [
                    {id: 1, type: 'Jumlah Kasus', value: response.data.jumlahKasus},
                    {id: 2, type: 'Meninggal', value: response.data.meninggal},
                    {id: 3, type: 'Sembuh', value: response.data.sembuh},
                    {id: 4, type: 'Perawatan', value: response.data.perawatan},
                ];

                setSummaryCovid(sc);

            } catch (error) {
                console.log(error);
            }
        }

        getCovidData();

    }, []);

    function JSONEmpty(obj) {
        return !obj.length ||
            !obj.filter(function (a) {
                return Object.keys(a).length;
            }).length;
    }

    return (
        <SafeAreaView>
            <FlatList
                data={summaryCovidData}
                renderItem={({item}) => {
                    return (<TouchableOpacity>
                        <Text onPress={() => navigation.navigate('Dashboard Details')}>
                            {'\n'}
                            {item.type} : {item.value}
                            {'\n'}
                        </Text>
                    </TouchableOpacity>);
                }}
                keyExtractor={summaryCovidData => summaryCovidData.id}
            />
        </SafeAreaView>
    );
}

