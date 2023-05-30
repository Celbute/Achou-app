import { Text, Touch, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
import styles from './style';
import firebase from '../../config/fireBase'
import{getFirestore} from 'firebase/firestore'
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'
const db = getFirestore(firebase)

export default function CreateProduct({navigation}) {
    const [descricao, setDescricao] = useState("")
    const [valor, setValor] = useState("")
    const [errorCreateProduct, setErrorCreateProduct] = useState(null)

    const validate = () => {
        if (descricao == "" || valor == "") {
            setErrorCreateProduct("Informe a descrição e o valor")

        } else {
            setErrorCreateProduct(null)
            CreateProduct()
        }
    }

   const CreateProduct = () => {
        const newProduct= addDoc(collection(db,'products'),{
            descricao: descricao,
            valor: valor,
            data_registro: serverTimestamp()
        });

        navigation.navigate('Tabs')
    }

    return (
        <View style={styles.container}>

            {errorCreateProduct != null &&
                <Text style={styles.alert}>{errorCreateProduct}</Text>}

            <TextInput

                style={styles.formatInput}
                placeholder='Descrição'
                value={descricao}
                onChangeText={setDescricao} />

            <TextInput

                style={styles.formatInput}
                placeholder='Valor'
                value={valor}
                onChangeText={setValor}

            />
            <TouchableOpacity
                style={styles.formBtn}
                onPress={validate} >
                <Text style={styles.textBtn}>Criar anúncio</Text>
            </TouchableOpacity>

        </View>
    );
}