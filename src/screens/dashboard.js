import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import CovidIndonesiaApi from '../api/covidIndonesia';

export default function Dashboard({navigation}) {

    const scv = [
        {id: 'Jumlah Kasus', value: 0},
        {id: 'Meninggal', value: 0},
        {id: 'Sembuh', value: 0},
        {id: 'Perawatan', value: 0},
    ];

    const [summaryCovidData, setSummaryCovid] = useState([scv]);

    useEffect(() => {
        async function getCovidData() {
            try {
                let response = await CovidIndonesiaApi.get('/');
                let sc = [
                    {id: 'Jumlah Kasus', value: response.data.jumlahKasus},
                    {id: 'Meninggal', value: response.data.meninggal},
                    {id: 'Sembuh', value: response.data.sembuh},
                    {id: 'Perawatan', value: response.data.perawatan},
                ];

                setSummaryCovid(sc);
            } catch (error) {
                console.log(error);
            }
        }

        getCovidData();
        // console.log(summaryCovidData);

    }, [summaryCovidData]);

    function JSONEmpty(obj) {
        return !obj.length ||
            !obj.filter(function (a) {
                return Object.keys(a).length;
            }).length;
    }

    return (
        <View>
            <Text>
            {

                summaryCovidData != undefined && !JSONEmpty(summaryCovidData) ?
                    summaryCovidData.map(
                        (dataCovid) => {
                            return(
                            <TouchableOpacity>
                                <Text onPress={() => navigation.navigate('Dashboard Details')}>
                                    {"\n"}
                                    {dataCovid.id} : {dataCovid.value}
                                    {"\n"}
                                </Text>
                            </TouchableOpacity>
                            )
                        },
                    )
                    : 'N/A'
            }
            </Text>
        </View>
    );
}
