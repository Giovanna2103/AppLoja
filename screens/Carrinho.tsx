import * as React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native'; 
import { ScrollView } from "react-native-gesture-handler";
import {ipserver} from "../config/settings";
import {styles} from "../css/Styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";




export default function Carrinho(){
    // vamos construir uma estrutura para carregar os dados sobre um produtos que virão do banco de dados. Iremos criar um array(lista) com o uso de uma 
    // constante chamada de produtos. 
    const[produtos, setProdutos] = React.useState([])

    // O comando React.useEffect é executado uma vez ao abrir a tela de home. Ele será responsavel por carregar os dados do servidor.
    React.useEffect(()=>{
        fetch(`${ipserver}carrinho/itens`)
        .then ((response)=>response.json())
        .then((resultado)=>setProdutos(resultado.rs))
        .catch((erro)=>console.error(`Erro ao tentar carregar o seu carrinho${erro}`))
    })

    return(
        <View style={styles.container}>

            <ScrollView>
                <View style={styles.display}> 
                    {
                        produtos.map((item,ix) => (

                            <View key={item._id} style={styles.cxProduto}>

                                <Image source ={{uri:`${item.foto}`}} style={styles.foto}/>

                                <Text style={styles.nomeproduto}> {item.nomeproduto} </Text>

                                <Text style={styles.preco}> {item.preco} </Text>

                                <TouchableOpacity onPress={() => {
                                    removerDoCarrinho(item._id);
                                }} style={styles.btncarrinho}>

                                    <Text style={styles.txtcarrinho}>
                                        Remover <MaterialCommunityIcons name="cart-arrow-down" size={14} color="#fff" />
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    );
}

function removerDoCarrinho(id) {
    fetch(`${ipserver}carrinho/removeritem/${id}`, {
        method:"DELETE",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        }
    })
    .catch((error) => alert(`Erro ao tentar excluir item ${error}`))
}