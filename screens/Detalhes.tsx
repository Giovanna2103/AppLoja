import * as React from "react";
import {View, Text, Image} from 'react-native'; 
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {ipserver} from "../config/settings";
import {styles} from "../css/Styles";

import {MaterialCommunityIcons} from "@expo/vector-icons";


export default function Detalhes({route}){

    const {idproduto} = route.params;

    // vamos construir uma estrutura para carregar os dados sobre um produtos que virão do banco de dados. Iremos criar um array(lista) com o uso de uma 
    // constante chamada de produtos. 
    const[produtos, setProdutos] = React.useState([])

    // O comando React.useEffect é executado uma vez ao abrir a tela de home. Ele será responsavel por carregar os dados do servidor.
    React.useEffect(()=>{
        fetch(`${ipserver}produto/codproduto/${idproduto}`)
        .then ((response)=>response.json())
        .then((resultado)=>setProdutos(resultado.rs))
        .catch((erro)=>console.error(`Erro ao tentar carregar os produtos->${erro}`))
    },[])

    return(
        <View style={styles.container}>

            <ScrollView>

                <View style={styles.display}> 

                            <View>

                                <Image source ={{uri:`${produtos.foto}`}} style={styles.fotodetalhe}/>

                                <Text style={styles.nomeproduto}> {produtos.nomeproduto} </Text>

                                <Text style={styles.idproduto}> Código do Produto: {produtos._id} </Text>

                                <Text style={styles.descricao}> {produtos.descricao}</Text>

                                <Text style={styles.precodetalhe}> {produtos.preco} </Text>


                                <TouchableOpacity onPress={() =>{
                                    adicionarCarrinho(produtos);
                                }} style={styles.btncarrinho}>

                                    <Text style={styles.txtcarrinho}> 
                                        Adicionar ao Carrinho  <MaterialCommunityIcons name="cart-arrow-down" size={16} color="#fff" /> 
                                        </Text>
                                    
                                </TouchableOpacity>


                            </View>

                </View>

            </ScrollView>

        </View>
    )
}

function adicionarCarrinho(dados) {
    fetch(`${ipserver}carrinho/adicionar`, {
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            idproduto:dados._id,
            nomeproduto:dados.nomeproduto,
            preco:dados.preco,
            foto:dados.foto
        })
    })
    .then((response) => response.json())
    .then((resultado) => alert(resultado.rs))
    .catch((error) => alert(`Não foi possivel adicionar ${error}`))
}