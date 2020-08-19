import React from 'react'
import {StyleSheet, View} from 'react-native'

import {CharacterInfo} from './components/CharacterInfo'
import {Header} from './components/Header'

export default function () {
    const SageDescription = 'Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a ' +
        'equipe aonde quer que vá. Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha.'
    const CypherDescription = 'Cypher, um vendedor de informações do Marrocos, é uma verdadeira rede de vigilância ' +
        'de um homem só que fica de olho em cada movimento dos inimigos. Nenhum segredo está a salvo. Nenhuma manobra passa despercebida. Cypher está sempre vigiando.'
    const KilljoyDescription = 'Killjoy, uma alemã genial, defende o campo de batalha facilmente usando seu arsenal de ' +
        'invenções. Se o dano causado por seu equipamento não der cabo dos inimigos, os efeitos negativos de seus queridos robôs dão conta do recado.'
    return (
        <View style={style.Container}>
            <Header/>
            <CharacterInfo description={SageDescription}
                           imageUrl='https://images4.alphacoders.com/108/thumb-1920-1080943.jpg'/>
            <CharacterInfo description={CypherDescription}
                           imageUrl='https://multiversomais.com/wp-content/uploads/2020/04/valorantcyph-gs.jpg'/>
            <CharacterInfo description={KilljoyDescription}
                           imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6tSyFlpCq1RTdwbcLHxMChihSRh6NeMvYSQ&usqp=CAU'/>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        flex: 1,
        display: 'flex',
    },
})
